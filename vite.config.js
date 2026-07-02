import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: caminho do repositório no GitHub Pages (felipe-lau.github.io/felipe-lau-portfolio)
export default defineConfig({
  plugins: [react()],
  base: '/felipe-lau-portfolio/',
});
