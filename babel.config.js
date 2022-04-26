module.exports = {
  presets: [
    //预设是反着执行的 插件的集合
    "@babel/preset-env",
    "@babel/preset-typescript", // 解析ts语法，再采用preset-env
  ],
  overrides: [
    //配置合并选项  覆盖vue-loader里面的配置
    {
      test: /\.vue$/,
      plugins: ["@babel/transform-typescript"],
    },
  ],
};
