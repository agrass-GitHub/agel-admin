import { getLightColor, getDarkColor } from '@/utils/useColor'
import { useStorage } from '@vueuse/core'
import { watchEffect } from 'vue'



export default function useElTheme(option) {

  // 是否是黑暗模式
  const isDark = useStorage('isDark', option.isDark)
  const isGray = useStorage('isGray', option.isGray)
  const primaryColor = useStorage('primaryColor', option.primaryColor)

  watchEffect(() => {
    document.documentElement.setAttribute("class", isDark.value ? "dark" : '')
    document.body.setAttribute("style", isGray.value ? "filter: grayscale(1)" : '')
    switchElThemeColor(primaryColor.value, 'primary')
  })


  // 修改 elment 主题色
  function switchElThemeColor(color, type) {
    const levels = [3, 5, 7, 8, 9]
    document.documentElement.style.setProperty(`--el-color-${type}`, color)
    document.documentElement.style.setProperty(`--el-color-${type}-dark-2`, `${(isDark.value ? getLightColor : getDarkColor)(color, 0.2)}`)
    levels.forEach((v) => {
      document.documentElement.style.setProperty(
        `--el-color-${type}-light-${v}`,
        `${(isDark.value ? getDarkColor : getLightColor)(color, v / 10)}`
      )
    })
  }

  return { isDark, isGray, primaryColor }
}