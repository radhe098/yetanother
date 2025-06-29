import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = __dirname;
const output = path.join(dir, 'all_results_combined.json');

const files = fs.readdirSync(dir)
  .filter(f => f.endsWith('.json') && f !== 'all_results_combined.json');

const results = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf-8');
  try {
    const obj = JSON.parse(content);
    results.push(obj);
  } catch (e) {
    // skip invalid JSON
  }
}

fs.writeFileSync(output, JSON.stringify(results, null, 2));
console.log(`Combined ${results.length} files into all_results_combined.json`);
