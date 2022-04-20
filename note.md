# 从零搭建Vue3.0组件

## 一.组件库初始化

### 1.monorepo项目初始化

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
    "packages": [
        "packages/*"
    ],
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
    "workspaces": [
        "packages/*"
    ],
    "devDependencies": {
        "lerna": "^3.22.1"
    }
}
```
### 2.初始化组件

