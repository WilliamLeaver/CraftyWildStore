/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'scontent-atl3-1.cdninstagram.com',
                port: '',
                pathname: '/v/t51.29350-15/**'
            }
        ]
    }
}

module.exports = nextConfig
