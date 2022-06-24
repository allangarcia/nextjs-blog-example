module.exports = {
  async redirects() {
    return [
      {
        source: '/about2',
        destination: '/',
        permanent: true, // triggers 308
      },
      // {
      //   source: '/404',
      // },
    ]
  },
}
