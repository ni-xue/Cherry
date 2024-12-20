import { enNav } from '../navbar'
import { enSidebar } from '../sidebar'
import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    logo: '/cherry.png',
    search: {
      provider: 'local'
    },
    nav: enNav,
    sidebar: enSidebar,
    socialLinks: [
      { icon: 'gitee', link: 'https://gitee.com/ni-xue/Cherry.Plugins' },
      { icon: 'github', link: 'https://github.com/ni-xue/Cherry.Plugins' }
    ],
    footer: {
      message: 'P2P转发映射工具',
      copyright: 'Copyright © 2024-Cherry nixue || Baris',
    },
  },
}