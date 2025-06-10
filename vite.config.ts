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

const compilerConfig = {
  prompt: "You are a professional translator specializing in web dev. Translate from {SOURCE_LOCALE} to {TARGET_LOCALE} while maintaining meaning accuracy."
}

export default defineConfig(() =>
  lingoCompiler.vite({
    targetLocales: ["fr"],
    models: {
      "*:*": "groq:mistral-saba-24b",
    },
  })(viteConfig)(compilerConfig),
);


