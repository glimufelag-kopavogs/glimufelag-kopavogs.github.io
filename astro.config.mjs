// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gfk.is',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
