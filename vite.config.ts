import path from 'path';
import react from '@vitejs/plugin-react';
import generateSitemap from 'vite-plugin-pages-sitemap';
import Pages from 'vite-plugin-pages';
import { defineConfig } from 'vite';

import lingoCompiler from 'lingo.dev/compiler';


const viteConfig = {
  plugins: [react(), Pages({
      onRoutesGenerated: routes => (generateSitemap({ routes })),
    }),],
  server: {
    historyApiFallback: true,
    cors: {
      origins: 'https://parapluie.app',
    },
  },
  build: {
    manifest: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
};


export default defineConfig(() =>
  lingoCompiler.vite({
    sourceLocale: "en",
    targetLocales: ["fr", "en"],
    lingoDir: "src", 
    models: {
      "*:*": "groq:mistral-saba-24b",
    },
  })(viteConfig)
);


