import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    
  },
  base: '/Kugarika_deploy/', // Ensure all assets are loaded relative to the current directory
});
