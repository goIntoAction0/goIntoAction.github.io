# markdown相关
## 一、markdown拓展
### 1. leader anchors
所有的标题将会自动地应用`anchor`链接，`anchor`的渲染可以通过`markdown.anchor`来配置。


### 2. 链接
#### 2.1 内部链接
网站内部的链接，将会被转换成 `<router-link>` 用于 SPA 导航。

同时，站内的每一个文件夹下的 `README.md` 或者 `index.md`文件都会被自动编译为 `index.html`，对应的链接将被视为 `/`。

以如下的文件结构为例：
```
.
├─ README.md
├─ foo
│  ├─ README.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ README.md
   ├─ three.md
   └─ four.md
```
假设你现在在 `foo/one.md` 中：
```md
[Home](/) <!-- 跳转到根部的 README.md -->
[foo](/foo/) <!-- 跳转到 foo 文件夹的 index.html -->
[foo heading](./#heading) <!-- 跳转到 foo/index.html 的特定标题位置 -->
[bar - three](../bar/three.md) <!-- 具体文件可以使用 .md 结尾（推荐） -->
[bar - four](../bar/four.html) <!-- 也可以用 .html -->
```
#### 2.2 链接的重定向
VuePress 支持重定向到干净链接。如果一个链接 `/foo` 找不到，VuePress 会自行寻找一个可用的 `/foo/` 或 `/foo.html`。

反过来，当 `/foo/` 或 `/foo.html` 中的一个找不到时，VuePress 也会尝试寻找另一个。

