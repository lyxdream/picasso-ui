const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: path.resolve(__dirname, "main.ts"),
  output: {
    path: path.resolve(__dirname, "../docs-dist"),
    filename: "bundle.js",
  },
  resolve: {
    // 解析模块 对应的扩展名有哪些
    extensions: [".ts", ".tsx", ".js", ".vue", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.(svg|otf|ttf|woff|woff2|eot|gif|png)$/,
        use: "url-loader",
      },
      {
        test: /\.(scss|css)/,
        use: [
          // loader 三种写法  { }  ""  []
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "template.html"),
    }),
  ],
};
