/* Tortillap shared runtime — day/night theme + a client-side data layer.
 *
 * There is no server in this PWA, so accounts, profiles, locations and the
 * admin console are all persisted in localStorage. Passwords are stored as
 * SHA-256 digests (never plaintext) — adequate for a prototype, NOT a
 * substitute for real server-side auth. Everything is exposed on `window.TP`.
 */
(function () {
  'use strict';

  var TP = (window.TP = window.TP || {});

  /* ---- Theme (day / night) ------------------------------------------- */
  var THEME_KEY = 'tp-theme';
  var META_COLOR = { dark: '#0e0e0e', light: '#fff8f5' };

  function currentTheme() {
    var r = document.documentElement;
    return r.classList.contains('light') ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    var r = document.documentElement;
    r.classList.toggle('dark', theme === 'dark');
    r.classList.toggle('light', theme === 'light');
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', META_COLOR[theme] || META_COLOR.dark);
    document.querySelectorAll('[data-theme-icon]').forEach(function (el) {
      el.textContent = theme === 'light' ? 'dark_mode' : 'light_mode';
    });
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  }

  function toggleTheme() {
    applyTheme(currentTheme() === 'light' ? 'dark' : 'light');
  }

  TP.theme = { current: currentTheme, set: applyTheme, toggle: toggleTheme };

  function injectThemeToggle() {
    if (document.querySelector('.tp-theme-toggle')) return;
    var btn = document.createElement('button');
    btn.className = 'tp-theme-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Cambiar entre modo día y noche');
    btn.title = 'Modo día / noche';
    btn.innerHTML =
      '<span class="material-symbols-outlined" data-theme-icon>' +
      (currentTheme() === 'light' ? 'dark_mode' : 'light_mode') +
      '</span>';
    btn.addEventListener('click', toggleTheme);
    document.body.appendChild(btn);
  }

  /* ---- Tiny crypto + persistence ------------------------------------- */
  async function sha256(text) {
    try {
      var buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
      return Array.prototype.map
        .call(new Uint8Array(buf), function (b) { return ('0' + b.toString(16)).slice(-2); })
        .join('');
    } catch (e) {
      // Fallback for non-secure contexts (file://). Not cryptographic.
      var h = 0, i;
      for (i = 0; i < text.length; i++) { h = (h << 5) - h + text.charCodeAt(i); h |= 0; }
      return 'x' + (h >>> 0).toString(16);
    }
  }

  function read(key, fallback) {
    try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch (e) { return fallback; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }

  var USERS = 'tp-users', SESSION = 'tp-session', SETTINGS = 'tp-settings';

  /* ---- Domain catalogs ----------------------------------------------- */
  TP.PROFILE_TYPES = [
    { id: 'tortilleria', label: 'Tortillería', icon: 'storefront',
      blurb: 'Produces y vendes tortilla al público o a negocios.' },
    { id: 'proveedor', label: 'Proveedor de insumos', icon: 'inventory_2',
      blurb: 'Vendes maíz, masa, harina, maquinaria o refacciones.' },
    { id: 'distribuidor', label: 'Distribuidor', icon: 'local_shipping',
      blurb: 'Mueves producto entre productores y puntos de venta.' },
    { id: 'aliado', label: 'Aliado / Consumidor', icon: 'volunteer_activism',
      blurb: 'Apoyas la red como cliente, institución o socio.' },
  ];

  TP.STATES = [
    'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche',
    'Chiapas', 'Chihuahua', 'Ciudad de México', 'Coahuila', 'Colima',
    'Durango', 'Estado de México', 'Guanajuato', 'Guerrero', 'Hidalgo',
    'Jalisco', 'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca',
    'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa',
    'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán',
    'Zacatecas',
  ];

  var AVATAR_COLORS = ['#d97706', '#ab4c00', '#bfab56', '#765845', '#5f6135', '#904d00'];

  /* ---- Data layer ----------------------------------------------------- */
  function genId() {
    return 'u_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }

  var store = {
    users: function () { return read(USERS, []); },
    saveUsers: function (list) { write(USERS, list); },
    settings: function () {
      return read(SETTINGS, { registrationOpen: true, requireApproval: false });
    },
    saveSettings: function (s) { write(SETTINGS, s); },

    findByEmail: function (email) {
      email = (email || '').trim().toLowerCase();
      return store.users().filter(function (u) { return u.email === email; })[0] || null;
    },
    byId: function (id) {
      return store.users().filter(function (u) { return u.id === id; })[0] || null;
    },

    current: function () {
      var id = read(SESSION, null);
      return id ? store.byId(id) : null;
    },
    setSession: function (id) { write(SESSION, id); },
    logout: function () { try { localStorage.removeItem(SESSION); } catch (e) {} },

    register: async function (data) {
      if (store.findByEmail(data.email)) throw new Error('Ya existe una cuenta con ese correo.');
      var users = store.users();
      var user = {
        id: genId(),
        createdAt: Date.now(),
        role: 'member',
        status: (data.status || (store.settings().requireApproval ? 'pending' : 'active')),
        type: data.type || 'tortilleria',
        name: (data.name || '').trim(),
        email: (data.email || '').trim().toLowerCase(),
        phone: (data.phone || '').trim(),
        passhash: await sha256(data.password || ''),
        business: data.business || {},
        location: data.location || {},
        avatarColor: AVATAR_COLORS[users.length % AVATAR_COLORS.length],
      };
      users.push(user);
      store.saveUsers(users);
      store.setSession(user.id);
      return user;
    },

    login: async function (email, password) {
      var u = store.findByEmail(email);
      if (!u) throw new Error('No encontramos una cuenta con ese correo.');
      if (u.status === 'suspended') throw new Error('Tu cuenta está suspendida. Contacta al administrador.');
      if (u.passhash !== await sha256(password || '')) throw new Error('Contraseña incorrecta.');
      store.setSession(u.id);
      return u;
    },

    update: function (id, patch) {
      var users = store.users();
      var i = users.findIndex(function (u) { return u.id === id; });
      if (i === -1) return null;
      users[i] = Object.assign({}, users[i], patch);
      store.saveUsers(users);
      return users[i];
    },

    remove: function (id) {
      store.saveUsers(store.users().filter(function (u) { return u.id !== id; }));
      if (read(SESSION, null) === id) store.logout();
    },

    // Seed a default administrator the first time the app runs.
    seed: async function () {
      if (read('tp-seeded', false)) return;
      write('tp-seeded', true);
      if (store.findByEmail('admin@tortillap.mx')) return;
      var users = store.users();
      users.push({
        id: genId(), createdAt: Date.now(), role: 'admin', status: 'active',
        type: 'aliado', name: 'Administrador Tortillap',
        email: 'admin@tortillap.mx', phone: '',
        passhash: await sha256('tortillap2026'),
        business: { tradeName: 'Tortillap HQ', description: 'Cuenta maestra de la red.' },
        location: { state: 'Ciudad de México', city: 'CDMX' },
        avatarColor: '#d97706',
      });
      store.saveUsers(users);
    },
  };
  TP.store = store;

  TP.initials = function (name) {
    return (name || '?').trim().split(/\s+/).slice(0, 2)
      .map(function (w) { return w[0]; }).join('').toUpperCase();
  };
  TP.typeLabel = function (id) {
    var t = TP.PROFILE_TYPES.filter(function (p) { return p.id === id; })[0];
    return t ? t.label : id;
  };

  /* ---- Guards used by the new screens -------------------------------- */
  TP.requireAuth = function () {
    var u = store.current();
    if (!u) { location.href = '/login.html?next=' + encodeURIComponent(location.pathname); return null; }
    return u;
  };
  TP.requireAdmin = function () {
    var u = store.current();
    if (!u) { location.href = '/login.html?next=' + encodeURIComponent(location.pathname); return null; }
    if (u.role !== 'admin') { location.href = '/perfil.html'; return null; }
    return u;
  };


  /* ---- Web Push (TP.push) --------------------------------------------- */
  function urlBase64ToUint8Array(base64String) {
    var padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    var base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    var raw = atob(base64);
    var arr = new Uint8Array(raw.length);
    for (var i = 0; i < raw.length; i++) arr[i] = raw.charCodeAt(i);
    return arr;
  }

  TP.push = {
    supported: function () {
      return 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
    },
    getSubscription: async function () {
      if (!TP.push.supported()) return null;
      var reg = await navigator.serviceWorker.ready;
      return reg.pushManager.getSubscription();
    },
    isEnabled: async function () {
      try { return !!(await TP.push.getSubscription()); } catch (e) { return false; }
    },
    subscribe: async function () {
      if (!TP.push.supported()) throw new Error('Tu navegador no soporta notificaciones push.');
      var perm = await Notification.requestPermission();
      if (perm !== 'granted') throw new Error('Permiso de notificaciones denegado.');
      var keyRes = await fetch('/api/push/key');
      if (!keyRes.ok) throw new Error('No se pudo obtener la llave pública del servidor.');
      var pub = (await keyRes.json()).key;
      var reg = await navigator.serviceWorker.ready;
      var sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(pub),
      });
      var save = await fetch('/api/push/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sub.toJSON()),
      });
      if (!save.ok) {
        var err = {}; try { err = await save.json(); } catch (e2) {}
        throw new Error(err.error || 'No se pudo guardar la suscripción.');
      }
      return sub;
    },
    unsubscribe: async function () {
      var sub = await TP.push.getSubscription();
      if (sub) await sub.unsubscribe();
      return true;
    },
  };

  /* ---- Wire entry points across the marketing pages ------------------ */
  function wireEntryPoints() {
    // "Unirse a la Red" CTAs -> registration.
    document.querySelectorAll('button, a').forEach(function (el) {
      var t = (el.textContent || '').toLowerCase();
      if (t.indexOf('unirse a la red') !== -1 || t.indexOf('únete') !== -1) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', function (e) {
          if (el.tagName === 'A' && el.getAttribute('href') && el.getAttribute('href') !== '#') return;
          e.preventDefault();
          location.href = '/registro.html';
        });
      }
    });

    // Header person avatar -> profile (or login) ; also surface admin link.
    var u = store.current();
    var person = document.querySelector('header [data-icon="person"]');
    var avatar = person ? person.closest('div') : null;
    if (avatar) {
      avatar.style.cursor = 'pointer';
      avatar.addEventListener('click', function () {
        location.href = u ? '/perfil.html' : '/login.html';
      });
      if (u) {
        person.textContent = '';
        avatar.classList.remove('bg-surface-container-high');
        avatar.style.background = u.avatarColor;
        avatar.style.color = '#fff';
        avatar.style.fontWeight = '700';
        avatar.style.fontSize = '12px';
        avatar.textContent = TP.initials(u.name);
      }
    }
  }

  /* ---- Boot ----------------------------------------------------------- */
  function init() {
    store.seed();
    injectThemeToggle();
    wireEntryPoints();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
