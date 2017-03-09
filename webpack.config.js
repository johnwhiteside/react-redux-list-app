const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module : {
    loaders : [
      {
        test : /\.js?/,
        exclude: /node_modules/,
        include : __dirname,
        loaders : [ "babel-loader", "eslint-loader" ]
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve('node_modules'),
      path.resolve('./src')
    ]
  }
};
