# vue 基础

## 0、安装VUE
### 1. Vue兼容性
**Vue不支持IE8及以下版本**：因为Vue使用了IE8无法模拟的 ECMAScript 5特性。

但它支持所有兼容 ECMAScript 5 的浏览器。

### 2. Vue Devtools（开发工具）
在使用 Vue 时，推荐在**浏览器上安装 Vue Devtools**。就会有一个友好的界面中审查和调试 Vue 应用。

### 3. 使用vue的方法
#### 方法一：使用NPM安装
在用 Vue 构建大型应用时推荐使用 NPM 安装。原因有二：
>1. NPM 能很好地和诸如 webpack 或 Browserify 模块打包器配合使用。
>2. 同时 Vue 也提供配套工具来开发单文件组件。
```Shell
# 最新稳定版
$ npm install vue
```

#### 方法二：直接用`<script>`引入
接下载并用 `<script> `标签引入，Vue 会被注册为一个全局变量。
::: danger 警告：
在开发环境下不要使用压缩版本，不然你就失去了所有常见错误相关的警告!
:::

[**开发版本：**](https://cn.vuejs.org/js/vue.js) 包含完整的警告和调试模式

[**生产版本：**](https://cn.vuejs.org/js/vue.min.js) 删除了警告，33.46KB min+gzip

#### CDN

1. 对于制作原型或学习，你可以这样使用最新版本：
```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
```

2. 对于生产环境，我们推荐链接到一个明确的版本号和构建文件，以避免新版本造成的不可预期的破坏：
```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>
```
3. 如果你使用原生 ES Modules，这里也有一个兼容 ES Module 的构建文件：
```html
<script type="module">
  import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js'
</script>
```
你可以在 cdn.jsdelivr.net/npm/vue 浏览 NPM 包的源代码。

Vue 也可以在 unpkg 和 cdnjs 上获取 (cdnjs 的版本更新可能略滞后)。
::: tip 提示：
请确认了解不同构建版本，并在你发布的站点中**使用生产环境版本**，把 vue.js 换成 vue.min.js。

**原因是：** 这是一个更小的构建，可以带来比开发环境下更快的速度体验。
:::


### 4. 命令行工具
Vue 提供了一个官方的 CLI，为单页面应用 (SPA) 快速搭建繁杂的脚手架。它为现代前端工作流提供了开箱即用的构建设置。只需要几分钟的时间就可以运行起来并带有热重载、保存时 lint 校验，以及生产环境可用的构建版本。

更多详情可查阅 [Vue CLI](https://cli.vuejs.org/) 的文档。
::: tip
CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。

如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，在熟悉 Vue 本身之后再使用 CLI。
:::

安装：
```sh
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```
创建一个项目：
```sh
vue create my-project
# OR
vue ui
```

### 5. 术语
- **完整版**：同时包含**编译器**和**运行时**的版本。
- **编译器**：用来将模板字符串编译成为 JavaScript 渲染函数的代码。
- **运行时**：用来创建 Vue 实例、渲染并处理虚拟 DOM 等的代码。基本上就是除去编译器的其它一切。
- **UMD**：UMD 版本可以通过 `<script>` 标签直接用在浏览器中。jsDelivr CDN 的 https://cdn.jsdelivr.net/npm/vue@2.6.14 默认文件就是运行时 + 编译器的 UMD 版本 (vue.js)。
- **CommonJS**：CommonJS 版本用来配合老的打包工具比如 Browserify 或 webpack 1。这些打包工具的默认文件 (pkg.main) 是只包含运行时的 CommonJS 版本 (vue.runtime.common.js)。
- **ES Module**：从 2.6 开始 Vue 会提供两个 ES Modules (ESM) 构建文件：
  - 为打包工具提供的 ESM：为诸如 webpack 2 或 Rollup 提供的现代打包工具。ESM 格式被设计为可以被静态分析，所以打包工具可以利用这一点来进行“tree-shaking”并将用不到的代码排除出最终的包。为这些打包工具提供的默认文件 (pkg.module) 是只有运行时的 ES Module 构建 (vue.runtime.esm.js)。
  - 为浏览器提供的 ESM (2.6+)：用于在现代浏览器中通过`<script type="module">`直接导入。










## 1、模板语法
### 1. 插值
#### 1. 文本:语法 (双大括号) 的文本插值
```html
<span>Message: {{ msg }}</span>
```

#### 2. 使用script表达式
迄今为止，在我们的模板中，我们一直都只绑定简单的 property 键值。但实际上，对于所有的数据绑定，Vue.js 都提供了完全的 JavaScript 表达式支持。
```html
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div v-bind:id="'list-' + id"></div>
```
这些表达式会在所属 Vue 实例的数据作用域下作为 JavaScript 被解析。有个限制就是，每个绑定都只能包含**单个表达式**，所以下面的例子都不会生效。
```html
<!-- 这是语句，不是表达式 -->
{{ var a = 1 }}

<!-- 流控制也不会生效，请使用三元表达式 -->
{{ if (ok) { return message } }}
```
:::tip 提示：
1. 模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如`Math`和`Date`。
2. 你不应该在模板表达式中试图访问用户定义的全局变量。
:::


#### 3. Attribute:
Mustache 语法不能作用在HTML attribute上，遇到**这种情况应该使用`v-bind`指令**：
```html
<div v-bind:id="dynamicId"></div>
```
对于**布尔 attribute**(它们只要存在就意味着值为`true`)，`v-bind`工作起来略有不同，在这个例子中：
```html
<button v-bind:disabled="isButtonDisabled">Button</button>
```
如果`isButtonDisabled`的值是`null`、`undefined`或`false`，则`disabled attribute` 甚至不会被包含在渲染出来的`<button>`元素中。



#### 4. 原始HTML:(谨慎使用)
双大括号会将数据解释为普通文本，而非HTML代码。

为了输出真正的 HTML，你需要使用 v-html 指令：
```html{2}
<p>Using mustaches: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```
::: danger 警告：
1. 你的站点上动态渲染的任意 HTML 可能会非常危险，因为它很容易导致 XSS 攻击。
2. 请只对可信内容使用 HTML 插值，绝不要对用户提供的内容使用插值。
:::






### 2. 指令
#### 什么是指令：
1. 指令(Directives)是带有 v- 前缀的特殊 `attribute`。
2. 指令`attribute`的值预期是单个 JavaScript表达式 (v-for 是例外情况，稍后我们再讨论)。
2. 指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。

回顾我们在介绍中看到的例子：
```html
<p v-if="seen">现在你看到我了</p>
```
这里，`v-if`指令将根据表达式`seen`的值的真假，来插入或移除`<p>`元素。

#### 参数
一些指令能够接收一个“参数”，在指令名称之后以**冒号**表示。例如，**v-bind**指令可以用于响应式地更新**HTML attribute**：
```html
<a v-bind:href="url">...</a>
```
在这里`href`是参数，告知`v-bind`指令将该元素的`href` attribute 与表达式`url`的值绑定。
另一个例子是`v-on`指令，它用于监听 DOM 事件：
```html
<a v-on:click="doSomething">...</a>
```
在这里参数是监听的事件名。

#### 动态参数
::: tip 版本
2.6.0 新增   
:::
从 2.6.0 开始，可以用方括号括起来的 JavaScript 表达式作为一个指令的参数：
```html
<!--
注意，参数表达式的写法存在一些约束，如之后的“对动态参数表达式的约束”章节所述。
-->
<a v-bind:[attributeName]="url"> ... </a>
```
这里的 `attributeName` 会被作为一个 JavaScript 表达式进行动态求值，求得的值将会作为最终的参数来使用。

例如，如果你的 Vue 实例有一个 `data property attributeName`，其值为`"href"`，那么这个绑定将等价于`v-bind:href`。
同样地，你可以使用动态参数为一个动态的事件名绑定处理函数：
```html
<a v-on:[eventName]="doSomething"> ... </a>
```
在这个示例中，当 eventName 的值为`"focus"`时，`v-on:[eventName]`将等价于 `v-on:focus`。

::: tip 对动态参数的值的约束:
1. 动态参数预期会求出一个字符串，异常情况下值为 null。
1. 这个特殊的 null 值可以被显性地用于移除绑定。任何其它非字符串类型的值都将会触发一个警告。
:::

#### 对动态参数表达式的约束的变通办法是：
::: tip 对动态参数表达式的约束:
1. 不使用某些特殊字符。
1. 不使用空格和引号。
1. 避免使用大写字母。
:::
**动态参数表达式有一些语法约束**：因为某些字符，如空格和引号，放在 HTML attribute 名里是无效的。

例如：
```html
<!-- 这会触发一个编译警告 -->
<a v-bind:['foo' + bar]="value"> ... </a>
```
**变通的办法是**：使用**没有空格或引号**的表达式，或用**计算属性**替代这种复杂表达式。

在 DOM 中使用模板时 (直接在一个 HTML 文件里撰写模板)，还需要**避免使用大写字符**来命名键名，因为**浏览器会把 attribute 名全部强制转为小写**：
```html
<!--
在 DOM 中使用模板时这段代码会被转换为 `v-bind:[someattr]`。
除非在实例中有一个名为“someattr”的 property，否则代码不会工作。
-->
<a v-bind:[someAttr]="value"> ... </a>
```

#### 修饰符
修饰符 (modifier) 是以半角句号`.`指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。

例如，`.prevent`修饰符告诉`v-on`指令对于触发的事件调用`event.preventDefault()`：
```html
<form v-on:submit.prevent="onSubmit">...</form>
```
在接下来对`v-on`和`v-for`等功能的探索中，你会看到修饰符的其它例子。


### 3. 缩写
Vue 为`v-bind`和`v-on`这两个最常用的指令，提供了特定简写：

**v-bind 缩写**`:`
```html
<!-- 完整语法 -->
<a v-bind:href="url">...</a>

<!-- 缩写 -->
<a :href="url">...</a>

<!-- 动态参数的缩写 (2.6.0+) -->
<a :[key]="url"> ... </a>
```
**v-on 缩写** `@`
```html
<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>

<!-- 缩写 -->
<a @click="doSomething">...</a>

<!-- 动态参数的缩写 (2.6.0+) -->
<a @[event]="doSomething"> ... </a>
```
它们看起来可能与普通的 HTML 略有不同，但`:`与`@`对于`attribute`名来说都是**合法字符**，在所有支持 Vue 的浏览器都能被正确地解析。而且，它们不会出现在最终渲染的标记中。

缩写语法是完全可选的，但随着你更深入地了解它们的作用，你会庆幸拥有它们。



## 2、计算属性和侦听器

### 1. 计算属性




### 2. 侦听器








## 、样式绑定：class与 Style





## 、条件渲染 v-if=





## 、列表渲染 v-for=





## 、事件处理 v-on:事件名=





## 、表单输入绑定 v-model=




