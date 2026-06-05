'use strict';
const { json, getSql, ensureTable } = require('./_db.js');

module.exports = async (req, res) => {
  if (req.method !== 'GET') return json(res, 405, { error: 'Método no permitido' });
  const sql = getSql();
  if (!sql) return json(res, 503, { error: 'DATABASE_URL no configurada' });
  try {
    await ensureTable(sql);
    const rows = await sql`SELECT count(*)::int AS n FROM push_subscriptions`;
    return json(res, 200, { subscribers: rows[0].n });
  } catch (e) {
    return json(res, 500, { error: 'Error de base de datos', detail: e.message });
  }
};
