#!/usr/bin/env node
// Checks the vendored ai-architect files under vendor/ai-architect/ against the
// live source on github.com/frankxai/ai-architect. Exits 1 and names every
// drifted file if the vendored copy is stale. A network failure is not a
// vendoring failure: it prints SKIPPED and exits 0, so CI never flakes on it.

import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');

// Move this to "main" once the plugin's default branch carries these files.
const SOURCE_BRANCH = 'agent/claude/ai-architect-plugin';
const SOURCE_REPO = 'frankxai/ai-architect';

const FILES = [
  { vendored: 'vendor/ai-architect/team/ai-architect-team.json', upstream: 'team/ai-architect-team.json' },
  { vendored: 'vendor/ai-architect/templates/SYSTEM.md', upstream: 'templates/SYSTEM.md' },
  { vendored: 'vendor/ai-architect/templates/WORKFLOW.md', upstream: 'templates/WORKFLOW.md' },
  { vendored: 'vendor/ai-architect/templates/SOP.md', upstream: 'templates/SOP.md' },
];

const FETCH_TIMEOUT_MS = 10_000;

function sha256(buffer) {
  return createHash('sha256').update(buffer).digest('hex');
}

async function fetchUpstream(upstreamPath) {
  const url = `https://raw.githubusercontent.com/${SOURCE_REPO}/${SOURCE_BRANCH}/${upstreamPath}`;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} for ${url}`);
    }
    return Buffer.from(await response.arrayBuffer());
  } finally {
    clearTimeout(timer);
  }
}

async function main() {
  const drifted = [];
  let networkFailure = null;

  for (const { vendored, upstream } of FILES) {
    const vendoredPath = path.join(repoRoot, vendored);
    let vendoredBuffer;
    try {
      vendoredBuffer = await readFile(vendoredPath);
    } catch (error) {
      console.error(`sync-check: cannot read vendored file ${vendored}: ${error.message}`);
      process.exitCode = 1;
      return;
    }

    let upstreamBuffer;
    try {
      upstreamBuffer = await fetchUpstream(upstream);
    } catch (error) {
      networkFailure = error;
      break;
    }

    const vendoredHash = sha256(vendoredBuffer);
    const upstreamHash = sha256(upstreamBuffer);
    if (vendoredHash !== upstreamHash) {
      drifted.push({ vendored, upstream, vendoredHash, upstreamHash });
    }
  }

  if (networkFailure) {
    console.log(`sync-check: SKIPPED — could not reach ${SOURCE_REPO}@${SOURCE_BRANCH} (${networkFailure.message}).`);
    process.exitCode = 0;
    return;
  }

  if (drifted.length > 0) {
    console.error(`sync-check FAILED — ${drifted.length} vendored file(s) drifted from ${SOURCE_REPO}@${SOURCE_BRANCH}:`);
    for (const file of drifted) {
      console.error(`  ${file.vendored} (sha256 ${file.vendoredHash.slice(0, 12)}...) != upstream ${file.upstream} (sha256 ${file.upstreamHash.slice(0, 12)}...)`);
    }
    console.error('\nRe-copy the drifted file(s) from the ai-architect checkout and commit the update.');
    process.exitCode = 1;
    return;
  }

  console.log(`sync-check OK — ${FILES.length} vendored file(s) match ${SOURCE_REPO}@${SOURCE_BRANCH}.`);
}

main().catch((error) => {
  console.error('sync-check crashed:', error);
  process.exitCode = 1;
});
