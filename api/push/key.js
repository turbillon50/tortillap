'use strict';
const { json } = require('./_db.js');

module.exports = async (req, res) => {
  if (req.method !== 'GET') return json(res, 405, { error: 'Método no permitido' });
  const key = process.env.VAPID_PUBLIC_KEY;
  if (!key) return json(res, 503, { error: 'VAPID_PUBLIC_KEY no configurada' });
  return json(res, 200, { key });
};
