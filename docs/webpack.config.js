const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: path.resolve(__dirname, "main.ts"), // 打包入口
  output: {
    path: path.resolve(__dirname, "../docs-dist"),
    filename: "bundle.js",
  },
  resolve: {
    //解析模块 对应的扩展名有哪些
    extensions: [".ts", ".tsx", ".js", ".vue", ".json"],
  },
  module: {
    rules: [
      { test: /\.(ts|js)x?$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.vue$/, loader: "vue-loader" },
      { test: /\.(svg|otf|ttf|woff|woff2|eot|git|pbg)$/, loader: "url-loader" },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
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
