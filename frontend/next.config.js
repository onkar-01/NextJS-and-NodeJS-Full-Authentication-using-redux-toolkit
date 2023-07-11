/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   server: {
//     port: 3000,
//     proxy: {
//       "/api": {
//         target: "http://localhost:8080",
//         changeOrigin: true,
//       },
//     },
//   },
// };

// module.exports = nextConfig;

module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/",
        destination: "http://localhost:8080",
      },
    ];
  };
  return {
    rewrites,
  };
};
