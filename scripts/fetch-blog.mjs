/**
 * Pre-build script: Ensure blog submodule content is available.
 *
 * On Vercel, the built-in submodule support often fails for private repos.
 * This script uses GITHUB_TOKEN env var to clone the repo if content/blog is empty.
 *
 * Local dev: submodule already checked out, this script is a no-op.
 * Vercel:    Set GITHUB_TOKEN env var in project settings.
 */
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const blogDir = path.resolve(__dirname, '../content/blog');
const REPO = 'chisss/obsidian-vault';

function hasBlogContent() {
  if (!fs.existsSync(blogDir)) return false;
  const files = fs.readdirSync(blogDir);
  // Filter out hidden files like .git
  const mdFiles = files.filter(f => !f.startsWith('.'));
  return mdFiles.length > 0;
}

function main() {
  if (hasBlogContent()) {
    console.log('[fetch-blog] Blog content already exists, skipping.');
    return;
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.warn('[fetch-blog] No GITHUB_TOKEN found and blog content is empty.');
    console.warn('[fetch-blog] Blog page will show no articles.');
    // Create empty dir so build doesn't fail
    fs.mkdirSync(blogDir, { recursive: true });
    return;
  }

  console.log('[fetch-blog] Blog content missing, cloning with GITHUB_TOKEN...');

  // Remove empty dir if it exists
  if (fs.existsSync(blogDir)) {
    fs.rmSync(blogDir, { recursive: true, force: true });
  }
  fs.mkdirSync(path.dirname(blogDir), { recursive: true });

  try {
    execSync(
      `git clone --depth 1 https://x-access-token:${token}@github.com/${REPO}.git ${blogDir}`,
      { stdio: 'inherit' }
    );
    console.log('[fetch-blog] Blog content cloned successfully.');
  } catch (err) {
    console.error('[fetch-blog] Failed to clone blog repo:', err.message);
    fs.mkdirSync(blogDir, { recursive: true });
  }
}

main();
