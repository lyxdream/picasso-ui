# 从零搭建 Vue3.0 组件

## 一.组件库初始化

### 1.monorepo 项目初始化

```
$ yarn global add lerna
$ lerna init
或
npm i lerna -g
lerna init
```

> lerna.json

```json
{
  "packages": ["packages/*"],
  "version": "0.0.0",
  "npmClient": "yarn", // 使用yarn管理
  "useWorkspaces": true // 使用workspace,需要配置package.json
}
```

> package.json

```json
{
  "name": "root",
  "private": true,
  "workspaces": ["packages/*"],
  "devDependencies": {
    "lerna": "^3.22.1"
  }
}
```

### 2.初始化组件

```
lerna create button
lerna create icon
```

```
├─button
│  │  package.json
│  │  README.md
│  ├─src
|  ├─  button.vue
│  ├─index.ts # 组件入口
│  └─__tests__ # 测试相关
└─icon
    │  package.json
    │  README.md
    ├─src
    ├─  icon.vue
    ├─index.ts # 组件入口
    └─__tests__
```

### 3.tsconfig 生成

```
npm install typescript -S 或yarn add typescript
npx tsc --init

yarn install --ignore-scripts
```

> tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ESNext", // 打包的目标语法
    "module": "ESNext", // 模块转化后的格式
    "esModuleInterop": true, // 支持模块转化
    "skipLibCheck": true, // 跳过类库检测
    "forceConsistentCasingInFileNames": true, // 强制区分大小写
    "moduleResolution": "node", // 模块解析方式
    "jsx": "preserve", // 不转化jsx
    "declaration": true, // 生成声明文件
    "sourceMap": true // 生成映射文件
  }
}
```

## 二.组件初始化

```
 yarn add vue@next -W
```

### 1.编写组件入口及出口

```vue
<template>
  <button>按钮</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "PButton",
});
</script>
```

```vue
<template>
  <div>icon</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "PIcon",
});
</script>
```

> 入口声明对应的 install 方法

```ts
import { App } from "vue";
import Button from "./src/button.vue";

Button.install = (app: App): void => {
  app.component(Button.name, Button); //注册全局组件
};

type IWithInstall<T> = T & { install(app: App): void };
const _Button: IWithInstall<typeof Button> = Button;

export default _Button;
```

**默认无法解析.vue 文件后缀的文件，增加 typings**

> typings/vue-shim.d.ts

```ts
declare module "*.vue" {
  import { App, defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void;
  };
  export default component;
}
```

### 2.整合所有组件

> picasso-ui/index.ts

```ts
import Button from "@picasso-ui/button";
import Icon from "@picasso-ui/icon";
import { App } from "vue";

const components = [Button, Icon];

const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
// 在使用组件库的时候可以使用 createApp().use(XXX)
export default {
  install,
};
```

> 安装依赖

```
yarn install
```

## 三.搭建文档 (组件库看效果=>文档=>md=>webpack)

目录

```


```

### 1.搭建文档环境

安装 webpack 构建工具

```
yarn add webpack webpack-cli webpack-dev-server vue-loader@next @vue/compiler-sfc -D
yarn add babel-loader @babel/core @babel/preset-env @babel/preset-typescript babel-plugin-module-resolver url-loader file-loader html-webpack-plugin css-loader sass-loader style-loader sass -D
```

```
webpack   5
webpack-cli  解析命令行功工具
 webpack-dev-server   启服务
vue-loader@next   解析vue模版
@vue/compiler-sfc  编译单文件组件

babel-loader
 @babel/core  loader默认调用核心包，
 @babel/preset-env  高级语法转换成低级语法 ES6 转换为 ES5
 @babel/preset-typescript   babel转换ts,不用ts自带的编译功能
 @babel/plugin-transform-typescript  转换 TypeScript 代码
 babel-plugin-module-resolver
url-loader  解析文件资源，比如icon,编译成base64
file-loader  文件很大，通过这个loader生成真实文件
html-webpack-plugin
css-loader
sass-loader
style-loader
sass

```

> babel.config.js

```js
module.exports = {
  presets: [
    //预设是反着执行的 插件的集合
    "@babel/preset-env",
    "@babel/preset-typescript", // 解析ts语法，再采用preset-env
  ],
  overrides: [
    //配置合并选项
    {
      test: /\.vue$/,
      plugins: ["@babel/transform-typescript"],
    },
  ],
};
```

> 使用 webpack 进行文档构建工作 docs/webpack.config.js

```js
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
    extensions: [".ts", ".tsx", ".js", ".vue"],
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
```

> package.json

```json
 "scripts": {
    "website-dev": "webpack serve --config ./docs/webpack.config.js"
  }
