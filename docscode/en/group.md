<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/68054432?v=4',
    name: 'Nixue',
    title: '创建者',
    links: [
      { icon: 'gitee', link: 'https://gitee.com/ni-xue' },
      { icon: 'github', link: 'https://github.com/ni-xue'}
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/74097202?v=4',
    name: 'Baris',
    title: '前端',
    links: [
      { icon: 'gitee', link: 'https://gitee.com/arxb' },
      { icon: 'github', link: 'https://github.com/arxb233' }
    ]
  }
]
</script>

# 开发团队

欢迎加入我们的开发团队.....

<VPTeamMembers size="small" :members="members" />