// convert-og.js
// Converts /public/og-image.svg → /public/og-image.png at exactly 1200x630.
//
//   npm install sharp
//   node convert-og.js
//
// The SVG references Google Fonts. For pixel-faithful rasterization, install
// Playfair Display + Outfit locally before running (so sharp's headless render
// can resolve them). On macOS, drop the .ttf files into /Library/Fonts.

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SRC = path.join(__dirname, 'public', 'og-image.svg');
const OUT = path.join(__dirname, 'public', 'og-image.png');

(async () => {
  const svg = fs.readFileSync(SRC);
  await sharp(svg, { density: 300 })
    .resize(1200, 630, { fit: 'fill' })
    .png({ compressionLevel: 9 })
    .toFile(OUT);
  console.log(`✓ Wrote ${OUT} (1200×630)`);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
