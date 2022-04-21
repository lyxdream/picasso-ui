module.exports = {
  presets: [
    //预设是反着执行的 插件的集合
    "@babel/preset-env",
    "@babel/preset-typescript", // 解析ts语法，再采用preset-env
  ],
  overrides: [
    {
      test: /\.vue$/,
      plugins: [
        // ?
        "@babel/transform-typescript",
      ],
    },
  ],
  env: {
    utils: {
      plugins: [
        // ?
        [
          "babel-plugin-module-resolver", // 为了能正确找到z-ui模块
          { root: "z-ui" },
        ],
      ],
    },
  },
};
