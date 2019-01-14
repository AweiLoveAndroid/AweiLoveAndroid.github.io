module.exports = {
  title: "LZW的博客",
  description: "LZW的个人网站",
  base: "/vuepress_usage/", // 要部署到的网站基础路径

  // 额外的需要被注入到当前页面的 HTML <head> 中的标签时，配置该项
  // 这里是自定义的favicon
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  // host:"", // 主机名 默认0.0.0.0
  // post:"", // 端口号 默认8080

  // 指定 vuepress build 的输出目录,默认值: .vuepress/dist
  // 这里设置成public
  dest: "public",

  //////////  国际化 ///////////
  locales: {
    "/": {
      lang: "en-US",
      title: "LZW’s blog",
      description: "websie of LZW"
    },
    "/zh/": {
      lang: "zh-CN",
      title: "LZW的首个博客",
      description: "LZW的首个个人网站"
    }
  },

  //////////  主题信息 ///////////
  themeConfig: {
    //git 仓库地址
    repo: "https://github.ioAWeiLoveAndroid/MyDocs",
    // 是否编辑链接
    editLinks: true,
    // 编辑链接文字
    editLinkText: "在 GitHub 上编辑此页",

    // 导航栏
    nav: [
      // { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      {
        text: "编程语言",
        items: [{ text: "Java", link: "/" }, { text: "HTML", link: "/" }]
      },
      {
        text: "程序员",
        items: [
          {
            text: "移动端",
            items: [{ text: "Android", link: "/" }, { text: "iOS", link: "/" }]
          },
          {
            text: "服务端",
            items: [{ text: "Java", link: "/" }, { text: "PHP", link: "/" }]
          }
        ]
      }
    ],

    //// 侧边栏 ////

    // 显示所有页面的标题链接
    // displayAllHeaders: true,
    // 活动的标题链接
    // activeHeaderLinks: true,

    // 标题链接基本设置
    // sidebar: [
    //   // 'config',
    //   ['config','默认页'],
    //   ['/guide/', '标题2'],
    //   ['/guide/page1', 'page1'],
    //   ['/guide/page2', 'page2'],
    //   ['/guide/page3', 'page3'],
    //   ['/guide/page4', 'page4'],
    //   ['/guide/page5', 'page5'],
    //   ['/guide/page6', 'page6'],
    //   ['/guide/page7', 'page7'],
    //   ['/guide/page8', 'page8'],
    //   ['/guide/page9', 'page9'],
    //   ['/guide/page10', 'page10'],
    //   ['/guide/page11', 'page11'],
    //   ['/guide/page12', 'page12'],
    //   ['/guide/page13', 'page13'],
    //   ['/guide/page14', 'page14'],
    //   ['/guide/page15', 'page15'],
    //   // '/guide/page1',
    //   // '/guide/page2',
    //   // '/guide/page3',
    //   // '/guide/page4',
    //   // '/guide/page5',
    //   // '/guide/page6',
    //   // '/guide/page7',
    //   // '/guide/page8',
    //   // '/guide/page9',
    //   // '/guide/page10',
    //   // '/guide/page11',
    //   // '/guide/page12',
    //   // '/guide/page13',
    //   // '/guide/page14',
    //   // '/guide/page15',
    // ],

    // 侧边栏分组
    // slidebar: [
    //   {
    //     title: "目录",
    //     collapsable: false,
    //     children: [
    //       '/slidebar_group/',
    //     ]
    //   },
    //   {
    //     title: "第一章",
    //     collapsable: false,
    //     children: [
    //       '/slidebar_group/pageone/page1',
    //       '/slidebar_group/pageone/page2',
    //     ]
    //   },
    //   {
    //     title: "第二章",
    //     collapsable: false,
    //     children: [
    //       '/slidebar_group/pagetwo/page3',
    //       '/slidebar_group/pagetwo/page4',
    //     ]
    //   }
    // ],


    // 多个侧边栏
    slidebar: {
      '/guide/' :[   
        'page1',
        'page2',
        'page3',
        'page4',
        'page5',
        'page6',
        'page7',
        'page8',
        'page9',
        'page10',
        'page11',
        'page12',
        'page13',
        'page14',
        'page15'
      ],
      '/' :[ 
        'config'
      ],
    },



    // 嵌套的标题链接深度，默认的深度为1。
    // sidebarDepth: 6,

    //搜索
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated" // string | boolean
  }

  // 对markdown的配置
  // markdown: {
  //   // 显示行号
  //   lineNumbers: true,
  //   // markdown-it-anchor 的选项
  //   anchor: { permalink: true },
  //   // markdown-it-table-of-contents 的选项
  //   toc: { includeLevel: [3, 4] },
  //   config: md => {
  //     // 使用更多 markdown-it 插件！
  //     md.use(require("markdown-it-katex"));
  //     md.use(require("markdown-it-anchor"));
  //     md.use(require("markdown-it-table-of-contents"));
  //   }
  // }
};
