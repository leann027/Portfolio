import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');
const ARTIFACTS_DIR = path.resolve(ROOT_DIR, '.artifacts', 'screenshots');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
};

function createStaticServer(distDir) {
  return http.createServer((req, res) => {
    let reqPath = req.url.split('?')[0];
    if (reqPath === '/' || reqPath.endsWith('/')) {
      reqPath = path.join(reqPath, 'index.html');
    }
    // Handle relative or subpath
    let filePath = path.join(distDir, reqPath.replace(/^\/Portfolio/, ''));
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(distDir, 'index.html');
    }

    const ext = path.extname(filePath);
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    try {
      const content = fs.readFileSync(filePath);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    } catch (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end(`File not found: ${req.url}`);
    }
  });
}

async function runResponsiveAudit() {
  console.log('====================================================');
  console.log('   HEADLESS RESPONSIVE & LAYOUT VERIFICATION TRACK  ');
  console.log('====================================================');

  if (!fs.existsSync(DIST_DIR) || !fs.existsSync(path.join(DIST_DIR, 'index.html'))) {
    console.error('Error: dist/ directory not found. Please run "npm run build" first.');
    process.exit(1);
  }

  fs.mkdirSync(ARTIFACTS_DIR, { recursive: true });

  const server = createStaticServer(DIST_DIR);
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  const baseUrl = `http://127.0.0.1:${port}/`;
  console.log(`[INFO] Serving production build at: ${baseUrl}`);

  const browser = await chromium.launch({ headless: true });
  const results = [];
  let allPassed = true;

  try {
    const viewports = [
      { width: 360, height: 800, label: '360px (Mobile Portrait)' },
      { width: 768, height: 1024, label: '768px (Tablet Portrait)' },
      { width: 1280, height: 800, label: '1280px (Desktop Widescreen)' },
    ];

    for (const vp of viewports) {
      console.log(`\nChecking Viewport: ${vp.label} ...`);
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        deviceScaleFactor: 1,
      });
      const page = await context.newPage();
      await page.goto(baseUrl, { waitUntil: 'networkidle' });

      // 1. Light Mode Check
      await page.evaluate(() => document.documentElement.classList.remove('dark'));
      await page.waitForTimeout(100);

      const lightMetrics = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
      }));

      const lightPassed = lightMetrics.scrollWidth <= lightMetrics.innerWidth;
      const lightShot = path.join(ARTIFACTS_DIR, `viewport-${vp.width}px-light.png`);
      await page.screenshot({ path: lightShot, fullPage: true });

      results.push({
        viewport: `${vp.width}px`,
        mode: 'Light',
        scrollWidth: lightMetrics.scrollWidth,
        innerWidth: lightMetrics.innerWidth,
        passed: lightPassed,
        screenshot: lightShot,
      });
      console.log(
        `  - Light Mode: scrollWidth=${lightMetrics.scrollWidth}px, innerWidth=${lightMetrics.innerWidth}px -> ${
          lightPassed ? 'PASS (No overflow)' : 'FAIL (Horizontal Overflow)'
        }`
      );
      if (!lightPassed) allPassed = false;

      // 2. Dark Mode Check
      await page.evaluate(() => document.documentElement.classList.add('dark'));
      await page.waitForTimeout(100);

      const darkMetrics = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
      }));

      const darkPassed = darkMetrics.scrollWidth <= darkMetrics.innerWidth;
      const darkShot = path.join(ARTIFACTS_DIR, `viewport-${vp.width}px-dark.png`);
      await page.screenshot({ path: darkShot, fullPage: true });

      results.push({
        viewport: `${vp.width}px`,
        mode: 'Dark',
        scrollWidth: darkMetrics.scrollWidth,
        innerWidth: darkMetrics.innerWidth,
        passed: darkPassed,
        screenshot: darkShot,
      });
      console.log(
        `  - Dark Mode:  scrollWidth=${darkMetrics.scrollWidth}px, innerWidth=${darkMetrics.innerWidth}px -> ${
          darkPassed ? 'PASS (No overflow)' : 'FAIL (Horizontal Overflow)'
        }`
      );
      if (!darkPassed) allPassed = false;

      // 3. Modal Open State Check (on 360px mobile)
      if (vp.width === 360) {
        console.log('  - Checking Modal Open State at 360px...');
        const detailBtn = await page.$('[data-testid="btn-details-portfolio-hub"]');
        if (detailBtn) {
          await detailBtn.click();
          await page.waitForTimeout(150);

          const modalMetrics = await page.evaluate(() => ({
            scrollWidth: document.documentElement.scrollWidth,
            innerWidth: window.innerWidth,
          }));

          const modalPassed = modalMetrics.scrollWidth <= modalMetrics.innerWidth;
          const modalShot = path.join(ARTIFACTS_DIR, `viewport-360px-modal.png`);
          await page.screenshot({ path: modalShot });

          results.push({
            viewport: '360px (Modal Open)',
            mode: 'Dark+Modal',
            scrollWidth: modalMetrics.scrollWidth,
            innerWidth: modalMetrics.innerWidth,
            passed: modalPassed,
            screenshot: modalShot,
          });
          console.log(
            `    -> scrollWidth=${modalMetrics.scrollWidth}px, innerWidth=${modalMetrics.innerWidth}px -> ${
              modalPassed ? 'PASS' : 'FAIL'
            }`
          );
          if (!modalPassed) allPassed = false;

          // Close modal
          await page.keyboard.press('Escape');
          await page.waitForTimeout(100);
        }
      }

      await context.close();
    }

    // 4. In-browser axe-core validation on live Chromium DOM
    console.log('\nRunning live axe-core audit inside Headless Chromium...');
    const a11yContext = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const a11yPage = await a11yContext.newPage();
    await a11yPage.goto(baseUrl, { waitUntil: 'networkidle' });

    // Inject axe-core bundle
    const axeScriptPath = path.resolve(ROOT_DIR, 'node_modules', 'axe-core', 'axe.min.js');
    if (fs.existsSync(axeScriptPath)) {
      const axeSource = fs.readFileSync(axeScriptPath, 'utf-8');
      await a11yPage.evaluate(axeSource);

      const axeResults = await a11yPage.evaluate(async () => {
        // @ts-ignore
        return await window.axe.run(document, {
          runOnly: {
            type: 'tag',
            values: ['wcag2a', 'wcag2aa'],
          },
        });
      });

      const severe = axeResults.violations.filter(
        (v) => v.impact === 'serious' || v.impact === 'critical'
      );

      console.log(`[AXE AUDIT] Total violations reported: ${axeResults.violations.length}`);
      console.log(`[AXE AUDIT] Critical / Serious violations: ${severe.length}`);
      if (axeResults.violations.length > 0) {
        console.warn('Violations summary:');
        axeResults.violations.forEach((v) => {
          console.warn(
            `  - [${v.impact ? v.impact.toUpperCase() : 'UNKNOWN'}] ${v.id}: ${v.description}`
          );
          v.nodes.forEach((n) => {
            console.warn(`    * target: ${JSON.stringify(n.target)}`);
            console.warn(`      html: ${n.html}`);
            console.warn(`      summary: ${n.failureSummary}`);
          });
        });
      }
    }
    await a11yContext.close();
  } finally {
    await browser.close();
    server.close();
  }

  console.log('\n====================================================');
  console.log('               AUDIT SUMMARY TABLE                  ');
  console.log('====================================================');
  console.table(
    results.map((r) => ({
      Viewport: r.viewport,
      Theme: r.mode,
      'scrollWidth (px)': r.scrollWidth,
      'innerWidth (px)': r.innerWidth,
      Status: r.passed ? 'PASSED' : 'FAILED',
    }))
  );

  console.log(`\nArtifacts generated in: ${ARTIFACTS_DIR}`);

  if (!allPassed) {
    console.error(
      '\n[FAILURE] One or more responsive checks failed (horizontal overflow detected).'
    );
    process.exit(1);
  } else {
    console.log(
      '\n[SUCCESS] All responsive checks passed (document.documentElement.scrollWidth <= innerWidth).'
    );
  }
}

runResponsiveAudit().catch((err) => {
  console.error('[ERROR] Responsive check crashed:', err);
  process.exit(1);
});
