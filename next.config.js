/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  env: {
    MONGO_URI: 'mongodb+srv://hazal:123qweasd@cluster0.uwrzopu.mongodb.net/dashboard?retryWrites=true&w=majority',
    AUTH_SECRET: 'generatesecretkey',
    AUTH_URL: 'https://nextadmin-fullstack.vercel.app/api/auth',
  }
};

module.exports = nextConfig;