```

> docs/main.ts 配置运行命令：后续可以采用 "website-dev" 运行文档来预览组件效果

```ts
import { createApp } from "vue";
import App from "./App.vue";

import PUI from "picasso-ui";

//创建应用，使用组件
createApp(App).use(PUI).mount("#app");
```

> 新建模块 packages/theme-chalk

> theme-chalk/src

```

├─common
│    var.scss # 提供scss变量
├─fonts # 字体
└─mixins
     config.scss # 提供名字
     mixins.scss # 提供mixin方法
  index.scss  # 整合所有scss
│ button.scss
│ icon.scss
```

> 修改 packages/icon/src/icon.vue

```vue
<template>
  <i :class="`p-icon-${name}`"></i>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "PIcon",
  props: {
    name: {
      type: String,
      default: "",
    },
  },
});
</script>
```

> docs/App.vue

```vue
<template>
  <p-button></p-button>
  <p-icon name="loading"></p-icon>
</template>
```

执行 npm run website-dev

可以看到 loading 效果

## 四.组件样式处理

### 1.使用 gulp 打包 scss 文件

> 安装 gulp, 打包样式

```
yarn add gulp gulp-autoprefixer gulp-cssmin gulp-dart-sass gulp-rename -D
```

docs/main.ts

```ts
import { createApp } from "vue";
import App from "./App.vue";

import PUI from "picasso-ui";

import "theme-chalk/src/index.scss";

//创建应用，使用组件
createApp(App).use(PUI).mount("#app");
```

> 最终使用打包后的 css 引入即可，这里为了方便调试，不需要每次进行重新打包

```
 "css-loader": "^6.7.1",  //图标出不来
 改为
  "css-loader": "5.1.3",
```

> theme-chalk/gulpfile.js

```js
const { series, src, dest } = require("gulp");
const sass = require("gulp-dart-sass");
const autoprefixer = require("gulp-autoprefixer");
const cssmin = require("gulp-cssmin");

function compile() {
  // 处理scss文件
  return src("./src/*.scss")
    .pipe(sass.sync())
    .pipe(autoprefixer({}))
    .pipe(cssmin())
    .pipe(dest("./lib"));
}
function copyfont() {
  // 拷贝字体样式
  return src("./src/fonts/**").pipe(cssmin()).pipe(dest("./lib/fonts"));
}

exports.build = series(compile, copyfont);
```

package.json

```json
  "scripts": {
    "build:theme": " gulp build --gulpfile packages/theme-chalk/gulpfile.js"
  }
```

> docs/App.vue

```vue
<template>
  <p-button></p-button>
  <p-icon name="loading"></p-icon>
</template>
```

## 五.组件库打包

format：输出的文件可以还可以是 amd，umd，cjs，es，iife；

cjs，amd，umd，es，iife 区别：

cjs:

- 只能在 NodeJS 上运行，使用 require("module") 读取并加载模块。
- commonjs 导入模块是同步导入
- 主要用于后端，客户端用的话需要通过 Browserify
- 缺点：不支持浏览器，执行后才能拿到依赖信息，由于用户可以动态 require（例如 react 根据开发和生产环境导出不同代码 的写法），无法做到提前分析依赖以及 Tree-Shaking 。

amd:

- Asynchronous Module Definition，可以看作 CJS 的异步版本，制定了一套规则使模块可以被异步 require 进来并在回调函数里继续使用
- 其适用于浏览器端

umd: (Universal Module Definition)

- 其是 amd 和 commonjs 的统一规范，支持两种规范，即写一套代码，可用于多种场景
- 支持直接在前端用 <script src="lib.umd.js"></script> 的方式加载
- 前后端均通用
- 与 CJS 或 AMD 不同，UMD 更像是一种配置多个模块系统的模式。
- UMD 在使用诸如 Rollup/ Webpack 之类的 bundler 时通常用作备用模块

IIFE:

- Immediately Invoked Function Expression，只是一种写法，可以隐藏一些局部变量

ESM：ESM 是 ES6 提出的标准模块系统

- ESM 格式被设计为可以被静态分析，打包器可以轻易做到分析依赖以及 Tree-Shaking,也支持动态加载（import()）。
- 现代浏览器中通过 <script type="module"> 直接导入
- 使用 import export 来管理依赖
- node 也开始支持
  > node 支持 ESModule node 最新版本进一步增强了对 ESModule 的支出，只需要在 package.json 增加一个选项即可 "type":"module"
- 很多浏览器开始支持

```
import React from 'react';
```

### 组件库规范 BEM

```html
<div class="z-xxx">
  <button class="z-button--primary"></button>
  <div class="z-xxx__header"></div>
