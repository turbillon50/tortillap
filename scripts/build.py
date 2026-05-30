#!/usr/bin/env python3
"""Assemble the Tortillap PWA pages from the Stitch source screens.

Each source screen (stitch_tortillap_industrial_network_os/<name>/code.html) is
copied to a clean root-level page with PWA head tags, a page marker and the
shared /app.js boot script injected. Run from the repo root:

    python3 scripts/build.py
"""
import re
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "tortillap" / "stitch_tortillap_industrial_network_os"

# source screen -> (output file, page key used for active-nav highlighting)
PAGES = {
    "inicio_tortillap_animated": ("index.html", "inicio"),
    "red_nacional": ("red.html", "red"),
    "beneficios_hub": ("beneficios.html", "beneficios"),
    "marketplace_b2b": ("mercado.html", "mercado"),
}

HEAD_INJECT = '''<meta name="application-name" content="Tortillap"/>
<meta name="apple-mobile-web-app-title" content="Tortillap"/>
<meta name="description" content="Tortillap es la red nacional de la industria tortillera: compras colectivas, beneficios, mercado B2B y comunidad en una sola plataforma."/>
<meta name="theme-color" content="#0e0e0e"/>
<meta name="mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
<link rel="manifest" href="/manifest.webmanifest"/>
<link rel="icon" href="/icons/favicon.ico" sizes="any"/>
<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16.png"/>
<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png"/>
<link rel="icon" type="image/svg+xml" href="/icons/icon.svg"/>
'''


def build():
    for srcname, (outname, key) in PAGES.items():
        html = (SRC / srcname / "code.html").read_text(encoding="utf-8")
        html = re.sub(r"(</title>)", r"\1\n" + HEAD_INJECT, html, count=1)
        html = html.replace(
            '<html class="dark" lang="es">',
            f'<html class="dark" lang="es" data-page="{key}">',
            1,
        )
        html = html.replace(
            "</body>", '<script src="/app.js" defer></script>\n</body>', 1
        )
        (ROOT / outname).write_text(html, encoding="utf-8")
        print(f"wrote {outname} ({len(html)} bytes) from {srcname}")


if __name__ == "__main__":
    build()
