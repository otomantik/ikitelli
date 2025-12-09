// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({}),
  integrations: [
    react({
      // Only include React when needed (islands)
      include: ['**/react/**'],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
      // Optimize chunk size
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          // Manual chunking for better caching
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
          },
        },
      },
    },
    // Optimize dependencies
    optimizeDeps: {
      include: ['react', 'react-dom'],
    },
  },
  // Image optimization
  image: {
    domains: [],
    remotePatterns: [],
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      },
    },
  },
  // Compress output
  compressHTML: true,
});