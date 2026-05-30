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
registro.html           Alta multi-paso personalizada (perfil → cuenta → negocio → ubicación)
perfil.html             Perfil del miembro (ver / editar, credencial, ubicación)
login.html              Inicio de sesión
admin.html              Panel de administración total (miembros, roles, ajustes, export)
offline.html            Pantalla de respaldo sin conexión
manifest.webmanifest    Web App Manifest (instalación)
sw.js                   Service worker (precaché + offline)
app.js                  Boot del cliente: registro de SW, navegación, menú e instalación
assets/theme.css        Paleta Material-3 día/noche como variables CSS (generado)
assets/tw-config.js     Config de Tailwind compartida (colores por variable) (generado)
assets/tortillap.js     Runtime: tema día/noche + capa de datos cliente (cuentas, sesión, admin)
icons/                  Iconos de la app (192, 512, maskable, favicon, apple-touch, SVG)
vercel.json             Configuración de hosting estático (headers de SW/manifest)
scripts/build.py        Regenera las páginas desde las pantallas fuente de Stitch
scripts/themeify.py     Genera la paleta día/noche y migra las páginas a variables CSS
tortillap/stitch_tortillap_industrial_network_os/
                        Pantallas fuente originales (Stitch) + DESIGN.md
```

## Modo día / noche

Toda la paleta Material-3 vive en `assets/theme.css` como variables CSS, con un
juego de colores **noche** (oscuro, por defecto) y **día** (claro). Un botón
flotante alterna entre ambos y la preferencia se guarda en `localStorage`; en la
primera visita se respeta `prefers-color-scheme`. Un script de arranque aplica el
tema antes de pintar para evitar parpadeo. `scripts/themeify.py` es la fuente única
de la paleta y regenera tanto `theme.css` como `tw-config.js`.

## Cuentas, perfiles y administración

Al no haber servidor, las cuentas se guardan en `localStorage` (contraseñas como
hash SHA-256, nunca en texto plano) — apto para prototipo, **no** para producción.

- **Registro personalizado** (`registro.html`): asistente de 5 pasos que adapta
  los campos según el tipo de perfil (tortillería, proveedor, distribuidor, aliado),
  con captura de ubicación vía `navigator.geolocation`.
- **Perfil** (`perfil.html`): credencial de miembro, datos editables y ubicación.
- **Administración total** (`admin.html`): KPIs, búsqueda y filtros de miembros,
  cambio de rol/estado, alta y baja, exportación JSON y ajustes de la red. Requiere
  rol `admin`.

> Cuenta administradora sembrada en la primera carga:
> `admin@tortillap.mx` / `tortillap2026`.

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
