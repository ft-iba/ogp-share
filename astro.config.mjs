// @ts-check
import { defineConfig } from 'astro/config';
import { execSync } from 'child_process';

import { SITE } from './src/constants/index';

const commitHash = execSync('git rev-parse --short HEAD').toString().trim();

// https://astro.build/config
export default defineConfig({
  site: SITE.DOMAIN,
  base: SITE.BASE,
  trailingSlash: 'always',
  vite: {
    define: {
      'import.meta.env.COMMIT_HASH': JSON.stringify(commitHash),
    },
  },
});