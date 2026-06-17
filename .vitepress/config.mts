import { defineConfig } from 'vitepress'

// 侧边栏：按周组织
function weekSidebar(week: number, days: number, extra?: { text: string; link: string }[]) {
  const items = []
  for (let i = 1; i <= days; i++) {
    items.push({
      text: `第${i}天`,
      link: `/week-0${week}/day-0${i}`,
    })
  }
  if (extra) items.push(...extra)
  return items
}

export default defineConfig({
  title: '🏕️ 暑假AI探索营',
  description: '8周从零到AI自由创作 — 家长孩子都能用的系统学习方案',
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  themeConfig: {
    // 顶部导航
    nav: [
      { text: '总览', link: '/' },
      { text: '第1周', link: '/week-01/day-01' },
      { text: '第2周', link: '/week-02/day-01' },
      { text: '第3周', link: '/week-03/day-01' },
      { text: '第4周', link: '/week-04/day-01' },
      { text: '第5周', link: '/week-05/day-01' },
      { text: '第6周', link: '/week-06/day-01' },
      { text: '第7周', link: '/week-07/day-01' },
      { text: '第8周', link: '/week-08/day-01' },
    ],

    // 侧边栏
    sidebar: {
      '/week-01/': [
        { text: '第1周：AI能干什么', items: weekSidebar(1, 5, [{ text: '📋 本周总结', link: '/week-01/summary' }]) },
      ],
      '/week-02/': [
        { text: '第2周：学会和AI说话', items: weekSidebar(2, 5, [{ text: '📋 本周总结', link: '/week-02/summary' }]) },
      ],
      '/week-03/': [
        { text: '第3周：AI怎么学习', items: weekSidebar(3, 5, [{ text: '📋 本周总结', link: '/week-03/summary' }]) },
      ],
      '/week-04/': [
        { text: '第4周：AI的边界', items: weekSidebar(4, 5, [{ text: '📋 本周总结', link: '/week-04/summary' }]) },
      ],
      '/week-05/': [
        { text: '第5周：零代码搭建', items: weekSidebar(5, 5, [{ text: '📋 本周总结', link: '/week-05/summary' }]) },
      ],
      '/week-06/': [
        { text: '第6周：AI绘画深度', items: weekSidebar(6, 5, [{ text: '📋 本周总结', link: '/week-06/summary' }]) },
      ],
      '/week-07/': [
        { text: '第7周：综合项目', items: weekSidebar(7, 2, [
          { text: '第33-35天', link: '/week-07/day-03' },
          { text: '📋 本周总结', link: '/week-07/summary' },
        ]) },
      ],
      '/week-08/': [
        { text: '第8周：打磨与展示', items: weekSidebar(8, 4, [
          { text: '第39-40天', link: '/week-08/day-05' },
          { text: '📋 结业总结', link: '/week-08/graduation' },
        ]) },
      ],
    },

    // 搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索内容' },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '重置',
            backButtonTitle: '返回',
            noResultsText: '没有找到结果',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    // 文档页脚
    docFooter: {
      prev: '← 前一天',
      next: '下一天 →',
    },

    // 最后更新时间
    lastUpdated: { text: '最近更新' },

    // 大纲
    outline: {
      level: [2, 3],
      label: '本页目录',
    },

    // 社交链接（暂不放）
    socialLinks: [],

    // 编辑链接
    editLink: {
      pattern: '',
      text: '',
    },
  },

  // Markdown 配置
  markdown: {
    theme: { light: 'github-light', dark: 'github-dark' },
    lineNumbers: false,
  },

  // 构建输出目录
  outDir: '.vitepress/dist',

  // 基础路径（GitHub Pages 用）
  base: '/ai-camp/',
})
