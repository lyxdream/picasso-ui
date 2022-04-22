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
