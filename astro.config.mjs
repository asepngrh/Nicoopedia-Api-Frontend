// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // output: 'server', // Dihapus karena frontend ini hanya static HTML + JS
  // adapter: cloudflare(), 
  devToolbar: {
    enabled: false
  }
});
