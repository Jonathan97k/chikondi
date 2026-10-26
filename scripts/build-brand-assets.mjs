import fs from 'fs';
import path from 'path';
import { optimize } from 'svgo';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const brandingDir = path.resolve('design/branding');
const publicDir = path.resolve('public');

if (!fs.existsSync(brandingDir)) {
  fs.mkdirSync(brandingDir, { recursive: true });
}

const svgFiles = [
  'logo-primary.svg',
  'logo-monogram.svg',
  'logo-lockup-h.svg',
  'logo-lockup-v.svg',
  'logo-mono-charcoal.svg',
  'logo-reversed-cream.svg',
  'favicon.svg'
];

async function buildAssets() {
  console.log('Starting brand asset build & optimization...');

  // 1. Optimize SVGs with SVGO
  for (const file of svgFiles) {
    const filePath = path.join(brandingDir, file);
    if (fs.existsSync(filePath)) {
      const svgContent = fs.readFileSync(filePath, 'utf8');
      const result = optimize(svgContent, {
        path: filePath,
        multipass: true,
        plugins: ['preset-default']
      });
      fs.writeFileSync(filePath, result.data);
      console.log(`[SVGO] Optimized ${file}`);
    }
  }

  // Copy favicon.svg to public
  const faviconSvgSrc = path.join(brandingDir, 'favicon.svg');
  if (fs.existsSync(faviconSvgSrc)) {
    fs.copyFileSync(faviconSvgSrc, path.join(publicDir, 'favicon.svg'));
    console.log('Copied favicon.svg to public/');
  }

  // 2. Render Rasters with Sharp
  const monogramSvgPath = path.join(brandingDir, 'logo-monogram.svg');

  // Favicon 48, 192, 512
  const png48 = path.join(brandingDir, 'favicon-48.png');
  const png192 = path.join(brandingDir, 'favicon-192.png');
  const png512 = path.join(brandingDir, 'favicon-512.png');
  const appleTouchIcon = path.join(brandingDir, 'apple-touch-icon.png');

  await sharp(monogramSvgPath).resize(48, 48).png().toFile(png48);
  await sharp(monogramSvgPath).resize(192, 192).png().toFile(png192);
  await sharp(monogramSvgPath).resize(512, 512).png().toFile(png512);
  await sharp(monogramSvgPath).resize(180, 180).png().toFile(appleTouchIcon);

  // Copy to public
  fs.copyFileSync(png48, path.join(publicDir, 'favicon-48.png'));
  fs.copyFileSync(png192, path.join(publicDir, 'favicon-192.png'));
  fs.copyFileSync(png512, path.join(publicDir, 'favicon-512.png'));
  fs.copyFileSync(appleTouchIcon, path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Generated and copied PWA / favicon PNGs.');

  // 3. Generate favicon.ico using png-to-ico
  const icoBuffer = await pngToIco([png48]);
  fs.writeFileSync(path.join(brandingDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('Generated favicon.ico.');

  // 4. Generate OG Image (1200x630)
  const ogImagePath = path.join(brandingDir, 'og-image.png');
  const publicOgPath = path.join(publicDir, 'og-image.png');

  // Create SVG for OG image
  const ogSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
      <rect width="1200" height="630" fill="#20251F"/>
      <circle cx="1050" cy="150" r="250" fill="#C9A54D" opacity="0.1" filter="blur(40px)"/>
      <rect x="100" y="100" width="1000" height="430" rx="16" fill="#E8E4D9"/>
      <text x="160" y="260" font-family="Georgia, serif" font-size="64" font-weight="700" fill="#20251F">CHIKONDI</text>
      <text x="160" y="320" font-family="sans-serif" font-size="24" font-weight="600" fill="#C9A54D" letter-spacing="4">STORIES, SOUND &amp; PURPOSE</text>
      <text x="160" y="390" font-family="sans-serif" font-size="20" fill="#5B6259">Official Professional Platform • Music • Writing • Production • Community Care</text>
      <circle cx="160" cy="460" r="8" fill="#496348"/>
      <text x="185" y="467" font-family="sans-serif" font-size="16" font-weight="500" fill="#20251F">chikondi.official</text>
    </svg>
  `;

  await sharp(Buffer.from(ogSvg)).png().toFile(ogImagePath);
  fs.copyFileSync(ogImagePath, publicOgPath);
  console.log('Generated og-image.png (1200x630).');

  // 5. Generate Contact Sheet (logo-sheet.png)
  const logoSheetPath = path.join(brandingDir, 'logo-sheet.png');
  const sheetSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
      <rect width="1200" height="900" fill="#E8E4D9"/>
      <text x="80" y="80" font-family="Georgia, serif" font-size="36" font-weight="700" fill="#20251F">CHIKONDI BRAND SYSTEM — CONTACT SHEET</text>
      <text x="80" y="110" font-family="sans-serif" font-size="16" fill="#5B6259">DRAFT — PENDING CHIKONDI'S APPROVAL (Modern Editorial Meets Roots)</text>
      
      <!-- Box 1: Primary Wordmark -->
      <rect x="80" y="150" width="500" height="220" rx="12" fill="#ffffff" stroke="#D6D9D1"/>
      <text x="110" y="190" font-family="sans-serif" font-size="14" font-weight="600" fill="#5B6259">PRIMARY WORDMARK</text>
      <g transform="translate(110, 220)">
        <text x="0" y="45" font-family="Georgia, serif" font-size="38" font-weight="700" fill="#20251F">CHIKONDI</text>
        <circle cx="240" cy="32" r="5" fill="#C9A54D"/>
      </g>

      <!-- Box 2: Monogram -->
      <rect x="620" y="150" width="500" height="220" rx="12" fill="#ffffff" stroke="#D6D9D1"/>
      <text x="650" y="190" font-family="sans-serif" font-size="14" font-weight="600" fill="#5B6259">MONOGRAM / SIGIL</text>
      <g transform="translate(650, 220)">
        <rect width="80" height="80" rx="12" fill="#20251F"/>
        <circle cx="40" cy="40" r="24" fill="none" stroke="#E8E4D9" stroke-width="3" stroke-linecap="round" stroke-dasharray="100 40"/>
        <path d="M40 20v40M30 30l20 20" stroke="#C9A54D" stroke-width="3" stroke-linecap="round"/>
        <circle cx="40" cy="40" r="5" fill="#C9A54D"/>
      </g>

      <!-- Box 3: Horizontal Lockup -->
      <rect x="80" y="410" width="500" height="220" rx="12" fill="#ffffff" stroke="#D6D9D1"/>
      <text x="110" y="450" font-family="sans-serif" font-size="14" font-weight="600" fill="#5B6259">HORIZONTAL LOCKUP</text>
      <g transform="translate(110, 480)">
        <rect width="60" height="60" rx="10" fill="#20251F"/>
        <circle cx="30" cy="30" r="18" fill="none" stroke="#E8E4D9" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="80 30"/>
        <path d="M30 15v30M22 22l16 16" stroke="#C9A54D" stroke-width="2" stroke-linecap="round"/>
        <circle cx="30" cy="30" r="3.5" fill="#C9A54D"/>
        <text x="80" y="42" font-family="Georgia, serif" font-size="28" font-weight="700" fill="#20251F">CHIKONDI</text>
      </g>

      <!-- Box 4: Dark / Reversed Variant -->
      <rect x="620" y="410" width="500" height="220" rx="12" fill="#20251F"/>
      <text x="650" y="450" font-family="sans-serif" font-size="14" font-weight="600" fill="#C9A54D">REVERSED / DARK VARIANT</text>
      <g transform="translate(650, 480)">
        <text x="0" y="45" font-family="Georgia, serif" font-size="38" font-weight="700" fill="#E8E4D9">CHIKONDI</text>
        <circle cx="240" cy="32" r="5" fill="#C9A54D"/>
      </g>

      <text x="80" y="690" font-family="sans-serif" font-size="14" fill="#5B6259">Palette: Charcoal (#20251F) | Gold (#C9A54D) | Cream (#E8E4D9) | Green (#496348)</text>
    </svg>
  `;

  await sharp(Buffer.from(sheetSvg)).png().toFile(logoSheetPath);
  console.log('Generated logo-sheet.png.');
  console.log('Brand asset build complete successfully!');
}

buildAssets().catch(err => {
  console.error('Error building brand assets:', err);
  process.exit(1);
});
