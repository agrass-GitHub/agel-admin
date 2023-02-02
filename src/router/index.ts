import { ElMessage } from 'element-plus';
import useUserStore from '@/stores/useUserStore'
import { createRouter, createWebHistory } from 'vue-router'
import type { MenuMeta } from "./routes"
import routes from "./routes"

const router = createRouter({
  history: createWebHistory('/agel-admin/'),
  routes: routes
})


router.beforeEach((to,) => {
  const whitlist = ['/login']
  const meta = to.meta as MenuMeta
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
