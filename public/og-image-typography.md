# OG Image Typography Reference — Kina Studio

Canvas: 1200 × 630 px · Background: #0D0D0D

---

## Typefaces

| Role | Family | Fallback |
|------|--------|---------|
| Display / brand | Playfair Display | Georgia, serif |
| Supporting / UI | Outfit | system-ui, sans-serif |

---

## Type Hierarchy

### KINA (wordmark — primary)
- Family: Playfair Display
- Size: 96 px
- Weight: 600 (Semi-Bold)
- Style: Normal
- Color: #C9A84C (gold)
- Position: Left zone, x 80, anchor top

### STUDIO (wordmark — secondary)
- Family: Playfair Display
- Size: 38 px
- Weight: 400 (Regular)
- Style: Normal
- Color: #8B7A4A (gold-dim)
- Letter-spacing: 18 px
- Position: Directly below KINA, with a 1 px gold rule between them

### Tagline — "Web Design & Brand Identity"
- Family: Outfit (or system sans-serif)
- Size: 16 px
- Weight: 400
- Style: Normal
- Color: #A09C94 (gray)
- Letter-spacing: 3 px
- Transform: UPPERCASE
- Position: 40 px below STUDIO

### Tagline — "Go Deep. Grow High."
- Family: Playfair Display
- Size: 18 px
- Weight: 400
- Style: Italic
- Color: #C9A84C (gold)
- Opacity: 70%
- Position: 24 px below "Web Design & Brand Identity"

### Location — "NAIROBI · AFRICA"
- Family: Outfit (or system sans-serif)
- Size: 11 px
- Weight: 400
- Style: Normal
- Color: #8B7A4A (gold-dim)
- Letter-spacing: 4 px
- Transform: UPPERCASE
- Position: Bottom-left, pinned to y 580, x 80

### KMark "K" (logomark inside rounded square)
- Family: Playfair Display
- Size: ~100 px
- Weight: 400
- Style: Normal
- Color: #C9A84C (gold)
- Alignment: Centered within the 200 × 200 px rounded square

---

## Color Tokens

| Token | Hex | Usage |
|-------|-----|-------|
| gold | #C9A84C | KINA, tagline italic, KMark K, rule, dots, rings |
| gold-dim | #8B7A4A | STUDIO, location line |
| gray | #A09C94 | "Web Design & Brand Identity" |
| obsidian | #0D0D0D | Canvas background |

---

## Spacing & Rules

| Element | Spec |
|---------|------|
| Gold rule (between KINA / STUDIO) | 1 px height · 60 px wide · #C9A84C |
| Gap — STUDIO → rule | natural line spacing |
| Gap — rule → STUDIO label | natural |
| Gap — STUDIO → "Web Design…" | 40 px |
| Gap — "Web Design…" → "Go Deep…" | 24 px |
| Vertical divider | x 450 · y1 80 · y2 550 · 0.5 px · #C9A84C · 20% opacity |

---

## Minimum Size Rule

No text element in this image is smaller than **11 px**. All text must remain legible on the #0D0D0D background with no blur or gradient behind it.

---

## Background Motif (non-text)

- Concentric rings: radii 140 / 190 / 240 / 290 / 340 px · 0.5 px stroke · #C9A84C · 5% opacity
- Radial lines: every 45° · 0.3 px stroke · #C9A84C · 4% opacity
- Gold dot constellation: 8–10 circles · radii alternating 3 px / 2 px · opacity stepping 1.0 → 0.2 outward

---

## Conversion

After saving `public/og-image.svg`, run:

```
npm install sharp
node convert-og.js
```

`convert-og.js` (place in project root):

```js
const sharp = require('sharp');
sharp('public/og-image.svg')
  .resize(1200, 630)
  .png()
  .toFile('public/og-image.png')
  .then(() => console.log('OG image created: public/og-image.png'))
  .catch(err => console.error(err));
```

Output must be exactly **1200 × 630 px PNG**.
