import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');
const OUTPUT_DIR = path.resolve(ROOT_DIR, '.artifacts', 'lighthouse');

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

function serveDist(port) {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      let reqPath = req.url ? req.url.split('?')[0] : '/';
      if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
      const filePath = path.join(DIST_DIR, reqPath);
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath);
        const mimeMap = {
          '.html': 'text/html',
          '.js': 'application/javascript',
          '.css': 'text/css',
          '.json': 'application/json',
          '.svg': 'image/svg+xml',
          '.png': 'image/png',
        };
        res.writeHead(200, { 'Content-Type': mimeMap[ext] || 'application/octet-stream' });
        fs.createReadStream(filePath).pipe(res);
      } else {
        const indexPath = path.join(DIST_DIR, 'index.html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(indexPath).pipe(res);
      }
    });

    server.listen(port, '127.0.0.1', () => resolve(server));
    server.on('error', reject);
  });
}

async function runLighthouse() {
  const port = 41732;
  const server = await serveDist(port);
  console.log(`[INFO] Dist server listening at http://127.0.0.1:${port}`);

  const reportPath = path.join(OUTPUT_DIR, 'report.json');
  const htmlPath = path.join(OUTPUT_DIR, 'report.html');

  const args = [
    `http://127.0.0.1:${port}`,
    '--output=json',
    '--output=html',
    `--output-path=${path.join(OUTPUT_DIR, 'report')}`,
    '--chrome-flags=--headless --no-sandbox --disable-gpu',
    '--form-factor=mobile',
    '--screenEmulation.mobile=true',
    '--throttling-method=simulate',
    '--no-enable-error-reporting',
  ];

  const chromePath = '/home/leann027/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome';
  console.log(`[INFO] Using Chrome path: ${chromePath}`);

  console.log('[INFO] Launching Lighthouse CLI...');
  const lh = spawn('npx', ['lighthouse', ...args], {
    stdio: 'inherit',
    env: { ...process.env, CHROME_PATH: chromePath },
  });

  await new Promise((resolve, reject) => {
    lh.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`Lighthouse exited with code ${code}`));
    });
  });

  server.close();

  // Parse report
  // Lighthouse appends .report.json or .json
  let jsonFile = reportPath;
  if (!fs.existsSync(jsonFile) && fs.existsSync(path.join(OUTPUT_DIR, 'report.report.json'))) {
    jsonFile = path.join(OUTPUT_DIR, 'report.report.json');
  }

  if (fs.existsSync(jsonFile)) {
    const raw = JSON.parse(fs.readFileSync(jsonFile, 'utf-8'));
    const categories = raw.categories;
    console.log('\n=============================================');
    console.log('           LIGHTHOUSE SCORES (MOBILE)        ');
    console.log('=============================================');
    console.log(`Performance:    ${Math.round(categories.performance.score * 100)}`);
    console.log(`Accessibility:  ${Math.round(categories.accessibility.score * 100)}`);
    console.log(`Best Practices: ${Math.round(categories['best-practices'].score * 100)}`);
    console.log(`SEO:            ${Math.round(categories.seo.score * 100)}`);
    console.log('=============================================\n');
  }
}

runLighthouse().catch((err) => {
  console.error('[ERROR] Lighthouse audit failed:', err);
  process.exit(1);
});
