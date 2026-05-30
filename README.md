# Tortillap — PWA

**La red nacional de la industria tortillera.** Compras colectivas, beneficios,
mercado B2B y comunidad en una sola plataforma instalable.

Esta es una Progressive Web App (PWA) estática, instalable en móvil y escritorio,
con soporte offline mediante service worker.

## Estructura

```
index.html              Inicio / red nacional (hero animado)
red.html                Mapa de la red nacional
beneficios.html         Hub de beneficios
mercado.html            Mercado de infraestructura B2B
offline.html            Pantalla de respaldo sin conexión
manifest.webmanifest    Web App Manifest (instalación)
sw.js                   Service worker (precaché + offline)
app.js                  Boot del cliente: registro de SW, navegación, menú e instalación
icons/                  Iconos de la app (192, 512, maskable, favicon, apple-touch, SVG)
vercel.json             Configuración de hosting estático (headers de SW/manifest)
scripts/build.py        Regenera las páginas desde las pantallas fuente de Stitch
tortillap/stitch_tortillap_industrial_network_os/
                        Pantallas fuente originales (Stitch) + DESIGN.md
```

## Características PWA

- **Instalable**: manifest con iconos `any` + `maskable`, `display: standalone`,
  `theme_color` y accesos directos (shortcuts) a Red, Beneficios y Mercado.
- **Offline**: el service worker precachea el app shell. Navegaciones con
  estrategia *network-first* y respaldo a `offline.html`; estáticos *cache-first*;
  recursos externos (Tailwind CDN, fuentes, mapas) *stale-while-revalidate*.
- **Navegación real**: `app.js` conecta los enlaces de las pantallas (antes
  placeholders) a sus destinos y resalta la sección activa.
- **Instalación nativa**: botón "Instalar app" vía `beforeinstallprompt`.

## Desarrollo local

```bash
# Servir la raíz como sitio estático (el SW requiere http/https, no file://)
python3 -m http.server 8000
# abrir http://localhost:8000
```

Para regenerar las páginas tras editar las pantallas fuente:

```bash
python3 scripts/build.py
```

## Deploy

Hosting estático en Vercel (ver `vercel.json`). No requiere build step: se sirve
la raíz del repositorio tal cual.
