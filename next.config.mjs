/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://advandplv.vercel.app/message',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
