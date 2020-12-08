export default {
  pages: [
    'pages/index/index',
    'pages/wo/wo',
    'pages/wocollect/wocollect',
    'pages/subset/subset'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarTitleText: 'WeChat',
    navigationBarBackgroundColor: '#3A3A3E',
    navigationBarTextStyle: 'white',
  },
  tabBar: {
    list: [
      { text: '首页', iconPath: 'images/index1.png', selectedIconPath: 'images/index2.png', pagePath: 'pages/index/index' },
      { text: '我的', iconPath: 'images/wo1.png', selectedIconPath: 'images/wo2.png', pagePath: 'pages/wo/wo' }
    ]
  },
  "usingComponents": {},
  entryPagePath:"pages/subset/subset"
}
