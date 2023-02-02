import { ref, computed, readonly } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { dynamicRoutes,type MenuItem } from "@/router/routes"
import http from "@/api"


export default defineStore('userStore', () => {

  const userInfo = useStorage('userInfo', getInitUserInfo(), sessionStorage)

  const token = computed(() => {
    return userInfo.value.token
  })

  // 身份权限
  const role = computed(() => {
    return userInfo.value.role
  })

  // 菜单
  const menuData = computed(() => {
    return getMenuData(dynamicRoutes)
  })
  

  function getInitUserInfo() {
    return {
      name: "",
      id: "",
      portrait: "",
      token: "",
      role: "",
    }
  }

  function loginApp(data: { account: string | number, password: string | number }) {
    return http({
      url: "/mock/login",
      method: 'post',
      data: data
    }).then((res) => {
      userInfo.value = res.data
      return res.data
    })
  }

  function logoutApp() {
    return new Promise((reslove => {
      userInfo.value = getInitUserInfo()
      reslove(true)
    }))
  }

  function getMenuData(list: MenuItem[]) {
    return list.map(item => {
      const isShow = item.meta.hidden !== true
      const hasRole = item.meta.roles ? item.meta.roles.includes(role.value) : true
      const menuItem = {
        children: [] as any,
        title: item.meta.title,
        icon: item.meta.icon,
        index: item.path,
        hidden: !(isShow && hasRole)
      }
      if (item.children && item.children.length > 0) {
        menuItem.children = getMenuData(item.children)
      }
      return menuItem
    })
  }

  return {
    // 不能修改
    userInfo: readonly(userInfo),
    menuData,
    token,
    role,
    loginApp,
    logoutApp
  }
})

