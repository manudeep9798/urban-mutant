module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: '/',
  },
  webpack: (config, options) => {
        config.optimization.minimize = false;
      return config
    }
  
}
