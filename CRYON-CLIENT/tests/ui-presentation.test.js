import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../src/renderer/index.html', import.meta.url), 'utf8');
const app = await readFile(new URL('../src/renderer/app.js', import.meta.url), 'utf8');
const css = await readFile(new URL('../src/renderer/style.css', import.meta.url), 'utf8');

test('sidebar uses original inline vector icons for each launcher category', () => {
  for (const key of ['home', 'profiles', 'accounts', 'mods', 'performance', 'cosmetics', 'servers', 'settings']) {
    assert.match(html, new RegExp(`nav-icon-${key}[^>]*><svg`));
  }
});

test('desktop overview is a fixed-height no-page-scroll canvas with responsive fallback', () => {
  assert.match(app, /classList\.toggle\('home-active', page === 'home'\)/);
  assert.match(css, /body\.home-active \{ height: 100vh; height: 100dvh; overflow: hidden; \}/);
  assert.match(css, /@media \(max-width: 900px\)/);
});

test('launch and profile split controls use a coordinated blue palette', () => {
  assert.match(css, /\.home-launch-button,\s*\.home-launch-button:enabled[\s\S]*?background: linear-gradient\(112deg, #3b82f6/);
  assert.match(css, /\.home-profile-menu \{[\s\S]*?background: linear-gradient\(145deg, #4b8bf5, #2459ca\)/);
});

test('server creation automatically provisions a missing compatible Java runtime', () => {
  assert.match(app, /async function ensureCompatibleServerJava\(\)/);
  assert.match(app, /if \(!compatible && !state\.serverJavaInstallInProgress\)[\s\S]*?await installServerJavaMajor\(required\)/);
  assert.match(app, /async function showServerCreateForm\(\)[\s\S]*?await ensureCompatibleServerJava\(\)/);
  assert.match(app, /\$\('#server-version'\)\.addEventListener\('change', \(\) => ensureCompatibleServerJava\(\)/);
});
