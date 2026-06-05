'use strict';
const webpush = require('web-push');
const { json, readBody, getSql, ensureTable } = require('./_db.js');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return json(res, 405, { error: 'Método no permitido' });

  const adminKey = process.env.ADMIN_PUSH_KEY;
  if (!adminKey || req.headers['x-admin-key'] !== adminKey) {
    return json(res, 401, { error: 'No autorizado' });
  }
  if (!process.env.VAPID_PUBLIC_KEY || !process.env.VAPID_PRIVATE_KEY) {
    return json(res, 503, { error: 'Llaves VAPID no configuradas' });
  }
  const sql = getSql();
  if (!sql) return json(res, 503, { error: 'DATABASE_URL no configurada' });

  let body;
  try { body = await readBody(req); } catch (e) { return json(res, 400, { error: 'JSON inválido' }); }
  const title = (body.title || '').trim();
  const message = (body.message || '').trim();
  if (!title || !message) return json(res, 400, { error: 'Faltan título o mensaje' });

  webpush.setVapidDetails('mailto:admin@tortillap.mx', process.env.VAPID_PUBLIC_KEY, process.env.VAPID_PRIVATE_KEY);

  try {
    await ensureTable(sql);
    const rows = await sql`SELECT endpoint, subscription FROM push_subscriptions`;
    const payload = JSON.stringify({ title, message });
    let sent = 0, failed = 0;
    const dead = [];
    await Promise.all(rows.map(async (r) => {
      try {
        await webpush.sendNotification(typeof r.subscription === 'string' ? JSON.parse(r.subscription) : r.subscription, payload);
        sent++;
      } catch (e) {
        failed++;
        if (e.statusCode === 404 || e.statusCode === 410) dead.push(r.endpoint);
      }
    }));
    for (const ep of dead) {
      await sql`DELETE FROM push_subscriptions WHERE endpoint = ${ep}`;
    }
    return json(res, 200, { ok: true, sent, failed, removed: dead.length, total: rows.length });
  } catch (e) {
    return json(res, 500, { error: 'Error enviando notificaciones', detail: e.message });
  }
};
