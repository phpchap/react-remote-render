const webpack = require('webpack')
const fragmentPort = 8081;

module.exports = {
  entry: './common.js',
  output: {
    path: __dirname + '/public',
    publicPath: `http://localhost:${fragmentPort}/public/`,
    filename: 'bundle.js',
    libraryTarget: 'umd'
  }
}
