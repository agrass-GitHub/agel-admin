import { ElMessage } from 'element-plus'
import useUserStore from '@/stores/useUserStore'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_BASE_PATH),
  routes: routes
})

router.beforeEach((to) => {
  const whitlist = ['/login']
  const meta = to.meta
  const userStore = useUserStore()

  const isWhitlist = whitlist.includes(to.path)
  const hasRole = meta.roles ? meta.roles.includes(userStore.role) : true
  const hasToken = userStore.token !== ''

  if (!hasToken && !isWhitlist) {
    ElMessage.warning('请先登录后再操作')
    return '/login'
  }

  if (!hasRole) {
    return '/401'
  }

  return true
})

export default router
