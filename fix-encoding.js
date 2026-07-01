const fs = require('fs');

const file = 'index.html';

// leer en UTF-8 real
let html = fs.readFileSync(file, 'utf8');

// fixes de corrupción típica Windows-1252 → UTF-8
const fixes = [
  ['Â²', '²'],
  ['Ã­', 'í'],
  ['Ã©', 'é'],
  ['Ã¡', 'á'],
  ['Ã³', 'ó'],
  ['Ãº', 'ú'],
  ['Ã±', 'ñ'],
  ['Ã¼', 'ü'],
  ['Â¿', '¿'],
  ['â€”', '—']
];

for (const [bad, good] of fixes) {
  html = html.split(bad).join(good);
}

// escribir limpio en UTF-8
fs.writeFileSync(file, html, 'utf8');

console.log('OK: encoding repair completed');
