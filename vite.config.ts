import path from "path"
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import vike from "vike/plugin";
import { visualizer } from "rollup-plugin-visualizer";
import imagemin from "@vheemstra/vite-plugin-imagemin";
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(), 
    vike(), 
    tailwindcss(),
    imagemin({
      // Optional: optimize originals
     plugins: {
        jpg: imageminMozjpeg({ quality: 80 }),
         png: imageminPngquant({ quality: [0.6, 0.8] }),
       },
      makeWebp: {
        plugins: {
          jpg: imageminWebp({ quality: 75 }),
          png: imageminWebp({ quality: 75 }),
        },
      },
    }),
    visualizer({ 
      filename: 'dist/client/stats.html',
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
