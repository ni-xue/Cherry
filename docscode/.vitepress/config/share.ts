import { defineConfig } from 'vitepress'

export const sharedConfig = defineConfig({
  rewrites: { // 很重要，
    'zh/:rest*': ':rest*'
  },
  metaChunk: true,
  lang: 'zh-CN', // 语言
  title: "Cherry-Net",
  description: "开启全新的，远程体验，通讯体验",
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/cherry.png' }]
  ],
  themeConfig: {
    logo: '/cherry.png',
    search: {
      provider: 'local'
    },
  },
})