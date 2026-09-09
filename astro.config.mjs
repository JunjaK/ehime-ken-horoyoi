// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ehime-horoyoi.jun-devlog.win',
  vite: {
    plugins: [tailwindcss()]
  }
});