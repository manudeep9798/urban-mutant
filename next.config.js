module.exports = {
  reactStrictMode: true,
  // images: {
  //   loader: 'imgix',
  //   path: '/',
  // },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
    ]
  },
  webpack: (config, options) => {
        config.optimization.minimize = false;
      return config
    }
  
}
