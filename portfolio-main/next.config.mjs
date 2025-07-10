import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // needed for GitHub Pages
  distDir: 'docs',  // static files will go here
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/akshayakumar-portfolio', // your repo name
};

export default withSentryConfig(
  nextConfig,
  {
    silent: true,
    org: 'javascript-mastery',
    project: 'javascript-nextjs',
  },
  {
    widenClientFileUpload: true,
    transpileClientSDK: true,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
  }
);
