import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import useElTheme from '@/utils/useElTheme'

export default defineStore('appStore', () => {
  // 菜单是否展开
  const menuCollapse = ref(false)
  // 菜单宽度
  const slideMenuWidth = computed(() => menuCollapse.value ? '65px' : '220px')
  // 布局方式
  const layout = useStorage('layout', 'vertical')
  // 是否显示主题设置弹窗
  const themeDrawer = ref(false)
  // 是否显示面包屑
  const breadcrumb = ref(true)
  // 是否显示导航标签条
  const navTabs = ref(true)
  // 导航条风格
  const navTabsIsBackground = ref(false)
  // 是否显示页脚
  const footer = ref(true)
  // 组件大小
  const componentSize = "default"
  // 组件语言
  const language = "zhCn"
  // 主题
  const { isDark, isGray, primaryColor } = useElTheme({ isDark: false, isGray: false, primaryColor: '#2463eb' })

  return {
    menuCollapse,
    slideMenuWidth,
    layout,
    themeDrawer,
    navTabs,
    navTabsIsBackground,
    breadcrumb,
    footer,
    componentSize,
    isDark,
    isGray,
    primaryColor,
    language,
  }
})
