/* Tortillap PWA — shared client boot: SW registration, navigation wiring,
   active-state, install prompt and a mobile menu. Runs on every page. */
(function () {
  'use strict';

  // --- Route map: nav label (normalized) -> destination ----------------------
  var ROUTES = {
    inicio: '/index.html',
    red: '/red.html',
    beneficios: '/beneficios.html',
    comunidad: '/red.html',
    mercado: '/mercado.html',
    perfil: '/index.html',
  };

  function norm(s) {
    return (s || '')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLowerCase().trim();
  }

  function routeFor(label) {
    var key = norm(label);
    for (var name in ROUTES) {
      if (key === name || key.indexOf(name) !== -1) return ROUTES[name];
    }
    return null;
  }

  var currentPage = document.documentElement.getAttribute('data-page') || 'inicio';

  // --- Wire every placeholder anchor to a real destination -------------------
  function wireNav() {
    var anchors = document.querySelectorAll('a');
    anchors.forEach(function (a) {
      var href = a.getAttribute('href');
      // Only rewrite placeholder/empty links; keep real anchors intact.
      if (href && href !== '#' && !href.startsWith('#')) return;
      var dest = routeFor(a.textContent);
      if (dest) a.setAttribute('href', dest);
    });

    // Brand/logo in the header -> home.
    var brand = document.querySelector('header h1');
    if (brand && !brand.closest('a')) {
      brand.style.cursor = 'pointer';
      brand.addEventListener('click', function () { location.href = '/index.html'; });
    }

    // Highlight the active item in the bottom nav.
    var activeDest = ROUTES[currentPage];
    document.querySelectorAll('nav a').forEach(function (a) {
      if (a.getAttribute('href') === activeDest) {
        a.classList.add('text-primary');
        a.classList.remove('text-on-surface-variant');
      }
    });
  }

  // --- Lightweight mobile menu (the header hamburger) ------------------------
  function wireMobileMenu() {
    var burger = document.querySelector('header .md\\:hidden, header [data-icon="menu"]');
    if (!burger) return;
    var trigger = burger.closest('div') || burger;

    var overlay = document.createElement('div');
    overlay.id = 'tp-menu';
    overlay.style.cssText =
      'position:fixed;inset:0;z-index:60;display:none;background:rgba(10,10,10,.85);' +
      'backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);';
    overlay.innerHTML =
      '<div style="position:absolute;top:64px;right:16px;left:16px;background:#1c1b1b;' +
      'border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:8px;' +
      'box-shadow:0 20px 50px rgba(0,0,0,.5)">' +
      [['Inicio', '/index.html'], ['Red Nacional', '/red.html'],
       ['Beneficios', '/beneficios.html'], ['Mercado B2B', '/mercado.html']]
        .map(function (i) {
          return '<a href="' + i[1] + '" style="display:block;padding:16px;color:#e5e2e1;' +
            'font-weight:600;text-decoration:none;border-radius:10px">' + i[0] + '</a>';
        }).join('') +
      '</div>';
    document.body.appendChild(overlay);

    trigger.style.cursor = 'pointer';
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
    });
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) overlay.style.display = 'none';
    });
  }

  // --- Install prompt (Android/desktop) --------------------------------------
  function wireInstall() {
    var deferred = null;
    window.addEventListener('beforeinstallprompt', function (e) {
      e.preventDefault();
      deferred = e;
      var btn = document.createElement('button');
      btn.textContent = 'Instalar app';
      btn.setAttribute('aria-label', 'Instalar Tortillap');
      btn.style.cssText =
        'position:fixed;top:72px;right:16px;z-index:55;background:#d97706;color:#0e0e0e;' +
        'font-weight:700;border:none;border-radius:9999px;padding:10px 18px;cursor:pointer;' +
        'box-shadow:0 8px 24px rgba(217,119,6,.4);font-family:Inter,sans-serif';
      btn.addEventListener('click', function () {
        btn.remove();
        deferred.prompt();
        deferred = null;
      });
      document.body.appendChild(btn);
    });
  }

  // --- Service worker --------------------------------------------------------
  function registerSW() {
    if (!('serviceWorker' in navigator)) return;
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js').catch(function (err) {
        console.warn('SW registration failed:', err);
      });
    });
  }

  function init() {
    wireNav();
    wireMobileMenu();
    wireInstall();
    registerSW();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
