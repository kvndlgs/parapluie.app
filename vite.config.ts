import path from "path"
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import vike from "vike/plugin";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(), 
    vike({
      prerender: true 
    }), 
    tailwindcss(),
    visualizer({ 
      filename: 'dist/client/stats.html', // On le place directement dans le dossier final de Vercel
      template: 'treemap',
      gzipSize: true,
      brotliSize: true
    })
  ],
  build: {
    cssCodeSplit: true,
    sourcemap: false
  }
});
