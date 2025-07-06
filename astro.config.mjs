import { defineConfig } from 'astro/config';

// Impore Vite Plugins
import basicSsl from '@vitejs/plugin-basic-ssl';
import { loadEnv } from 'vite';


// Import packages for integration to Astro Project
import icon from 'astro-icon';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';


// https://astro.build/config
export default defineConfig({
  integrations: [icon({
    iconDir: 'src/assets/icons',
    include: {
      mdi: ['*'],
    },
  }), react(), mdx()],

  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});