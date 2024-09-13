import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import vitePluginSingleSpa from 'vite-plugin-single-spa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), vitePluginSingleSpa({
    type: 'root',
    imo: true,
  })],
  server: {
    port: 4100
  },
  preview: {
    port: 4100
  },
  build: {
    rollupOptions: {
      input: [
        'index.html',
        'src/utils.ts'
      ],
      preserveEntrySignatures: 'exports-only',
      output: {
        entryFileNames: '[name].js'
      }
    }
  }
});
