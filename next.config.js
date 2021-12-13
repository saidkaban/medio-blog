const path = require("path");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: [
      "cdnuploads.aa.com.tr",
      "miro.medium.com",
      "m.media-amazon.com",
      "voelkerrechtsblog.org",
      "www.uopeople.edu",
      "www.looper.com",
      "www.thelondonmagazine.org",
    ],
  },
};
