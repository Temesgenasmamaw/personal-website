/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'www.codewithrandom.com',
      'fireartstudio.s3-accelerate.amazonaws.com',
      'd3l9a8mvoa6cl8.cloudfront.net',
      'globalowls.com',
      'onlinelibrary.wiley.com',
      'financialcrimeacademy.org'
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig