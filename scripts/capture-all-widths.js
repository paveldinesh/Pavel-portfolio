const fs = require('fs');
const { execSync } = require('child_process');

const targetDir = process.argv[2] || 'screenshots/mobile_before';
if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

const pages = [
  { name: 'descartes', path: 'work/descartes' },
  { name: 'tinybits', path: 'work/tiny-bits-of-love' },
  { name: 'mazeflower', path: 'work/mazeflower' },
  { name: 'militarypcs', path: 'work/military-pcs' },
  { name: 'ucollabit', path: 'work/ucollabit' },
  { name: 'webhosters', path: 'work/webhosters' }
];

const widths = [
  { w: 360, h: 800 },
  { w: 390, h: 844 },
  { w: 430, h: 932 },
  { w: 768, h: 1024 },
  { w: 1440, h: 1200 }
];

const chrome = '\"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\"';

for (const p of pages) {
  const url = 'http://localhost:3000/' + p.path;
  for (const { w, h } of widths) {
    const outFile = `${targetDir}/${p.name}_${w}.png`;
    execSync(`${chrome} --headless --disable-gpu --window-size=${w},${h} --screenshot=\"${outFile}\" ${url}`, { stdio: 'ignore' });
  }
  console.log(`Captured ${p.name} across all widths in ${targetDir}`);
}

