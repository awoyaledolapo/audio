import withPWA from '@ducanh2912/next-pwa';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {};

export default withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',

  // Needed so App Router dynamic routes don't 404
  cacheOnFrontEndNav: true,

  workboxOptions: {
    runtimeCaching: [
      {
        // Fix /products/[id] caching issue
        urlPattern: ({ url }) => url.pathname.startsWith('/products'),
        handler: 'NetworkFirst',
        options: {
          cacheName: 'products-pages',
          networkTimeoutSeconds: 10,
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 24 * 60 * 60, // 1 day
          },
        },
      },

      {
        // Cache all images
        urlPattern: ({ request }) => request.destination === 'image',
        handler: 'CacheFirst',
        options: {
          cacheName: 'images-cache',
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
          },
        },
      },

      {
        // Cache API calls
        urlPattern: ({ url }) => url.pathname.startsWith('/api'),
        handler: 'NetworkFirst',
        options: {
          cacheName: 'api-cache',
          networkTimeoutSeconds: 10,
        },
      },
    ],
  },
})(nextConfig);
