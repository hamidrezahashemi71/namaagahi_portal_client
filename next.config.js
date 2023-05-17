/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        SERVER:"http://localhost:3500",
        TITLE:"پورتال دیتابیس نماآگهی"
      },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 's8.uupload.ir',
          port: '',
          // pathname: '/account123/**',
        },
      ],
    },
}

module.exports = nextConfig
