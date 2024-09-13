import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import externalize from 'vite-plugin-externalize-dependencies';
import vitePluginSingleSpa from 'vite-plugin-single-spa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), externalize({
    externals: ["svelte", "@mfe/utils"]
  }), vitePluginSingleSpa({
    serverPort: 4101,
    cssStrategy: 'multiMife',
  })],
  build: {
    rollupOptions: {
      external: ["svelte", "@mfe/utils"]
    }
  }
})
