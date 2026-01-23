import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  const isSSR = mode === 'ssr';

  return {
    plugins: [react()],
    base: './',
    build: isSSR
      ? {
          outDir: 'dist-ssr',
          ssr: 'src/entry-server.tsx',
          rollupOptions: {
            output: {
              format: 'esm',
            },
          },
        }
      : {
          outDir: 'dist',
          assetsDir: 'assets',
          sourcemap: false,
          minify: 'esbuild',
        },
    ssr: {
      noExternal: ['lucide-react'],
    },
  };
});
