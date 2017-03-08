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
  }
};
