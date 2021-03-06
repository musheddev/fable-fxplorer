var path = require("path");
var webpack = require("webpack");

var cfg = {
  devtool: "source-map",
  entry: './out/Main.js',
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "source-map-loader",
        enforce: "pre"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [["es2015", {"modules" : false}]],
          plugins: ["transform-runtime"]
        },
      }
    ]
  },
  resolve: {
    modules: ["node_modules",path.resolve("/out/"), path.resolve("/node_modules/")
    ]
  }
};

module.exports = cfg;