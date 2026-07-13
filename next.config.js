/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Add your Strapi media domain here once deployed, e.g.:
      // { protocol: "https", hostname: "your-strapi-instance.com" },
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;