借助这种特性，我们可以通过官方插件 [vuepress-plugin-clean-urls](https://vuepress.github.io/plugins/clean-urls/) (opens new window) 定制你的网站路径。

::: tip 注意:
1. 无论是否使用了 `permalink` 和 `clean-urls` 插件，你的相对路径都应该依赖于当前的文件结构来定义。
2. 在上面的例子中，即使你将 `/foo/one.md` 的路径设为了 `/foo/one/`，你依然应该通过 `./two.md` 来访问 `/foo/two.md`。
:::

#### 2.3 Page Suffix
Pages and internal links get generated with the .html suffix by default.

You can customize this by setting config.markdown.pageSuffix.

#### 2.4 外部链接
外部的链接将会被自动地设置为 `target="_blank" rel="noopener noreferrer"`:
- [vuejs.org](https://vuejs.org/) 
- [VuePress on GitHub](https://github.com/vuejs/vuepress) 

你可以自定义通过配置 `config.markdown.externalLinks` 来自定义外部链接的特性。


### 3. Front matte
VuePress 提供了对 [YAML front matter](https://jekyllrb.com/docs/frontmatter/) 开箱即用的支持:
```yaml
---
title: Blogging Like a Hacker
lang: en-US
---
```
这些数据可以在当前 markdown 的正文，或者是任意的自定义或主题组件中使用。

想了解更多，请移步 [Front Matter](https://vuepress.vuejs.org/zh/guide/frontmatter.html)。

#



### 4. GitHub风格的表格




### 5. Emoji



### 6. 目录
输入
```
[[toc]]
```
目录（Table of Contents）的渲染可以通过 `markdown.toc` 选项来配置。



### 7. 自定义容器
#### 输入
```md
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::
```

#### 输出
::: tip 提示
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

#### 可以自定义块中的标题：
```md
::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
\```js
console.log('你好，VuePress！')
console.log('你好，VuePress！')
console.log('你好，VuePress！')
console.log('你好，VuePress！')
\```
:::
```
可以自定义块中的标题：

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
console.log('你好，VuePress！')
console.log('你好，VuePress！')
console.log('你好，VuePress！')
```
:::
参考：[vuepress-plugin-container](https://vuepress.github.io/plugins/container/)



### 8. 代码块中的语法高
在 Prism 的网站上查看 [合法的语言列表](https://prismjs.com/#languages-list)


### 9. 行号
可以通过配置来为每个代码块显示行号：
```js
module.exports = {
  markdown: {
    lineNumbers: true
  }
}
```


### 10. 代码块中的行高亮
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
除了单行以外，你也可指定多行，行数区间，或是两者都指定。

- 行数区间: 例如 `{5-8}`, `{3-10}`, `{10-17}`
- 多个单行: 例如 `{4,7,9}`
- 行数区间与多个单行: 例如 `{4,7-13,16,23-27,40}`
#### 输入
![图片](/assets/img/markdown_1.png)
#### 输出
``` js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VuePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```


### 11. 导入代码段
(有些复杂，感觉不太会用到，所以暂时没有弄进来。)[详情](https://vuepress.vuejs.org/zh/guide/markdown.html#导入代码段)


### 12. 进阶配置
VuePress 使用`markdown-it`来渲染 Markdown，上述大多数的拓展也都是**通过自定义的插件**实现的。

想要进一步的话，你可以通过 `.vuepress/config.js` 的 markdown 选项，来对当前的 `markdown-it` 实例做一些自定义的配置：
```js
module.exports = {
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it-xxx'))
    }
  }
}
```


## 二、在markdown中使用vue
### 1. 浏览器的AP访问限制
当你在开发一个 VuePress 应用时，由于所有的页面在生成静态 HTML 时都需要通过 Node.js 服务端渲染，因此所有的 Vue 相关代码都应当遵循 [编写通用代码]()的要求。

简而言之，请确保只在 `beforeMount` 或者 `mounted` 访问浏览器 `/ DOM` 的 `API`。

如果你正在使用，或者需要展示一个对于 SSR 不怎么友好的组件（比如包含了自定义指令），你可以将它们包裹在内置的 `<ClientOnly>`组件中：
```md
<ClientOnly>
  <NonSSRFriendlyComponent/>
</ClientOnly>
```
请注意，这并不能解决一些组件或库在导入时就试图访问浏览器 API 的问题 —— 如果需要使用这样的组件或库，你需要在合适的生命周期钩子中动态导入它们：
```vue
<script>
export default {
  mounted () {
    import('./lib-that-access-window-on-import').then(module => {
      // use code
    })
  }
}
</script>
```
如果你的模块通过 export default 导出一个 Vue 组件，那么你可以动态注册它：
```vue
<template>
  <component v-if="dynamicComponent" :is="dynamicComponent"></component>
</template>
<script>
export default {
  data() {
    return {
      dynamicComponent: null
    }
  },
  mounted () {
    import('./lib-that-access-window-on-import').then(module => {
      this.dynamicComponent = module.default
    })
  }
}
</script>
```
参考:
- Vue.js > 动态组件 (opens new window)




### 2. 模板语法
#### 插值
每一个 Markdown 文件将首先被编译成 HTML，接着作为一个 Vue 组件传入 vue-loader，这意味着你可以在文本中使用 Vue 风格的插值：
##### 输入：
```md
{{ 1 + 1 }}
```
##### 输出
```
2
```

#### 指令
同样地，也可以使用指令:
##### 输入
```md
<span v-for="i in 3">{{ i }} </span>
```

##### 输出
```
1 2 3 
```

#### 访问网站以及页面的数据
编译后的组件没有私有数据，但可以访问 网站的元数据，举例来说：

##### 输入

```md
{{ $page }}
```

##### 输出
```json
{
  "path": "/using-vue.html",
  "title": "Using Vue in Markdown",
  "frontmatter": {}
}
```

### 3. Escaping(内联代码中，显示原始大括号)
默认情况下，块级 (block) 的代码块将会被自动包裹在 v-pre 中。

如果你想要在内联 (inline) 的代码块或者普通文本中**显示原始的大括号**，或者一些 Vue 特定的语法，你需要使用自定义容器 v-pre 来包裹：
##### 输入
```md
::: v-pre
`{{ This will be displayed as-is }}`
:::
```

##### 输出
::: v-pre
`{{ This will be displayed as-is }}`
:::






### 4. 使用组件
所有在 `.vuepress/components` 中找到的 `*.vue` 文件将会自动地被注册为全局的异步组件，如：
```
.
└─ .vuepress
   └─ components
      ├─ demo-1.vue
      ├─ OtherComponent.vue
      └─ Foo
         └─ Bar.vue
```
你可以**直接使用这些组件**在**任意的Markdown文件中**（组件名是通过文件名取到的）：
```md
<demo-1/>
<OtherComponent/>
<Foo-Bar/>
```
::: warning 重要！
请确保一个自定义组件的名字包含连接符或者是 PascalCase，否则，它将会被视为一个内联元素，并被包裹在一个`<p>` 标签中，这将会导致 HTML 渲染紊乱，因为 HTML 标准规定，`<p>`标签中不允许放置任何块级元素。
:::

#### 在标题中使用组件
被`<code>`包装的 HTML 将按原样显示，只有未被包装的 HTML 才会被 Vue 解析。
::: tip 提示
- 输出的 HTML 由 markdown-it (opens new window) 完成。
- 而解析后的标题由 VuePress 完成，用于侧边栏以及文档的标题。
:::


### 5. 使用预处理器
VuePress 对以下预处理器已经内置相关的 webpack 配置：`sass`、`scss`、`less`、`stylus` 和 `pug`。
要使用它们你只需要在项目中安装对应的依赖即可。

#### 例1，要使用 sass，需要安装：
```sh
yarn add -D sass-loader node-sass
```

然后你就可以在 Markdown 或是组件中使用如下代码：
```vue
<style lang="sass">
  .title
    font-size: 20px
</style>
```
#### 例2，要是用`pug`，需要安装：
要在组件中使用 `<template lang="pug">`，则需要安装 `pug` 和 `pug-plain-loader`:
```sh
yarn add -D pug pug-plain-loader
```
::: tip 提示
- 需要指出的是，如果你是一个 `stylus` 用户，你并不需要在你的项目中安装 `stylus` 和 `stylus-loader`，因为 VuePress 已经内置了它们。
- 对于那些没有内置的预处理器，除了安装对应的依赖，你还需要 拓展内部的 Webpack 配置。
:::




### 6. 脚本和样式提升
如果只想在**当前页面应用一些 JavaScript 或者 CSS**，在这种情况下，你可以直接在 Markdown 文件中使用原生的 `<script>`或者 `<style>` 标签，它们将会从编译后的 HTML 文件中提取出来，并作为生成的 Vue 单文件组件的 `<script>` 和 `<style>` 标签。



### 7. 内置的组件
#### OutboundLink
用来表明当前是一个外部链接。在 VuePress 中这个组件会紧跟在每一个外部链接后面。

#### ClientOnly
参考 浏览器的 API 访问限制。

#### Content
- Props:
  - `pageKey` - string, 要渲染的 page 的 hash key, 默认值是当前页面的 key.
  - `slotKey` - string, 页面的 markdown slot 的 key. 默认值是 `default slot`.
- Usage：

指定一个指定页面的特定 slot 用于渲染，当你使用 自定义布局 或者自定义主题时，这将非常有用。
```
<Content/>
```
参考:

- 全局计算属性 > $page
- Markdown 插槽
- 开发主题 > 获取渲染内容

#### Badge
- Props:

  - `text` - string
  - `type` - string, 可选值： `"tip"|"warning"|"error"`，默认值是： `"tip"`
  - `vertical` - string, 可选值： `"top"|"middle"`，默认值是： `"top"`
Usage:

你可以在标题中，使用这个组件来为某些 API 添加一些状态：
```md
### Badge <Badge text="beta" type="warning"/> <Badge text="默认主题"/>
```
参考:
- 在标题中使用组件

<br><br><br>

## 三、markdown插槽
VuePress 实现了一套针对 Markdown 的内容分发 API。

通过这个特性，你可以将你的文档分割成多个片段，以便于在布局组件中灵活组合。
::: warning 自述
1. 还没有搞清楚，插槽写在哪里，在哪里使用，使用场景。
:::

### 1. 为什么需要 Markdown插槽
首先，我们回顾一下布局组件和 Markdown 文件之间的关系：
![slot](/assets/img/markdown_slot.png)
<!-- Markdown File 1
Markdown File 2
Layout Component
Markdown File 3
Provider
Consumer -->
Markdown 文件是**元数据**（页面内容、配置等）的提供者，而布局组件负责消费他们。

我们可以通过 frontmatter 来定义一些普通数据类型的**元数据**，但对于 Markdown / HTML 这种涉及到编译前后差异的**复杂元数据**，frontmatter 却无能能力。

**Markdown插槽**便解决了这一类问题。



### 2. 具名插槽
你可以通过下述的语法来定义一个具名 Markdown 插槽：
```md
::: slot name

:::
```

在布局组件中利用 `Content` 组件来使用该插槽：
```vue
<Content slot-key="name"/>
```

::: tip 提示
这里我们使用的是 `slot-key` 而不是 `slot`，这是因为在 Vue 中，`slot` 是一个保留的 `prop` 名。
:::




### 3. 插槽的默认內容
默认情况下，一个 Markdown 文件中的普通内容将会成为 Markdown 插槽的默认内容，你可以直接使用`Content`组件来访问它：
```vue
<Content/>
```


### 4. 例子
假设你的布局组件如下：
```vue
<template>
  <div class="container">
    <header>
      <Content slot-key="header"/>
    </header>
    <main>
      <Content/>
    </main>
    <footer>
      <Content slot-key="footer"/>
    </footer>
  </div>
</template>
```
如果一个页面的 markdown 的内容是这样：
```md
::: slot header
# Here might be a page title
:::

- A Paragraph
- Another Paragraph

::: slot footer
Here's some contact info
:::
```
那么这一页最终被渲染出的 HTML 将会是：
```html
<div class="container">
  <header>
    <div class="content header">
      <h1>Here might be a page title</h1>
    </div>
  </header>
  <main>
    <div class="content default">
      <ul>
        <li>A Paragraph</li>
        <li>Another Paragraph</li>
      </ul>
    </div>
  </main>
  <footer>
    <div class="content footer">
      <p>Here's some contact info</p>
    </div>
  </footer>
</div>
```
请注意：
1. 和 Vue 本身提供的 `slot` 机制不太相同，每个 `Content` 分发的内容都会被一个 `div` 所包裹，其 `class` 是 `content` 和 `slot` 的名字。
2. 请确保所定义的 `slot` 的唯一性。