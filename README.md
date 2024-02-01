# monorepo-crm
## 依赖安装

根目录下添加依赖，使用-w，例如添加 moment 依赖

```js
pnpm install moment -w
```

子项目下添加依赖，使用--filter，例如在 main 项目中添加 @mono-crm/utils 依赖

```js
pnpm i @mono-crm/utils --filter main
```
## 微服务

主应用：main

子应用：ahri、ashe

公共包：packages

采用的 umi-max 的微前端框架

## 问题记录
1. 打开子应用，按照路由配置路径打开页面加载不出子应用，需要在路径前加个/${package.json#name}  
添加shouldNotModifyDefaultBase 是用来控制独立开发时 base 是否自动添加 /${package.json#name}

