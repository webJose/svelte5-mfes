import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'
import vitePluginSingleSpa from 'vite-plugin-single-spa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), vitePluginSingleSpa({
    serverPort: 4101,
    cssStrategy: 'multiMife',
  })],
})
