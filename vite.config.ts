import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [react(),  tailwindcss(), visualizer({ filename:'stats.html', template:'treemap' })],
    build: {
        cssCodeSplit: true,           // keep it on
            sourcemap: false,
                rollupOptions: {
                      output: {
                              manualChunks(id) {
                                        if (id.includes('node_modules')) {
                                                    if (id.includes('react-router')) return 'vendor-router';
                                                                            if (id.includes('lucide-react')) return 'vendor-icons';
                                                                                        return 'vendor';
                                                                                                  }
                                                                                                          }
                                                                                                                }
                                                                                                                    }
                                                                                                                      }
                                                                                                                      });
