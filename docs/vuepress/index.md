# vuepress基础

## 一、快速上手
### 1. 在本地启动服务器
```sh
yarn docs:dev # npm run docs:dev
```
### 2. 接下来：
>1. 现在，你应该已经有了一个简单可用的 VuePress 文档。接下来，了解一下推荐的 [目录结构]() 和 VuePress 中的 [基本配置]()。
>1. 等你了解完上文介绍的基础概念，再去学习一下如何使用 [静态资源]()，[Markdown拓展]() 和 在 [Markdown中使用Vue]() 来丰富你的文档内容。
>1. 当你的文档逐渐成型的时候，不要忘记 [VuePress的多语言支持]() 并了解一下如何将你的[文档 部署到 任意静态文件服务器]()上。


## 二、目录结构
![mulu](/assets/img/mulu.png)

:::tip
提示：
1. 接下来所有的操作都在docs文件中。
2. 并且绝大多数都在docs文件夹中隐藏文件（.vuepress）中。
:::

```js
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json

```

- `docs/.vuepress`: 用于存放全局的配置、组件、静态资源等。
  - `docs/.vuepress/components`: 该目录中的 Vue 组件将会被自动注册为全局组件。
  - `docs/.vuepress/theme`: 用于存放本地主题。
  - `docs/.vuepress/styles`: 用于存放样式相关的文件。
    - `docs/.vuepress/styles/index.styl`: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
    - `docs/.vuepress/styles/palette.styl`: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
  - `docs/.vuepress/public`: 静态资源目录。
  - `docs/.vuepress/templates`: 存储 HTML 模板文件。
    - `docs/.vuepress/templates/dev.html`: 用于开发环境的 HTML 模板文件。
    - `docs/.vuepress/templates/ssr.html`: 构建时基于 Vue SSR 的 HTML 模板文件。
  - `docs/.vuepress/config.js`: 配置文件的入口文件，也可以是 YML 或 toml。
  - `docs/.vuepress/enhanceApp.js`: 客户端应用的增强。



## 三、基本配置
### 1. 基本配置
VuePress 内置了基于 headers 的搜索 —— 它会自动为所有页面的标题、h2 和 h3 构建起一个简单的搜索索引。

一个 VuePress 网站必要的配置文件是 .vuepress/config.js，它应该导出一个 JavaScript 对象：
```js
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around'
}
```
参见 [配置](https://vuepress.vuejs.org/zh/config/#基本配置) 来查看所有可配置的选项。

:::tip
其他配置格式:
1. YAML (.vuepress/config.yml) 
2. TOML (.vuepress/config.toml) 
3. 现在用的是config.js。也就是js格式的配置文件。
- 你也可以使用 YAML (.vuepress/config.yml) 或是 TOML (.vuepress/config.toml) 格式的配置文件。
:::
### 2. 主题配置
1. 一个 VuePress 主题应该负责整个网站的布局和交互细节。在 VuePress 中，目前自带了一个默认的主题（正是你现在所看到的），它是**为技术文档而设计**的。

2. 同时，默认主题提供了一些选项，让你可以去自定义**导航栏**（navbar）、 **侧边栏**（sidebar）和 **首页**（homepage） 等，详情请参见 **默认主题** 。

3. 如果你想开发一个自定义主题，可以参考**自定义主题**。



### 3. 应用级别配置
由于 VuePress 是一个标准的 Vue 应用，你可以通过创建一个 .vuepress/enhanceApp.js 文件来做一些应用级别的配置，当该文件存在的时候，会被导入到应用内部。

enhanceApp.js 应该 export default 一个钩子函数，并接受一个包含了一些应用级别属性的对象作为参数。

你可以使用这个钩子来安装一些附加的 Vue 插件、注册全局组件，或者增加额外的路由钩子等：
```js
// 使用异步函数也是可以的
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  // ...做一些其他的应用级别的优化
}
```

## 四、静态资源
### 1、相对路径
### 2、公共文件
有时，你可能需要提供一个静态资源，但是它们并不直接被你的任何一个 markdown 文件或者主题组件引用。 

举例来说，favicons 和 PWA 的图标，在这种情形下，你可以将它们放在 .vuepress/public 中， 它们最终会被复制到生成的静态文件夹中。
### 3、基础路径

**如果你的网站会被部署到一个非根路径**，你将需要在 .vuepress/config.js 中设置 base，举例来说，如果你打算将你的网站部署到 https://foo.github.io/bar/，那么 base 的值就应该被设置为 "/bar/" (应当总是以斜杠开始，并以斜杠结束)。

有了基础路径（Base URL），如果你希望引用一张放在 .vuepress/public 中的图片，你需要使用这样路径：/bar/image.png，然而，一旦某一天你决定去修改 base，这样的路径引用将会显得**异常脆弱**。

**为了解决这个问题**，VuePress 提供了内置的一个 helper $withBase（它被注入到了 Vue 的原型上），可以帮助你生成正确的路径：
```vue
<img :src="$withBase('/foo.png')" alt="foo">
```
值得一提的是，你不仅可以在你的 Vue 组件中使用上述的语法，在 Markdown 文件中亦是如此。

最后补充一句，**一个 base 路径一旦被设置，它将会自动地作为前缀插入到 .vuepress/config.js 中所有以 / 开始的资源路径中。**











:::tip
提示：
:::

::: warning
警告：
:::

::: danger
警告：
:::

::: details
详情：
:::