const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        loader: "url-loader",
        options: {
          limit: 8 * 1024,
        },
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    compress: false,
    port: 8080,
  },
  //production
  mode: "development",
};
