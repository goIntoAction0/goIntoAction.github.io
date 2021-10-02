module.exports = {
  title: 'Blog',
  description: '描述：nice？还行吧！',
  searchMaxSuggestions: 10,                         // 搜索结果数量
  // base: '',   (部署到github时可能会使用)

//  主题配置
  themeConfig: {
    logo: '/assets/img/mulu.png',                    // 导航栏logo
    lastUpdated: '上次更新时间',                          // 最后更新时间:  string | boolean
    // navbar: false,   // 是否禁止所有页面使用导航栏
    // smoothScroll: true,  // 启用页面滚动效果

    // 侧边栏
    sidebar: 'auto',                                
    // sidebar: [],                                // 自动生成侧栏 值：可以是一个对象或者数组；可以有一个或多个侧边栏
    // 链接  
    displayAllHeaders: true,                       // 显示所有页面的标题链接   默认值：false
    activeHeaderLinks: true,                       // 活动的标题链接  默认值：true

    // 下一篇/上一篇 链接
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,


    nav: [                                           // 导航栏链接
      {
        text: "vuepress",
        items: [
          { text: 'vuepress-基础使用', link: '/pages/vuepress/index.md'},
          { text: 'vuepress-配置', link: '/pages/vuepress/index2.md'},
          { text: 'vuepress-默认主题配置', link: '/pages/vuepress/theme_config.md'},
          { text: 'markdown-相关', link: '/pages/vuepress/vuepress_markdown.md'},
        ]
      },
      { text: 'Git', link: '/pages/tools/git.html' },
      { text: 'MarkDown', link: '/pages/markDown/markdown-2.html' },
      { 
        text: 'VUE', 
        items: [
        { text: 'vue 基本语法', link: '/pages/vue/index.html' },

        ] 
      },
      { 
        text: '开发工具', 
        items: [
          { text: 'NPM', link: '/pages/tools/npm.html' },
          { text: 'Node', link: '/pages/tools/node.html' },
          { text: 'github', link: '/pages/tools/github.html' },
        ]
      },
      { 
        text: 'others', 
        // ariaLabel: '前端工具 Menu',  // 下拉并分组
        items: [
          { text: 'CodeSheep', link: '/pages/others/codesheep.html' },
          { text: '项目经验', link: '/pages/others/project.html' },
          { text: 'blog写什么', link: '/pages/others/why.html' },
          { text: '留言板', link: '/pages/others/write.html' },
        ]
      },
    ],

  },

  // MarkDown 配置
  markdown: {
    lineNumbers: true,                               // 显示代码的行号
    // extractHeaders: [ 'h2', 'h3', 'h4' ]
  }
}