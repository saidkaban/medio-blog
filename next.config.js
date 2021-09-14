const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['miro.medium.com', 'm.media-amazon.com', "www.coe.int", "www.uopeople.edu", "www.looper.com"],
  },
};
