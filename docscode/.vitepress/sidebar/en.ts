import { DefaultTheme } from 'vitepress'

const customSidebar = [
  {
    text: 'DOC',
    items: [
      { text: 'Markdown Examples', link: '/en/markdown-examples' },
      { text: 'Runtime API Examples', link: '/en/api-examples' },
      { text: 'group', link: '/en/group' },
    ]
  }
];
const finalSidebar = [
  ...customSidebar  // 自定义的 sidebar 配置
];
export const enSidebar: DefaultTheme.Sidebar = {
  '/en/': finalSidebar
}