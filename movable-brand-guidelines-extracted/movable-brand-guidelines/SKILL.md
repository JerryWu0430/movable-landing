---
name: movable-brand-guidelines
description: Applies Movable's official brand colors, typography, gradients, logo guidelines, and visual identity to any artifact — presentations, documents, HTML pages, landing pages, pitch decks, one-pagers, or any designed output. Use this skill whenever the user mentions Movable branding, wants something styled on-brand, asks for Movable colors or fonts, or is producing any visual or written deliverable associated with the Movable product. Also trigger when creating or editing pitch decks, landing pages, web pages, marketing materials, or UI components for Movable. Use it even when the user simply says "make it on-brand" or "apply our branding" in a Movable context.
---

# Movable Brand Guidelines

## Overview

Movable is the voice AI for enterprise context. The brand identity is bold, energetic, and tech-forward — combining a deep navy foundation with vibrant Tango orange-red and electric accents (Aqua, Lime). The aesthetic communicates credibility and innovation: "dark data brought to light."

**Company tagline reference**: "Your metrics tell you what is happening. Movable Voice talks to your team for the why."

**Asset base path**: `/sessions/compassionate-sweet-meitner/mnt/movable/assets/`
> All logo, gradient, shape, and voice interaction files are available here as SVG and PNG. Always prefer SVG for web/vector work and PNG where SVG is not supported.

---

## Brand Colors

### Primary Palette

| Name | Primary Hex | Mid Hex | Light Hex | Role |
|---|---|---|---|---|
| Deep Blue | `#060634` | `#38385d` | `#060634` | Foundation, credibility, dark backgrounds |
| Tango | `#ff4220` | `#ff684d` | `#ff8e79` | Signature color, vibrancy, CTAs, highlights |
| Lime | `#e7fe00` | `#f0fe66` | `#f5fe99` | Happiness, optimism, accent pops |
| Aqua | `#4addff` | `#92ebff` | `#b7f1ff` | Approachability, safety, cool accents |
| Grey | `#e5e5e5` | `#efefef` | `#f5f5f5` | Balance, design versatility, neutral fills |
| White | `#ffffff` | — | — | Text on dark, light backgrounds |

### Color Intent

- **Deep Blue** (`#060634`): Primary backgrounds for dark-mode hero sections, slide backgrounds, headers. Sets authority.
- **Tango** (`#ff4220`): The unmistakable brand signature. Use for the logomark, primary CTAs, accent highlights, and data callouts. Don't overuse — let it pop.
- **Aqua** (`#4addff`): Secondary accent for interactive elements, hover states, subheadings on dark backgrounds, gradient partner.
- **Lime** (`#e7fe00`): High-energy accent for emphasis — progress indicators, tags, gradient endpoints. Use sparingly; it's electric.
- **Grey**: Backgrounds for neutral sections, dividers, card fills.
- **White**: Body text on dark backgrounds; light-mode base background.

### Color Don'ts

- Do not introduce colors outside this palette.
- Tango should never be used as a large background fill on its own — it works best as a gradient partner or accent.
- Lime is very high-contrast; use in small doses or within gradients.
- Never use grey for hero sections or feature highlights — keep those energized.

---

## Gradients

Gradients are core to Movable's visual energy. The brand uses three canonical gradients. All gradients generate visual depth and a cutting-edge aesthetic.

### Canonical Gradients

| Name | Colors (top → bottom) | Use Case |
|---|---|---|
| **Dark Energy** | Aqua `#4addff` → Tango `#ff4220` → Deep Blue `#060634` | Hero backgrounds, full-bleed sections, bold slide backgrounds |
| **Night Depth** | Deep Blue `#060634` → Aqua `#4addff` | Subtle dark backgrounds, cards, sidebars |
| **Sunrise** | Tango `#ff4220` → White `#ffffff` → Lime `#e7fe00` | Light-mode accents, illustrative panels, top-of-page hero on light themes |

### CSS Gradient Reference

```css
/* Dark Energy */
background: linear-gradient(180deg, #4addff 0%, #ff4220 50%, #060634 100%);

/* Night Depth */
background: linear-gradient(180deg, #060634 0%, #4addff 100%);

/* Sunrise */
background: linear-gradient(180deg, #ff4220 0%, #ffffff 50%, #e7fe00 100%);
```

### Gradient Asset Files

Pre-built gradient assets are in `assets/GRADIENTS/`:
- `Movable - Gradients_Deep Blue - Aqua - Tango.svg/png` — Dark Energy
- `Movable - Gradients_Deep Blue - Aqua - Tango 2.svg` — Dark Energy (variant)
- `Movable - Gradients_Deep Blue - Aqua.svg/png` — Night Depth
- `Movable - Gradients_Tango - White - Lime.svg/png` — Sunrise

---

## Typography

### Font Families

| Role | Font | Weights Used |
|---|---|---|
| **Primary** | Figtree | Bold (700), Medium (500), Bold Italic |
| **Secondary** | Inter | Light (300) |

### Typographic Hierarchy

