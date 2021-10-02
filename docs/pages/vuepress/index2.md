# 配置

::: tip 提示
这些配置大部分是在config.js文件中。
1. config.js
2. styles文件夹。

:::

## 一、config.js文件 基本配置（13个）
### 八个
|配置|类型|默认值|作用|
|---|---|---|---|
|title|`string`|`undefined`|**网站的标题**，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。|
|description|`string`|`undefined`|**网站的描述**，它将会以`<meta>`标签渲染到当前页面的 HTML 中。|
|host|`string`|`0.0.0.0`|指定用于dev server的**主机名**。|
|port|number|`8080`|指定dev server的**端口**。|
|dest|`string`|`.vuepress/dist`|指定`vuepress build`的**输出目录**。如果传入的是相对路径，则会基于`process.cwd()`进行解析。|
|locales|`{ [path: string]: Object }`|`undefined`|提供**多语言**支持的语言配置。具体细节请查看 多语言支持。|
|shouldPrefetch|`Function`|`() => true`|一个函数，用来控制对于哪些文件，是需要生成 <link rel="prefetch"> 资源提示的。请参考 shouldPrefetch。|
|patterns|Array|`['**/*.md', '**/*.vue']`|Specify which pattern of files you want to be resolved.|



### base：部署站点的基础路径
类型: `string`<br>
默认值: `/`<br>
**部署站点的基础路径**，如果你想让你的网站部署到一个**子路径**下，你将需要设置它。

如 GitHub pages，如果你想将你的网站部署到`https://foo.github.io/bar/`，那么`base`应该被设置成`"/bar/"`，它的值应当总是以斜杠开始，并以斜杠结束。

`base`将会作为前缀自动地插入到所有以 `/` 开始的其他选项的链接中，所以你只需要指定一次。

参考:
Base URL
部署指南 > GitHub Pages


### head `<head>标签`
类型: `Array`<br>
默认值: `[]`<br>
额外的需要被注入到当前页面的 HTML`<head>`中的标签，每个标签都可以以 `[tagName, { attrName: attrValue }, innerHTML?]`的格式指定，举个例子，增加一个自定义的 `favicon：`
```js
module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ]
}
```

### temp 临时文件
Type: `string`<br>
Default: `/path/to/@vuepress/core/.temp`<br>
指定客户端文件的**临时目录**。


### cache 
类型: `boolean|string`<br>
默认值: `true`<br>
VuePress 默认使用了`cache-loader` (opens new window) 来大大地加快 webpack 的编译速度。

此选项可以用于指定 `cache`的路径，同时也可以通过设置为`false`来在每次构建之前删除`cache`。

::: tip 提示：这个选项也可以通过命令行来使用：
```sh
vuepress dev docs --cache .cache # 设置 cache 路径
vuepress dev docs --no-cache     # 在每次构建前删除 cache
```
:::


### extraWatchFiles：需要被监听的文件。
类型: `Array`<br>
默认值: `[]`<br>
指定额外的**需要被监听的文件**。

你可以监听任何想监听的文件，文件变动将会触发 vuepress 重新构建，并实时更新。
```js
module.exports = {
  extraWatchFiles: [
    '.vuepress/foo.js', // 使用相对路径
    '/path/to/bar.js'   // 使用绝对路径
  ]
}
```





## 二、Styling: 新文件夹styles
### 1. 文件 palette.styl
如果要对`默认预设` (opens new window)的样式进行简单的替换，或者定义一些变量供以后使用，你可以创建一个`.vuepress/styles/palette.styl`文件。

你可以调整的一些变量如下:
```stylus
// 颜色
$accentColor = #3eaf7c
$textColor = #2c3e50
$borderColor = #eaecef
$codeBgColor = #282c34
$arrowBgColor = #ccc
$badgeTipColor = #42b983
$badgeWarningColor = darken(#ffe564, 35%)
$badgeErrorColor = #DA5961

// 布局
$navbarHeight = 3.6rem
$sidebarWidth = 20rem
$contentWidth = 740px
$homePageWidth = 960px

// 响应式变化点
$MQNarrow = 959px
$MQMobile = 719px
$MQMobileNarrow = 419px
```

:::danger 警告
你应该只在这个文件中定义变量。

因为 palette.styl 将在根的 stylus 配置文件的末尾引入，作为配置，它将被多个文件使用，所以一旦你在这里写了样式，你的样式就会被多次复制。
:::


### 2. 文件 index.styl
VuePress 提供了一种添加额外样式的简便方法。你可以创建一个`.vuepress/styles/index.styl` 文件。这是一个 Stylus (opens new window) 文件，但你也可以使用正常的 CSS 语法。

```stylus
.content {
  font-size 30px
}
```
::: tip 注意
由于背后的行为，不论是在 `palette.styl`或是`index.styl`，都不能透过`@import / @require` (opens new window) 從相对路径引用一般的` .css`样式表。
:::



## 三、主题
### 1. theme
类型: `string`<br>
默认值: `undefined`<br>
当你使用**自定义主题**的时候，需要指定它。

