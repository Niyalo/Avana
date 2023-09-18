/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/Avana/' : '',
    output: "export"
}

module.exports = nextConfig
