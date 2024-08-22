import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Real-Estate-Web/',  // Use the relative path for GitHub Pages
});
