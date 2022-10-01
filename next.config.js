
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildEroors: true,
  },
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'cdn.pixabay.com',
      'p16-amd-va.tiktokcdn.com',
      'image.shutterstock.com',
      'img.lovepik.com'
    ],
  },
};

module.exports = nextConfig;