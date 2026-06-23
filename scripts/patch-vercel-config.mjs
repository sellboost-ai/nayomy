/**
 * Post-build patch for .vercel/output/config.json
 *
 * The @astrojs/vercel adapter emits a catch-all route:
 *   { "src": "^/.*$", "dest": "_render", "status": 404 }
 *
 * The "status": 404 overrides whatever HTTP status the Astro SSR function
 * returns for unmatched paths — including the 410 our middleware sends for
 * stale .md URLs. This script inserts a .md-specific route WITHOUT a status
 * override BEFORE the catch-all, so middleware can return 410 cleanly.
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const configPath = join(__dirname, '..', '.vercel', 'output', 'config.json');

if (!existsSync(configPath)) {
  console.log('⚠  .vercel/output/config.json not found — skipping patch');
  process.exit(0);
}

const config = JSON.parse(readFileSync(configPath, 'utf8'));

const catchAllIdx = config.routes.findIndex(
  r => r.src === '^/.*$' && r.status === 404
);

if (catchAllIdx === -1) {
  console.log('ℹ  Catch-all route not found — adapter may have changed, skipping');
  process.exit(0);
}

if (config.routes.some(r => r.src === '^/.*\\.md$')) {
  console.log('✓ Already patched');
  process.exit(0);
}

config.routes.splice(catchAllIdx, 0, {
  src: '^/.*\\.md$',
  dest: '_render',
});

writeFileSync(configPath, JSON.stringify(config, null, '\t'));
console.log('✓ Patched config.json — .md requests bypass status:404 override');
