# frontend-framework
[![vue](https://img.shields.io/badge/vue-2.4.2-brightgreen.svg)](https://github.com/vuejs/vue)
[![element-ui](https://img.shields.io/badge/element--ui-1.4.2-brightgreen.svg)](https://github.com/ElemeFE/element)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/PanJiaChen/vue-element-admin/blob/master/LICENSE)
[![GitHub release](https://img.shields.io/badge/release-v1.0.0-blue.svg)]()

基于vue、element的后台管理项目模板
**注意：该项目目前使用element-ui@1.4.2版本，所以最低兼容 Vue 2.3.0**

**该项目不支持低版本游览器(如ie)，有需求请自行添加polyfill [详情](https://github.com/PanJiaChen/vue-element-admin/wiki#babel-polyfill)**

## 功能
- 登录/注销
- 权限验证
- 侧边栏
- 面包屑
- 富文本编辑器
- Markdown编辑器
- JSON编辑器
- 列表拖拽
- plitPane
- Dropzone
- Sticky
- CountTo
- echarts图表
- 401，404错误页面
- 错误日志
- 导出excel
- 前端可视化excel
- table example
- 动态table example
- 拖拽table example
- 内联编辑table example
- form example
- 多环境发布
- dashboard
- 二次登录
- 动态侧边栏（支持多级路由）
- mock数据
- cache tabs example
- screenfull
- markdown2html
- views-tab


## 开发
```bash
    # 克隆项目
    git clone https://github.com/PanJiaChen/vue-element-admin.git

    # 安装依赖
    npm install
    //or # 建议不要用cnpm  安装有各种诡异的bug 可以通过如下操作解决npm速度慢的问题
    npm install --registry=https://registry.npm.taobao.org

    # 本地开发 开启服务
    npm run dev
```
浏览器访问 http://localhost:8086

## 发布
```bash
    # 构建生成环境
    npm run build
```

## 目录结构
```shell
├── build                      // 构建相关  
├── config                     // 配置相关
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 主题 字体等静态资源
│   ├── components             // 全局公用组件
│   ├── directive              // 全局指令
│   ├── filtres                // 全局filter
│   ├── mock                   // mock数据
│   ├── router                 // 路由
│   ├── store                  // 全局store管理
│   ├── styles                 // 全局样式
│   ├── utils                  // 全局公用方法
│   ├── view                   // view
│   ├── App.vue                // 入口页面
│   └── main.js                // 入口 加载组件 初始化等
├── static                     // 第三方不打包资源
│   └── Tinymce                // 富文本
├── .babelrc                   // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
├── favicon.ico                // favicon图标
├── index.html                 // html模板
└── package.json               // package.json

```

## 参考
[PanJiaChen/vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

[herozhou/vue-framework-wz](https://github.com/herozhou/vue-framework-wz)

## License

MIT
