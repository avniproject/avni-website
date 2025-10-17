/*
 Optimizes the homepage hero image for better LCP.
 - Backs up src/img/cover.png to src/img/cover.original.png (if not already backed up)
 - Writes an optimized resized PNG back to src/img/cover.png (max width 2000)
 - Also generates src/img/cover.jpg and src/img/cover.webp for future use
*/

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

(async () => {
  const imgDir = path.join(__dirname, '..', 'src', 'img');
  const srcPng = path.join(imgDir, 'cover.png');
  const backupPng = path.join(imgDir, 'cover.original.png');
  const outPng = path.join(imgDir, 'cover.png');
  const outJpg = path.join(imgDir, 'cover.jpg');
  const outWebp = path.join(imgDir, 'cover.webp');

  if (!fs.existsSync(srcPng)) {
    console.error('Source image not found at', srcPng);
    process.exit(1);
  }

  // Backup original once
  if (!fs.existsSync(backupPng)) {
    fs.copyFileSync(srcPng, backupPng);
    console.log('Backed up original to', backupPng);
  } else {
    console.log('Backup already exists at', backupPng);
  }

  const pipeline = sharp(srcPng).resize({ width: 2000, withoutEnlargement: true });

  // Optimized PNG overwrite
  await pipeline.clone().png({ quality: 70, compressionLevel: 9 }).toFile(outPng);
  console.log('Wrote optimized PNG to', outPng);

  // Also create JPG and WebP variants
  await pipeline.clone().jpeg({ quality: 70 }).toFile(outJpg);
  console.log('Wrote optimized JPG to', outJpg);

  await pipeline.clone().webp({ quality: 70 }).toFile(outWebp);
  console.log('Wrote optimized WebP to', outWebp);

  console.log('Optimization complete.');
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
