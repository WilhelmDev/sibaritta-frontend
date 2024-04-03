/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "localhost",
      "lh3.googleusercontent.com",
      "platform-lookaside.fbsbx.com",
      "api.qa.sibarita.mensorestudio.com",
      "localhost:8000",
      "encrypted-tbn0.gstatic.com",
      "imagen.jpg",
      "flagcdn.com",
      "upload.wikimedia.org",
    ],
  },
};

module.exports = nextConfig;
