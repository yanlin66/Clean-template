# Seek博客2.0
中文名：Seek博客2.0

`Seek博客2.0版基于1.0版的升级版本，采用前后端分离的mvvm模式，结合最新的技术完成`
> 开发说明

#### 开发使用
> 下载或者克隆到本地 <br />
> npm run dev 启动应用
> npm run build 打包

#### 开发环境
> 后端接口使用PHP编写 <br />
> 前端技术栈采用Vue2+VueRouter+Webpack+Axios

#### 目录结构
>├── README.md----// 项目说明文档 <br />
 ├── node_modules----// 项目依赖包文件夹 <br />
 ├── build----// 编译配置文件，一般不用管 <br />
 │   ├── build.js <br />
 │   ├── check-versions.js <br />
 │   ├── dev-client.js <br />
 │   ├── dev-server.js <br />
 │   ├── utils.js <br />
 │   ├── vue-loader.conf.js <br />
 │   ├── webpack.base.conf.js <br />
 │   ├── webpack.dev.conf.js <br />
 │   └── webpack.prod.conf.js <br />
 ├── config----//项目基本设置文件夹 <br />
 │   ├── dev.env.js----// 开发配置文件 <br />
 │   ├── index.js----// 配置主文件 <br />
 │   └── prod.env.js----// 编译配置文件 <br />
 ├─── src----// 我们的项目的源码编写文件 <br />
 │   ├── App.vue  // APP入口文件<br />
 │   ├── api // 接口调用工具文件夹<br />
 │   │   └── index.js // 接口调用工具<br />
 │   ├── components // 组件文件夹，目前为空<br />
 │   ├── config // 项目配置文件夹<br />
 │   │   └── index.js // 项目配置文件<br />
 │   ├── frame  // 子路由文件夹<br />
 │   │   └── frame.vue // 默认子路由文件<br />
 │   ├── main.js // 项目配置文件<br />
 │   ├── page // 我们的页面组件文件夹<br />
 │   ├── router // 路由配置文件夹<br />
 │   │   └── index.js // 路由配置文件<br />
 │   ├── style // scss 样式存放目录<br />
 │   │   ├── base // 基础样式存放目录<br />
 │   │   │   ├── _base.scss// 基础样式文件<br />
 │   │   │   ├── _color.scss//项目颜色配置变量文件<br />
 │   │   │   ├── _mixin.scss// scss混入文件<br />
 │   │   │   └── _reset.scss//浏览器初始化文件<br />
 │   │   ├── scss // 页面样式文件夹<br />
 │   │   │   ├── _content.scss//内容页面样式文件<br />
 │   │   │   └── _index.scss// 列表样式文件<br />
 │   │   └── style.scss // 主样式文件<br />
 │   └── utils // 常用工具文件夹<br />
 │        └── index.js // 常用工具文件<br />
 ├── index.html----// 项目入口文件 <br />
 ├── package-lock.json----// npm5 新增文件，优化性能 <br />
 └── package.json----// 项目依赖包配置文件 <br />

#### 开发条件
> php环境 <br />
node7.0版本 <br />
vue2.0脚手架 <br />
Element UI <br />
Mysql数据库

#### 预览地址
[Seek博客](www.palpitation.shop "Seek博客")

#### 开发人员
> 自然是作者啦（~v~）