</div>
```

```
@include p(button) {
  @include whtn(disabled) {
    color: #f00;
  }
}
```

组件库的打包规范：

1. 整个打包 umd
2. es6 esmodule
3. 组件的按需加载，需要把每个文件夹单独打包

按需加载

```
babel-import-plugin
```

### 打包 Umd 格式组件库

webpack 的 externals

> 防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(external dependencies)。

```
root：可以通过一个全局变量访问 library（例如，通过 script 标签）。
commonjs：可以将 library 作为一个 CommonJS 模块访问。
commonjs2：和上面的类似，但导出的是 module.exports.default.
amd：类似于 commonjs，但使用 AMD 模块系统。

```

builds/webpack.config.js

```js
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
```

> package.json

```json
 "build": "webpack --config ./builds/webpack.config.js"
```

> 使用 docs/main.ts

```ts
import { createApp } from "vue";
import App from "./App.vue";

import PUI from "../lib/index.js";
import "theme-chalk/src/index.scss";

//创建应用，使用组件
createApp(App).use(PUI).mount("#app");
```

```
npm run build
npm run website-dev
```

### 打包 esModule 格式组件库

> 使用 rollup 进行打包，安装所需依赖

```
yarn add rollup rollup-plugin-typescript2 @rollup/plugin-node-resolve rollup-plugin-vue -D
```

> 全量打包 builds/rollup.config.bundle.js

```js
import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import path from "path";
import vue from "rollup-plugin-vue";

export default {
  input: path.resolve(__dirname, `../packages/picasso-ui/index.ts`),
  output: {
    format: "es",
    file: `lib/index.esm.js`,
  },
  plugins: [
    nodeResolve(),
    vue({
      target: "browser",
    }),
    typescript({
      //默认用tsconfig.json 生成声明文件
      exclude: ["node_modules", "docs"],
    }),
  ],
  external(id) {
    // 排除vue本身
    return /^vue/.test(id);
  },
};
```

> package.json

```json
   "build:esm-bundle": "rollup -c ./builds/rollup.config.bundle.js",
```

> 使用 docs/main.ts

```ts
import { createApp } from "vue";
import App from "./App.vue";

import PUI from "../lib/index.esm.js";
import "theme-chalk/src/index.scss";

//创建应用，使用组件
createApp(App).use(PUI).mount("#app");
```

```
npm run build:esm-bundles
npm run website-dev
```

### 按组件打包

> builds/rollup.config.js

```js
import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import path from "path";
import { getPackagesSync } from "@lerna/project";
import vue from "rollup-plugin-vue";

// 获取package.json 找到名字 以@p-ui 开头的
const inputs = getPackagesSync()
  .map((pck) => pck.name)
  .filter((name) => name.includes("@picasso-ui"));
export default inputs.map((name) => {
  const pckName = name.split("@picasso-ui")[1]; // button icon
  return {
    input: path.resolve(__dirname, `../packages/${pckName}/index.ts`),
    output: {
      format: "es",
      file: `lib/${pckName}/index.js`,
    },
    plugins: [
      nodeResolve(),
      vue({
        target: "browser",
      }),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            // 打包单个组件的时候不生成ts声明文件
            declaration: false,
          },
          exclude: ["node_modules"],
        },
      }),
    ],
    external(id) {
      // 对vue本身 和 自己写的包 都排除掉不打包
      return /^vue/.test(id) || /^@picasso-ui/.test(id);
    },
  };
});
```

> package.json

```json
  "build:esm": "rollup -c ./builds/rollup.config.js"
```

> 使用 docs/main.ts

```ts
import { createApp } from "vue";
import App from "./App.vue";

import Icon from "../lib/icon/index";
import Button from "../lib/button/index";

import "theme-chalk/src/index.scss";

//创建应用，使用组件
createApp(App).use(Icon).use(Button).mount("#app");
```

```
npm run build:esm
npm run website-dev
```

知识扩展：

Vue Template Explorer

vue2 地址路径：https://template-explorer.vuejs.org/#
vue3 地址路径：https://vue-next-template-explorer.netlify.app/#





checkbox-group每次状态发生变化都得调用

```ts
if (isGroup) {
  return checkboxGroup.changeEvent(val);
}
```