参考：[使用主题](https://vuepress.vuejs.org/zh/theme/using-a-theme.html)

### 2. themeConfig
类型: `Object`<br>
默认值: `{}`<br>
为**当前的主题提供一些配置**，这些选项依赖于你正在使用的主题。

也可以参考：[默认主题](https://vuepress.vuejs.org/zh/theme/default-theme-config.html)。


## 四、Pluggable 插件
### plugins
类型: `Object|Array`<br>
默认值: `undefined`<br>
请参考 [plugin > Using a plugin](https://vuepress.vuejs.org/zh/plugin/using-a-plugin.html) 来使用一个插件。


## 五、MarkDown （9个）
::: tip 提示
这些配置都是在config.js文件中，对象markdown的属性：
```js{4}
module.exports = {
  themeConfig: {
  markdown: {
    lineNumbers: true,         // 显示代码的行号
    // extractHeaders: [ 'h2', 'h3', 'h4' ]
  }
  }
}
```
:::
### 六个属性

|属性|值的类型|默认值|作用|
|---|---|---|---|
|`lineNumbers`|`boolean`|`undefined`|是否在每个代码块的左侧**显示行号**。|
|`slugify`|`Function`|`suorce`|一个将标题文本转换为 slug 的函数。修改它会影响 标题、目录、以及侧边栏链接的 id 和 链接。|
|`pageSuffix`|`string`|`.html`|**页码后缀** Option to customize internal links to be compatible when using the vuepress-plugin-clean-urls (opens new window).|
|`toc`|`Object`|`{includeLevel:[2,3]}`|[markdown-it-table-of-contents](https://github.com/Oktavilla/markdown-it-table-of-contents)的选项。|

<br><br><br>

|属性|值的类型|默认值|作用|
|---|---|---|---|
|`externalLinks`|`Object`|`{target:'_blank',`<br>`rel:'noopener noreferrer'}`|这个键值对将会作为特性被增加到是外部链接的`<a>`标签上，默认的选项将会在**新窗口**中打开一个该外部链接。|
|`anchor`|`Object`|`{ permalink: true, permalinkBefore: true, permalinkSymbol: '#' }`||
[markdown-it-anchor](https://github.com/valeriangalliat/markdown-it-anchor) (opens new window) 的选项。


### .plugins  安装插件
你可以使用`markdown.plugins`来安装`markdown-it`插件。它的使用方法与安装一个VuePress插件类似。

你可以使用 Babel 语法或对象语法。markdown-it- 前缀同样是可以忽略的。
```js
module.exports = {
  markdown: {
    plugins: [
      '@org/foo', // 等价于 @org/markdown-it-foo，如果对应的包存在
      ['markdown-it-bar', {
        // 提供你的选项
      }]
    ]
  }
}
```
or
```js
module.exports = {
  markdown: {
    plugins: {
      '@org/foo': {}
      'markdown-it-bar': {
        // 提供你的选项
      }
    }
  }
}
```


### .extendMarkdown 修改默认配置
类型: `Function`<br>
默认值: `undefined`<br>
一个用于**修改当**前的 [markdown-it](https://github.com/markdown-it/markdown-it) 实例的**默认配置**，或者**应用额外的插件的函数**，举例如下：
```js
module.exports = {
  markdown: {
    extendMarkdown: md => {
      md.set({ breaks: true })
      md.use(require('markdown-it-xxx'))
    }
  }
}
```
::: tip 提示
这个选项也被 Plugin API 所支持。
:::


### .extractHeaders  侧边栏标签深度
类型: `Array`<br>
默认值: `['h2', 'h3']`<br>
Markdown 文件的 headers (标题 & 小标题) 会在准备阶段被提取出来，并存储在`this.$page.headers`中。默认情况下，VuePress 会提取`h2`和`h3`标题。你可以通过这个选项来修改提取出的标题级别。
```js
module.exports = {
  markdown: {
    extractHeaders: [ 'h2', 'h3', 'h4' ]
  }
}
```

## 六、构建流程（7个）
### stylus、scss、sass、less
|属性|值的类型|默认值|作用|
|---|---|---|---|
|`stylus`|`Object`|`{preferPathResolver: 'webpack'}`|stylus-loader的选项。|
|`scss`|`Object`|`{}`|加载`*.scss`文件的 sass-loader的选项。|
|`sass`|`Object`|`{indentedSyntax: true}`|加载`*.sass`文件的sass-loader的选项。|
|`less`|`Object`|`{}`|less-loader的选项。|


### postcss 
类型: `Object` <br>
默认值: `{ plugins: [require('autoprefixer')] }` <br>
`postcss-loader`的选项，请注意，指定这个值，**将会覆盖内置的`autoprefixer`**，所以你需要自己将它加进去。


### configureWebpack 修改Webpack配置
类型: `Object | Function` <br>
默认值: `undefined` <br>

用于修改内部的 Webpack 配置。 <br>
如果给定一个对象，那么它将会被`webpack-merge`合并到最终的配置中，如果给定一个函数，它将会接受`config`作为第一个参数，以及 `isServer` 作为第二个参数，你可以直接更改`config`，也可以返回一个待合并的对象。
```js
module.exports = {
  configureWebpack: (config, isServer) => {
    if (!isServer) {
      // 修改客户端的 webpack 配置
    }
  }
}
```

### chainWebpack  修改Webpack配置
类型: `Function` <br>
默认值: `undefined` <br>

通过`webpack-chain`来修改内部的 Webpack 配置。
``` js
module.exports = {
  chainWebpack: (config, isServer) => {
    // config 是 ChainableConfig 的一个实例
  }
}
```

## 七、浏览器兼容性
### evergreen
类型: `boolean | Function` <br>
默认值: `false`

如果你的对象只有那些 “常青树” 浏览器，你可以将其设置成`true`，这将会禁止 ESNext 到 ES5 的转译以及对 IE 的 polyfills，同时会带来更快的构建速度和更小的文件体积。