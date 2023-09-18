/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/Niyalo/Avana/' : '',
    output: "export"
}

module.exports = nextConfig
