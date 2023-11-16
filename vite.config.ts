import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Solvintech/',
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://layout.solvintech.ru/nuxt/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
