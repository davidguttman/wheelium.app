import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, '../dist');

// SSR entry point will be built separately
async function prerender() {
  // Read the built index.html
  const indexPath = resolve(distDir, 'index.html');

  if (!existsSync(indexPath)) {
    console.error('dist/index.html not found. Run npm run build:client first.');
    process.exit(1);
  }

  let html = readFileSync(indexPath, 'utf-8');

  // Import the SSR bundle
  const { render } = await import('../dist-ssr/entry-server.js');

  // Render the app to string
  const appHtml = render();

  // Replace the empty app div with pre-rendered content
  html = html.replace(
    '<div id="app"></div>',
    `<div id="app">${appHtml}</div>`
  );

  // Write the pre-rendered HTML
  writeFileSync(indexPath, html);

  console.log('✓ Pre-rendered index.html');
  process.exit(0);
}

prerender().catch((err) => {
  console.error(err);
  process.exit(1);
});
