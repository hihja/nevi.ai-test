/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.externals.push({
            'utf-8-validate': 'commonjs utf-8-validate',
            bufferutil: 'commonjs bufferutil',
        });

        return config;
    },
    pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
    images: {
        formats: ['image/avif', 'image/webp'],
        // minimumCacheTTL: 60,
        // minimumCacheTTL: 600,
        remotePatterns: []
    }
};

export default nextConfig;
