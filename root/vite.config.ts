import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import externalize from 'vite-plugin-externalize-dependencies';
import vitePluginSingleSpa from 'vite-plugin-single-spa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), externalize({
    externals: ["svelte"]
  }), vitePluginSingleSpa({
    type: 'root',
    imo: true,
    importMaps: {
      dev: ['src/importMap.dev.json', 'src/importMap.shared.json'],
      build: ['src/importMap.json', 'src/importMap.shared.json']
    }
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
      },
      external: "svelte"
    }
  }
});
