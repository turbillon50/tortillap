#!/usr/bin/env python3
"""Tortillap theme engine.

Single source of truth for the Material-3 light (day) + dark (night) palettes.
Generates /assets/theme.css and rewrites the existing Stitch pages so their
Tailwind colours resolve from CSS variables instead of baked-in hex values.

Idempotent: safe to run repeatedly.
"""
import re
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
ASSETS = ROOT / "assets"
PAGES = ["index.html", "red.html", "beneficios.html", "mercado.html"]

# name -> (dark rgb, light rgb).  "Fixed" tokens share the same value in both.
TOKENS = {
    "background":               ("19 19 19",    "255 248 245"),
    "on-background":            ("229 226 225", "34 26 21"),
    "surface":                  ("19 19 19",    "255 248 245"),
    "surface-dim":              ("19 19 19",    "232 215 205"),
    "surface-bright":           ("58 57 57",    "255 248 245"),
    "surface-container-lowest": ("14 14 14",    "255 255 255"),
    "surface-container-low":    ("28 27 27",    "255 241 232"),
    "surface-container":        ("32 31 31",    "252 234 224"),
    "surface-container-high":   ("42 42 42",    "246 229 218"),
    "surface-container-highest": ("53 53 52",   "240 223 213"),
    "surface-variant":          ("53 53 52",    "244 222 208"),
    "on-surface":               ("229 226 225", "34 26 21"),
    "on-surface-variant":       ("219 194 176", "82 68 58"),
    "surface-tint":             ("255 183 125", "144 77 0"),
    "primary":                  ("255 183 125", "144 77 0"),
    "on-primary":               ("77 38 0",     "255 255 255"),
    "primary-container":        ("217 119 7",   "255 220 195"),
    "on-primary-container":     ("67 33 0",     "46 21 0"),
    "inverse-primary":          ("144 77 0",    "255 183 125"),
    "secondary":                ("255 182 142", "118 88 69"),
    "on-secondary":             ("83 34 0",     "255 255 255"),
    "secondary-container":      ("171 76 0",    "255 219 200"),
    "on-secondary-container":   ("255 226 213", "43 23 9"),
    "tertiary":                 ("220 198 110", "95 97 53"),
    "on-tertiary":              ("58 48 0",     "255 255 255"),
    "tertiary-container":       ("191 171 86",  "229 230 174"),
    "on-tertiary-container":    ("75 63 0",     "28 29 0"),
    "error":                    ("255 180 171", "186 26 26"),
    "on-error":                 ("105 0 5",     "255 255 255"),
    "error-container":          ("147 0 10",    "255 218 214"),
    "on-error-container":       ("255 218 214", "65 0 2"),
    "outline":                  ("163 140 124", "132 116 106"),
    "outline-variant":          ("85 67 54",    "215 195 182"),
    "inverse-surface":          ("229 226 225", "56 47 42"),
    "inverse-on-surface":       ("49 48 48",    "255 237 226"),
    # Fixed accent ramp — identical across themes.
    "primary-fixed":            ("255 220 195", "255 220 195"),
    "primary-fixed-dim":        ("255 183 125", "255 183 125"),
    "on-primary-fixed":         ("47 21 0",     "47 21 0"),
    "on-primary-fixed-variant": ("110 57 0",    "110 57 0"),
    "secondary-fixed":          ("255 219 202", "255 219 202"),
    "secondary-fixed-dim":      ("255 182 142", "255 182 142"),
    "on-secondary-fixed":       ("51 18 0",     "51 18 0"),
    "on-secondary-fixed-variant": ("118 51 0",  "118 51 0"),
    "tertiary-fixed":           ("249 226 135", "249 226 135"),
    "tertiary-fixed-dim":       ("220 198 110", "220 198 110"),
    "on-tertiary-fixed":        ("34 27 0",     "34 27 0"),
    "on-tertiary-fixed-variant": ("83 70 0",    "83 70 0"),
}


def tw_colors_block(indent="                    "):
    """Tailwind config `colors` object that resolves from CSS variables."""
    lines = [f'{indent}"colors": {{']
    body = ",\n".join(
        f'{indent}    "{name}": "rgb(var(--{name}) / <alpha-value>)"'
        for name in TOKENS
    )
    lines.append(body)
    lines.append(f"{indent}}},")
    return "\n".join(lines)


