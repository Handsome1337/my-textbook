import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-textbook/',
  plugins: [react()],
  resolve: {
    tsconfigPaths: true
  }
});
