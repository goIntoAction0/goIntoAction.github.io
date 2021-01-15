module.exports = {
  base: '/xinBlog/',
  title: '阿星的个人博客！',
  description: '描述：nice！！！',
  searchMaxSuggestions: 10,                         // 搜索结果数量


//  主题配置
  themeConfig: {
    logo: '/assets/img/logo.png',                    // 导航栏logo
    lastUpdated: '更新时间',                          // 最后更新时间:  string | boolean
    
    nav: [                                           // 导航栏链接
      { 
        text: '前端工具', 
        // ariaLabel: '前端工具 Menu',
        items: [
          { text: 'git', link: '/tools/git.html' },
          { text: 'github', link: '/tools/github.html' },
          { text: 'MarkDown', link: '/tools/markdown.html' },
          { text: 'NPM', link: '/tools/npm.html' },
        ]
      },
      { text: 'vuepress', link: '/vuepress-config/config.html' },
      { text: 'CSS', link: '/css/css-1.html' },
      { text: 'JavaScript', link: '/js/' },
      { text: 'Vue', link: '/vue/vue-1.html' },
      { text: 'BUG-LOG', link: '/bug/bug-1.html' },
      { text: '项目', link: '/project/project.html' },
      // { text: '算法', link: '/project/project.html' },
    ],

    sidebar: 'auto',                                // 自动生成侧栏 值：可以是一个对象或者数组；可以有一个或多个侧边栏
    
    displayAllHeaders: true,                        // 显示所有页面的标题链接   默认值：false
    activeHeaderLinks: false,                       // 活动的标题链接  默认值：true
  },

  // MarkDown 配置
  markdown: {
    lineNumbers: true                               // 显示代码的行号
  }
}