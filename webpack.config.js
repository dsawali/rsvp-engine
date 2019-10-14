const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index-bundle.js",
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          "style-loader", 
          "css-loader",
          "sass-loader"
        ]
      },
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true, 
    proxy: {
      "/api": "http://localhost:3030"
    }
  },
  plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ]
};