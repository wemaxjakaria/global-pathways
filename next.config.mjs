/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // ✅ Required for static export if using <Image>
  },
  output: 'export', // ✅ This makes it static
};

export default nextConfig;
