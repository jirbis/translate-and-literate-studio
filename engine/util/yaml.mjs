// YAML utilities stub
import yaml from 'js-yaml';
import fs from 'fs';

export function readYaml(path) {
  return yaml.load(fs.readFileSync(path, 'utf-8'));
}

export function writeYaml(path, data) {
  fs.writeFileSync(path, yaml.dump(data), 'utf-8');
}
