import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import lingoCompiler from 'lingo.dev/compiler';

const viteConfig = {
  plugins: [react()],
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
    sourceRoot: "./src",
    sourceLocale: "fr",
    targetLocales: ["en", "fr"],
    lingoDir: "lingo",
    models: {
      "*:*": "groq:mistral-saba-24b",
    },
  })(viteConfig),
);


