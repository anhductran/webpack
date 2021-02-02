const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  watch: true,
  devServer: {
    contentBase: "./dist",
    compress: true,
    port: 9000,
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
    },
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
    ],
  },
};
