/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export"
}

module.exports = {
    nextConfig,
    assetPrefix: process.env.NODE_ENV === 'production' ? '/Niyalo/Avana/' : '',
}
