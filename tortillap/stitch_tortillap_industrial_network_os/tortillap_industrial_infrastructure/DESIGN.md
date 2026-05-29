---
name: Tortillap Industrial Infrastructure
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#dbc2b0'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#a38c7c'
  outline-variant: '#554336'
  surface-tint: '#ffb77d'
  primary: '#ffb77d'
  on-primary: '#4d2600'
  primary-container: '#d97707'
  on-primary-container: '#432100'
  inverse-primary: '#904d00'
  secondary: '#ffb68e'
  on-secondary: '#532200'
  secondary-container: '#ab4c00'
  on-secondary-container: '#ffe2d5'
  tertiary: '#dcc66e'
  on-tertiary: '#3a3000'
  tertiary-container: '#bfab56'
  on-tertiary-container: '#4b3f00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdcc3'
  primary-fixed-dim: '#ffb77d'
  on-primary-fixed: '#2f1500'
  on-primary-fixed-variant: '#6e3900'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb68e'
  on-secondary-fixed: '#331200'
  on-secondary-fixed-variant: '#763300'
  tertiary-fixed: '#f9e287'
  tertiary-fixed-dim: '#dcc66e'
  on-tertiary-fixed: '#221b00'
  on-tertiary-fixed-variant: '#534600'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  mono-data:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: -0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  container-max: 1440px
---

## Brand & Style

The design system is engineered to project **industrial-tech authority** and **premium operational efficiency**. It moves away from consumer-grade food aesthetics toward a high-fidelity "Command and Control" interface. 

The visual language draws from **High-End Fintech** and **Logistics OS** archetypes. It utilizes a deep, matte foundation to emphasize structural hierarchy, while glassmorphism and subtle orange luminescence represent the "active nodes" of a digital infrastructure. The emotional response is one of absolute reliability, technological dominance, and scalable power—positioning the platform as the essential backbone of a national industry.

## Colors

The palette is rooted in a high-contrast industrial spectrum. 

- **Foundation:** Matte Black (#0A0A0A) serves as the primary canvas, providing a depth that allows interactive elements to "glow."
- **Core Tones:** Industrial Gray (#27272A) is used for structural framing, dividers, and secondary surfaces.
- **Action Tones:** Copper Orange (#D97706) acts as the primary interactive signal, representing energy and connectivity. Burnt Orange (#B45309) provides depth for hover states and gradients.
- **Utility & Accent:** Warm Cream (#FDE68A) is reserved for high-priority data points, accents, and light-source reflections to add a premium, metallic finish.
- **Glassmorphism:** All glass overlays use a 12% opacity white or primary tint with a heavy backdrop blur (20px+) to maintain legibility over complex map or chart backgrounds.

## Typography

The typographic system balances the geometric strength of **Montserrat** for headers with the systematic precision of **Inter** for data-heavy interfaces.

Headers should be tightly tracked to emphasize the "industrial" weight. For numerical data in dashboards or maps, use **Inter** with medium weight to ensure legibility against dark backgrounds. Use the `label-caps` style for section headers and metadata to create a "technical manual" aesthetic.

## Layout & Spacing

This design system employs a **precise 12-column fixed grid** for desktop, ensuring that complex data layouts remain structured and legible. 

- **Desktop:** 12 columns, 24px gutters, 48px side margins. 
- **Tablet:** 8 columns, 16px gutters, 32px side margins.
- **Mobile:** 4 columns, 16px gutters, 16px side margins.

The spacing rhythm is based on a **4px baseline grid**. Components should prioritize "breathing room" (generous white space) to avoid the cluttered look of legacy industrial software, favoring a spacious, Apple-like layout density.

## Elevation & Depth

Hierarchy is defined through **Tonal Layering** and **Luminescent Depth**:

1.  **Level 0 (Base):** #0A0A0A Matte Black.
2.  **Level 1 (Cards/Panels):** #27272A Industrial Gray with a subtle 1px stroke (white at 10% opacity) for a "milled metal" edge.
3.  **Level 2 (Floating Glass):** Translucent layers with `backdrop-filter: blur(24px)` and a soft #D97706 outer glow (5-10% opacity) to simulate active energy.
4.  **Shadows:** Use large, ultra-diffused shadows (`0 20px 50px rgba(0,0,0,0.5)`) rather than crisp shadows to maintain a soft, modern feel.

## Shapes

The shape language is **Soft-Industrial**. We use a 0.25rem (4px) base roundedness for most interactive elements to maintain a professional, "machined" appearance. Larger containers and cards use a 0.75rem (12px) radius to soften the overall interface and provide a more modern, premium tech feel. Circles are reserved strictly for status indicators and map nodes.

## Components

### Buttons
- **Primary:** Copper Orange background, white or matte black text (depending on contrast), subtle inner bevel for a "tactile switch" feel.
- **Secondary:** Ghost style with an Industrial Gray stroke and Warm Cream text.
- **Interaction:** On hover, primary buttons should emit a soft Copper Orange glow (`box-shadow`).

### Cards & Industrial Panels
- Use the "Milled Metal" effect: a solid matte dark background with a very thin, slightly lighter top-border to simulate light catching an edge.

### Interactive Maps
- Map backgrounds must be stylized in "Dark/Monochrome" with Industrial Gray landmasses. 
- Nodes use the primary Copper Orange with a pulsing glow animation.
- Connection lines (logistics routes) use thin, 1px strokes with a gradient from Copper to Burnt Orange.

### Data Visualization
- **Charts:** Use thin lines and gradient fills (Orange to Transparent).
- **Gauges:** Circular indicators should utilize the Warm Cream accent for the "needle" or "active progress" to mimic high-end machinery instrumentation.

### Inputs
- Fields should be dark with a 1px border. On focus, the border transitions to Copper Orange with a subtle outer glow.