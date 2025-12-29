import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  
  // 🔥 AÑADE ESTO - Configuración webpack para Resend
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'resend': false,
        '@react-email/render': false,
      };
    }
    return config;
  },
  
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // eslint va dentro de experimental
  experimental: {
    eslint: {
      ignoreDuringBuilds: false,
    },
  },
  
  async headers() {
    return [
      {
        source: '/(.*).(svg|png|jpg|jpeg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
}

export default nextConfig