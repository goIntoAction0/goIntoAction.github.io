module.exports = {
  // base: "/xin-blog/",
  title: '阿星的个人博客！',
  description: 'Just playing around',
  // theme: 'xxx',
  themeConfig: {
    logo: '/assets/img/logo.png',                    // 导航栏logo
    nav: [                                           // 导航栏链接
      { text: 'HTML', link: '/html/' },
      { text: 'CSS', link: '/css/css-1.html' },
      { text: 'JavaScript', link: '/js/' },
      { text: 'Vue', link: '/vue/html-1.html' },
      { text: '前端工具', link: '/vue/' },
      { text: 'DOM', link: '/' },
    ],
    sidebar: 'auto',                                // 自动生成侧栏 值：可以是一个对象或者数组；可以有一个或多个侧边栏
    displayAllHeaders: true,                        // 显示所有页面的标题链接   默认值：false
    activeHeaderLinks: false,                       // 活动的标题链接  默认值：true
  }
}