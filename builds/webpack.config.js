const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "../packages/picasso-ui/index.ts"),
  externals: {
    vue: {
      root: "Vue",
      commonjs: "vue", //可以将 library 作为一个 CommonJS 模块访问。
      commonjs2: "vue", //和上面的类似，但导出的是 module.exports.default
      // amd: "vue", //类似于 commonjs，但使用 AMD 模块系统。
    },
  }, // 排除vue打包
  output: {
    path: path.resolve(__dirname, "../lib"),
    filename: "index.js",
    libraryTarget: "umd", // 可以支持commonjs 和 amd  不支持es6 可以在浏览器直接使用
    library: "picasso-ui",
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
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
