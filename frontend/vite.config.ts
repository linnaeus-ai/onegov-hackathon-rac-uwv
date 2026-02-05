import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  preview: {
    // Allow preview server to be accessed from outside the container
    host: '0.0.0.0',
    // Use the PORT environment variable if set, otherwise default to 4173
    port: process.env.PORT ? parseInt(process.env.PORT) : 4173,
    // Allow all hosts to access the preview server
    allowedHosts: true,
  },

  server: {
    // Development server proxy for API calls
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
})
