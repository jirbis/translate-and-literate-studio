// IO utilities stub
import fs from 'fs';

export function readFile(path) {
  return fs.readFileSync(path, 'utf-8');
}

export function writeFile(path, content) {
  fs.mkdirSync(require('path').dirname(path), { recursive: true });
  fs.writeFileSync(path, content, 'utf-8');
}
