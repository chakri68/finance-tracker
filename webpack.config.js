const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: "index.html",
      template: "./src/index.html",
      title: "Finance Tracker",
    }),
  ],
  devtool: "eval-source-map",
  devServer: {
    static: path.join(__dirname, "dist"),
    hot: true,
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
