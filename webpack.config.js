const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true,
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 9000
  },
}