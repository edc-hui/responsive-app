module.exports = {
  vite: false,
  plugins: [
    [
      'build-plugin-ignore-style',
      {
        libraryName: 'antd',
      },
    ],
  ],
  hash: process.env.NODE_ENV === 'production' ? 'contenthash' : false,
  dropLogLevel: 'log',
  outputDir: 'dist',
};
