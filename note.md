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
npm install typescript -D 或yarn add typescript
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



```
yarn install
```

测试数据：

```
{
  "name": "picasso-ui",
  "version": "1.0.0",
  "description": "vue3组件库",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/lyxdream/picasso-ui.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/lyxdream/picasso-ui/issues"
  },
  "homepage": "https://github.com/lyxdream/picasso-ui#readme",
  "devDependencies": {
    "lerna": "^4.0.0"
  }
}

```
