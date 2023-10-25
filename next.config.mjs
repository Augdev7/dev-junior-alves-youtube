import withPlugins from 'next-compose-plugins';
import withPWAInit from 'next-pwa';

const isDev = process.env.NODE_ENV !== 'production';

const withPWA = withPWAInit({
  exclude: [
    ({ asset }) => {
      if (
        asset.name.startsWith('server/') ||
        asset.name.match(
          /^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/
        )
      ) {
        return true;
      }

      return isDev && !asset.name.startsWith('static/runtime/');
    }
  ]
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 1000,
  compiler: {
    removeConsole: !isDev
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      'www.google.com',
      'avatar.vercel.sh',
      'faisalman.github.io',
      'avatars.dicebear.com',
      'res.cloudinary.com',
      'pbs.twimg.com',
      'd2vwwcvoksz7ty.cloudfront.net',
      'lh3.googleusercontent.com',
      'media.cleanshot.cloud' // only for staging purposes
    ]
  },
  eslint: {
    dirs: ['pages', 'utils'] // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  experimental: {
    swcMinify: true
  }
};

export default withPlugins([withPWA], nextConfig);
