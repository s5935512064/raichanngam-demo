const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
    },
    images: {
        // remotePatterns: [
        //     {
        //         protocol: 'https',
        //         hostname: 'srijulsup.com',
        //         pathname: '**',
        //     },
        // ],

        minimumCacheTTL: 600,
        unoptimized: true,
    },
    swcMinify: true,
    transpilePackages: ['@fancyapps/ui', 'vanilla-cookieconsent'],
    webpack: (config, { isServer }) => {
        if (isServer) {
            // @ts-ignore
            require("./scripts/sitemap-generator");
        }
        return config;
    },
};

module.exports = withBundleAnalyzer(nextConfig)
