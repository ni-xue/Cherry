import { DefaultTheme } from 'vitepress'

// 中文导航
export const zhNav: DefaultTheme.NavItem[] = [
  { text: '主页', link: '/' },
      { text: '指南', link: '/group' },
      { text: '插件', link: '/group' },
      { text: '2.3.0', 
        items: [
          { text: "更新日志", link: "https://github.com/ni-xue/Cherry.Plugins" },
          { text: "参与贡献", link: "https://github.com/ni-xue/Cherry.Plugins" },
        ]
       }
]