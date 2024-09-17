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
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'JsonViewer',
      fileName: (format) => `JsonViewer.${format}.js`,
    },
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      external: [], 
      output: {
        globals: {}, 
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
