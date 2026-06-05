'use strict';
const { json, readBody, getSql, ensureTable } = require('./_db.js');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return json(res, 405, { error: 'Método no permitido' });
  const sql = getSql();
  if (!sql) return json(res, 503, { error: 'DATABASE_URL no configurada' });
  let sub;
  try { sub = await readBody(req); } catch (e) { return json(res, 400, { error: 'JSON inválido' }); }
  if (!sub || !sub.endpoint || !sub.keys) return json(res, 400, { error: 'Suscripción inválida (falta endpoint o keys)' });
  try {
    await ensureTable(sql);
    await sql`INSERT INTO push_subscriptions (endpoint, subscription)
              VALUES (${sub.endpoint}, ${JSON.stringify(sub)})
              ON CONFLICT (endpoint) DO UPDATE SET subscription = EXCLUDED.subscription`;
    return json(res, 201, { ok: true });
  } catch (e) {
    return json(res, 500, { error: 'Error de base de datos', detail: e.message });
  }
};
