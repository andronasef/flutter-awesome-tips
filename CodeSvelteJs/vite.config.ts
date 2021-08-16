import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    // exclude: ['markedmarked/src/Lexer'],
    // include: ["markedmarked/src/Lexer"]
  },
  plugins: [WindiCSS(), svelte()],
})
