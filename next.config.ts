import type { NextConfig } from "next";
  import withPWA from '@ducanh2912/next-pwa';

const nextConfig: NextConfig = {
  /* config options here */
};
 const pwaConfig = withPWA({
      dest: 'public', // Output directory for the service worker
      disable: process.env.NODE_ENV === 'development', // Disable PWA in development

   })(nextConfig);

    export default pwaConfig;
