import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import lingoCompiler from 'lingo.dev/compiler';


const compilerConfig = {
  prompt: "You are a professional translator specializing in web dev. Translate from {SOURCE_LOCALE} to {TARGET_LOCALE} while maintaining meaning accuracy."
}
const viteConfig = {
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  compilerConfig: {
    compilerConfig
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
};


export default defineConfig(() =>
  lingoCompiler.vite({
    sourceLocale: "en",
    targetLocales: ["fr"],
    lingoDir: "src", 
    models: {
      "*:*": "groq:mistral-saba-24b",
    },
  })(viteConfig)
);


