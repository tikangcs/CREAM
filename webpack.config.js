const webpack = require("webpack");
const OtpmizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");
const SRC_DIR = path.resolve(__dirname, "src");
const DIST_DIR = path.resolve(__dirname, "dist");

module.exports = {
  entry: ["react-hot-loader/patch", `${SRC_DIR}/index.jsx`],
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: [/node_modules/, `${SRC_DIR}/redux.example/`],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  devServer: {
    contentBase: "./dist",
  },
};
