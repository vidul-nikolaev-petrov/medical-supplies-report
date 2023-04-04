/* eslint @typescript-eslint/no-var-requires: "off" */

const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
// const path = require("path");

module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  externals: {
    "js-sha512": "js-sha51",
  },
  entry: "./src/index.ts",
  // Put your normal webpack config below here
  // target: 'node',
  module: {
    rules: require("./webpack.rules"),
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
    // context: path.resolve(__dirname, "src"),
    // modules: ['src'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "src/loading.html",
          to: "loading.html",
        },
        {
          from: "repo",
          to: "../repo",
        },
      ],
    }),
    new webpack.DefinePlugin({
      $dirname: "__dirname",
    }),
  ],
  node: {
    // __filename: false,
    // __dirname: false,
  },
};