| Element | Font | Weight | Usage |
|---|---|---|---|
| Heading | Figtree | Bold | Section titles, slide headers, hero text |
| Sub-heading | Figtree | Medium | Feature labels, card headers, section intros |
| Quote / Pull Quote | Figtree | Bold Italic | Customer testimonials, highlighted statements |
| Paragraph / Body | Inter | Light | Descriptive copy, explanations, supporting text |

### Typography Rules

- **Figtree is the display and heading workhorse** — it communicates confident modernity.
- **Inter Light** keeps body text legible and refined without competing with bold headlines.
- Use sentence case for headings as a default; all-caps is acceptable for very short labels or eyebrow text only.
- Pull quotes in Bold Italic Figtree should use Tango (`#ff4220`) color to make them visually distinct.

### Web Font Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,500;0,700;1,700&family=Inter:wght@300&display=swap" rel="stylesheet">
```

---

## Logo

### Logo Variants

| Variant | Use Case | Asset Path |
|---|---|---|
| Primary (Logomark + Wordmark, Tango gradient) | Default — most contexts | `assets/LOGO/SVGs/Movable_Logo_2026_Primary White.svg` |
| Primary Blue | On white/light backgrounds | `assets/LOGO/SVGs/Movable_Logo_2026_Primary Blue.svg` |
| Secondary White | On dark or gradient backgrounds | `assets/LOGO/SVGs/Movable_Logo_2026_Secondary White.svg` |
| Secondary Blue | On neutral backgrounds | `assets/LOGO/SVGs/Movable_Logo_2026_Secondary Blue.svg` |
| Logomark only (Tango) | App icons, favicons, social media avatars | `assets/LOGO/SVGs/Movable_Logo_2026_Logomark Tango.svg` |
| Logomark only (White) | Favicon/icon on dark background | `assets/LOGO/SVGs/Movable_Logo_2026_Logomark White.svg` |
| Logomark only (Blue) | Icon on light/neutral background | `assets/LOGO/SVGs/Movable_Logo_2026_Logomark Blue.svg` |

All variants are also available as PNGs in `assets/LOGO/PNGs/`.

### Logo Usage Rules

- The logomark and wordmark should **appear together** in most contexts.
- The **wordmark must never appear alone** without the logomark.
- The **logomark may appear in isolation** for app icons, favicons, and social media icons.
- The primary logo uses Tango gradient on the logomark + Deep Blue wordmark.
- On dark or gradient backgrounds, use the White variant.
- Minimum clear space around the logo = the width of the letter 'a' in the wordmark on all sides.
- Distance between logomark and wordmark = width of the 'a'; the logomark is centered vertically to the wordmark.
- Never distort, recolor, or recreate the logo — always use the approved asset files.

---

## Buttons & UI Shapes

### Button Shape

Movable's signature button is a **pill/octagonal shape** — a wide rounded rectangle with slightly clipped top-right and bottom-left corners (like a parallelogram softened into a capsule). This distinctive shape is a key brand identifier.

### Button Styles

| Style | Background | Use |
|---|---|---|
| Outline (Tango) | Transparent + Tango gradient outline | Primary CTA on dark background |
| Outline (Aqua) | Transparent + Aqua gradient outline | Secondary CTA, interactive |
| Outline (Lime) | Transparent + Lime gradient outline | High-energy CTA |
| Outline (Deep Blue) | Transparent + Deep Blue gradient outline | CTA on light background |
| Outline (White) | Transparent + White gradient outline | CTA on gradient background |
| Filled (Tango) | Tango fill | Strong primary action |
| Filled (Aqua) | Aqua fill | Secondary action |
| Gradient (Tango) | Tango gradient fill | Premium CTA |
| Gradient (Aqua) | Aqua gradient fill | Premium secondary |

### Button Specs

- **Gradient outlines**: Single color fading from 100% opacity → 20% opacity around the perimeter.
- **Stroke/line weight**: 5px.
- **Color options**: Use Tango, Aqua, Lime, or Deep Blue outlines on solid backgrounds; use White outline on gradient backgrounds.

### Button Asset Files

Pre-built button shapes in `assets/BRAND SHAPES/`:
- SVGs in `assets/BRAND SHAPES/SVGs/` — use for HTML/web/vector work
- PNGs in `assets/BRAND SHAPES/PNGs/` — use for documents/slides

Key files: `Brand Shape_Button - Tangerine.svg`, `Brand Shape_Button - Aqua.svg`, `Brand Shape_Button Gradient - Tango.svg`, etc.

---

## Voice Interaction Assets

Movable's product UI features a distinctive voice interaction element with multiple sizes and states.

### Sizes (concentric ring animation states)

| Asset | Path |
|---|---|
| Size 1 (smallest) | `assets/VOICE INTERACTION/SVGs/Voice_Interaction_Size 1.svg` |
| Size 2 | `assets/VOICE INTERACTION/SVGs/Voice_Interaction_Size 2.svg` |
| Size 3 | `assets/VOICE INTERACTION/SVGs/Voice_Interaction_Size 3.svg` |
| Size 4 (largest) | `assets/VOICE INTERACTION/SVGs/Voice_Interaction_Size 4.svg` |

### States (interaction states)

| Asset | Path |
|---|---|
| State 1 (idle) | `assets/VOICE INTERACTION/SVGs/Voice_Interaction_State 1.svg` |
| State 2 (listening) | `assets/VOICE INTERACTION/SVGs/Voice_Interaction_State 2 .svg` |
| State 3 (processing) | `assets/VOICE INTERACTION/SVGs/Voice_Interaction_State 3.svg` |
| State 4 (responding) | `assets/VOICE INTERACTION/SVGs/Voice_Interaction_State 4.svg` |
| State 5 (complete) | `assets/VOICE INTERACTION/SVGs/Voice_Interaction_State 5.svg` |

There is also a video confirmation animation: `assets/VOICE INTERACTION/Video_Generation_Confirmation.mp4`.
PNGs are available for all sizes and states under `assets/VOICE INTERACTION/PNG/`.

---

## Application by Output Type

### HTML / Web

```css
:root {
  --mv-deep-blue: #060634;
  --mv-tango: #ff4220;
  --mv-tango-mid: #ff684d;
  --mv-lime: #e7fe00;
  --mv-aqua: #4addff;
  --mv-grey: #e5e5e5;
  --mv-white: #ffffff;

  /* Gradient: Dark Energy (hero default) */
  --mv-gradient-dark: linear-gradient(180deg, #4addff 0%, #ff4220 50%, #060634 100%);
  /* Gradient: Night Depth */
  --mv-gradient-night: linear-gradient(180deg, #060634 0%, #4addff 100%);
  /* Gradient: Sunrise */
  --mv-gradient-sunrise: linear-gradient(180deg, #ff4220 0%, #ffffff 50%, #e7fe00 100%);
}

body {
  background: var(--mv-deep-blue);
  color: var(--mv-white);
  font-family: 'Inter', sans-serif;
  font-weight: 300;
}

h1, h2, h3 {
  font-family: 'Figtree', sans-serif;
  font-weight: 700;
}

.hero {
  background: var(--mv-gradient-dark);
}

.cta-button {
  /* Use the signature octagonal pill shape */
  border-radius: 50px 4px 50px 4px; /* Approximation — use SVG asset for pixel-perfect */
  border: 5px solid;
  border-image: linear-gradient(135deg, var(--mv-tango) 0%, rgba(255,66,32,0.2) 100%) 1;
  background: transparent;
  color: var(--mv-white);
  font-family: 'Figtree', sans-serif;
  font-weight: 700;
}
```

### Presentations (PPTX)

- **Slide background**: Deep Blue `#060634` (dark theme) or White `#ffffff` (light theme).
- **Hero/title slides**: Use the Dark Energy gradient background asset from `assets/GRADIENTS/`.
- **Title font**: Figtree Bold, White `#ffffff` on dark; Deep Blue `#060634` on light.
- **Body font**: Inter Light, White `#ffffff` on dark; Deep Blue `#060634` on light.
- **Accent color**: Tango `#ff4220` for highlights, data callouts, pull quotes.
- **Sub-accent**: Aqua `#4addff` for secondary info, subheadings.
- **Logo placement**: Top-left corner; use White variant on dark slides, Blue variant on light slides.
- **Decorative elements**: Place gradient or brand shape assets at edges/corners to add visual energy.

### Documents (DOCX / PDF)

- **Page background**: White `#ffffff` for print-first; Deep Blue `#060634` for digital-first premium documents.
- **Heading color**: Deep Blue `#060634` on white docs; White `#ffffff` on dark docs.
- **Accent lines / dividers**: Tango `#ff4220`.
- **Pull quote blocks**: Tango `#ff4220` text in Figtree Bold Italic.
- **Callout/highlight boxes**: Aqua `#4addff` background with Deep Blue text, or Tango background with White text.

---

## Quick Reference Card

```
COLORS
Deep Blue   #060634   Foundation, dark backgrounds
Tango       #ff4220   Signature accent, CTAs, logomark
Aqua        #4addff   Cool accent, interactive elements
Lime        #e7fe00   Energy pop, gradient endpoint
Grey        #e5e5e5   Neutral fill, balance
White       #ffffff   Text on dark, light base

GRADIENTS
Dark Energy     Aqua → Tango → Deep Blue   (hero, bold sections)
Night Depth     Deep Blue → Aqua           (subtle dark)
Sunrise         Tango → White → Lime       (light, energetic)

TYPOGRAPHY
Headings    Figtree Bold (700)
Subheads    Figtree Medium (500)
Quotes      Figtree Bold Italic — in Tango color
Body        Inter Light (300)

LOGO
Primary     Logomark + Wordmark together
Dark bg     Use White variant
Light bg    Use Blue variant
Icon only   Logomark Tango (for avatars/favicons)

BUTTONS
Shape       Octagonal pill (clipped-corner capsule)
Stroke      Gradient outline, 5px, 100%→20% opacity
On solid    Tango / Aqua / Lime / Deep Blue outlines
On gradient White outline

VIBE        Bold. Energetic. Credible. Dark data brought to light.
```
