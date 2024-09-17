import { defineConfig } from 'vite';
import path from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [cssInjectedByJsPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // Apunta al archivo de entrada correcto
      name: 'JsonViewer',
      fileName: (format) => `JsonViewer.${format}.js`,
    },
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      // Excluir dependencias externas si es necesario
      external: [], // Por ejemplo: ['vue'] si fuera necesario
      output: {
        globals: {}, // Define variables globales si es necesario
      },
    },
  },
  css: {
    modules: {
      scopeBehaviour: 'local',
    },
  },
  server: {
    port: 3000,
  },
});
