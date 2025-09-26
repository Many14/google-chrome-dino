const path = require('path');

module.exports = {
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname),
    filename: "output.js"
  },
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname),
    port: 3000,
    open: true,
    hot: true
  }
};
