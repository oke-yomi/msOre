/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "www.themealdb.com",
      "api.edamam.com",
      "edamam-product-images.s3.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