THEME_TAIL = """
/* ---- Day / night ergonomics ------------------------------------------- */
html { color-scheme: dark; }
html.light { color-scheme: light; }
html, body { transition: background-color .35s ease, color .35s ease; }

/* In daylight the Stitch "milled-edge"/white hairlines vanish on a light
   surface, so swap them for soft dark hairlines and lift the copper glow. */
html.light .milled-edge {
  border-top: 1px solid rgba(0, 0, 0, .08);
  border-left: 1px solid rgba(0, 0, 0, .04);
}
html.light .border-white\\/10 { border-color: rgba(0, 0, 0, .10) !important; }
html.light .border-white\\/5  { border-color: rgba(0, 0, 0, .06) !important; }
html.light .border-white\\/20 { border-color: rgba(0, 0, 0, .14) !important; }
html.light .shadow-2xl,
html.light .shadow-\\[0_20px_50px_rgba\\(0\\,0\\,0\\,0\\.5\\)\\] {
  box-shadow: 0 18px 40px rgba(60, 30, 0, .12) !important;
}
html.light .copper-glow { filter: drop-shadow(0 0 10px rgba(217, 119, 6, .28)); }

/* Floating theme toggle (injected on every page by tortillap.js) */
.tp-theme-toggle {
  position: fixed; right: 16px; bottom: 112px; z-index: 56;
  height: 48px; width: 48px; display: grid; place-items: center;
  border-radius: 9999px; cursor: pointer;
  background: rgb(var(--surface-container) / .92);
  color: rgb(var(--primary));
  border: 1px solid rgb(var(--outline-variant) / .6);
  box-shadow: 0 10px 30px rgba(0, 0, 0, .35);
  backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
  transition: transform .2s ease, background .35s ease;
}
.tp-theme-toggle:active { transform: scale(.9); }
.tp-theme-toggle .material-symbols-outlined { font-size: 24px; }
@media (min-width: 768px) { .tp-theme-toggle { bottom: 24px; } }

/* Shared form niceties used by the new auth/registro/admin screens */
.tp-field {
  width: 100%; border-radius: 12px; padding: 14px 16px;
  background: rgb(var(--surface-container-low));
  color: rgb(var(--on-surface));
  border: 1px solid rgb(var(--outline-variant) / .7);
  font-family: Inter, sans-serif; font-size: 16px; outline: none;
  transition: border-color .2s ease, box-shadow .2s ease;
}
.tp-field::placeholder { color: rgb(var(--on-surface-variant) / .7); }
.tp-field:focus {
  border-color: rgb(var(--primary));
  box-shadow: 0 0 0 4px rgb(var(--primary) / .15);
}
.tp-label {
  display: block; margin-bottom: 8px;
  font-family: Inter, sans-serif; font-weight: 600; font-size: 12px;
  letter-spacing: .08em; text-transform: uppercase;
  color: rgb(var(--on-surface-variant));
}
@media (prefers-reduced-motion: reduce) {
  html, body, .tp-theme-toggle { transition: none !important; }
}
"""


TW_CONFIG_TEMPLATE = """/* GENERATED by scripts/themeify.py — shared Tailwind config for the
   auth / registro / perfil / admin screens. Load AFTER the Tailwind CDN. */
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
__COLORS__
      "borderRadius": { "DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem" },
      "spacing": { "margin-mobile": "16px", "margin-desktop": "48px", "unit": "4px",
                   "container-max": "1440px", "gutter": "24px" },
      "fontFamily": {
        "headline-md": ["Montserrat"], "headline-lg-mobile": ["Montserrat"],
        "mono-data": ["Inter"], "body-lg": ["Inter"], "label-caps": ["Inter"],
        "headline-lg": ["Montserrat"], "display-lg": ["Montserrat"], "body-md": ["Inter"]
      },
      "fontSize": {
        "headline-md": ["24px", { "lineHeight": "1.3", "fontWeight": "600" }],
        "headline-lg-mobile": ["24px", { "lineHeight": "1.2", "fontWeight": "600" }],
        "mono-data": ["14px", { "lineHeight": "1.4", "letterSpacing": "-0.01em", "fontWeight": "500" }],
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "label-caps": ["12px", { "lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "600" }],
        "headline-lg": ["32px", { "lineHeight": "1.2", "fontWeight": "600" }],
        "display-lg": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "body-md": ["16px", { "lineHeight": "1.5", "fontWeight": "400" }]
      }
    }
  }
};
"""


def build_tw_config():
    block = tw_colors_block(indent="      ")
    out = TW_CONFIG_TEMPLATE.replace("__COLORS__", block)
    ASSETS.mkdir(exist_ok=True)
    (ASSETS / "tw-config.js").write_text(out, encoding="utf-8")
    print("wrote assets/tw-config.js")


def build_css():
    dark = "\n".join(f"  --{n}: {d};" for n, (d, _l) in TOKENS.items())
    light = "\n".join(f"  --{n}: {l};" for n, (_d, l) in TOKENS.items())
    css = (
        "/* GENERATED by scripts/themeify.py — do not edit by hand.\n"
        "   Material-3 copper palette as CSS variables for day/night. */\n\n"
        f"html.dark, :root {{\n{dark}\n}}\n\n"
        f"html.light {{\n{light}\n}}\n"
        f"{THEME_TAIL}"
    )
    ASSETS.mkdir(exist_ok=True)
    (ASSETS / "theme.css").write_text(css, encoding="utf-8")
    print("wrote assets/theme.css")


BOOTSTRAP = (
    '<script>(function(){try{var t=localStorage.getItem("tp-theme");'
    'if(t!=="light"&&t!=="dark"){t=window.matchMedia&&'
    'window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";}'
    'var r=document.documentElement;r.classList.toggle("dark",t==="dark");'
    'r.classList.toggle("light",t==="light");}catch(e){}})();</script>'
)
HEAD_LINKS = '<link rel="stylesheet" href="/assets/theme.css"/>'


def transform_page(path):
    html = path.read_text(encoding="utf-8")

    # 1) colours -> CSS variables
    new_colors = tw_colors_block()
    html = re.sub(
        r'"colors":\s*\{.*?\},(\s*"borderRadius")',
        lambda m: new_colors + m.group(1),
        html,
        count=1,
        flags=re.DOTALL,
    )

    # 2) no-flash bootstrap + theme stylesheet (once)
    if "tp-theme" not in html.split("</head>")[0]:
        html = html.replace("</head>", f"{BOOTSTRAP}\n{HEAD_LINKS}\n</head>", 1)

    # 3) shared runtime (once), right after app.js
    if "/assets/tortillap.js" not in html:
        html = html.replace(
            '<script src="/app.js" defer></script>',
            '<script src="/app.js" defer></script>\n'
            '<script src="/assets/tortillap.js" defer></script>',
            1,
        )

    path.write_text(html, encoding="utf-8")
    print(f"transformed {path.name}")


def main():
    build_css()
    build_tw_config()
    for name in PAGES:
        transform_page(ROOT / name)


if __name__ == "__main__":
    main()
