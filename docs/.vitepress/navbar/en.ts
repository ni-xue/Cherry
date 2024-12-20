import { DefaultTheme } from 'vitepress'

// 英文导航
export const enNav: DefaultTheme.NavItem[] = [
  { text: 'Home', link: '/en/' },
  { text: 'Doc', link: '/en/markdown-examples' },
  { text: 'Plun', link: '/en/markdown-examples' },
  { text: '2.3.0', 
    items: [
      { text: "Update Log", link: "https://github.com/ni-xue/Cherry.Plugins" },
      { text: "Issues", link: "https://github.com/ni-xue/Cherry.Plugins" },
    ]
   }
  
]