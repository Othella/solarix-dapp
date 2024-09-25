/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff|woffeot|ttf|otf)$/i,
      type: 'asset/resource',
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.document360.io',
      },
    ],
  },
};

export default nextConfig;
