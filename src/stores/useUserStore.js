import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { dynamicRoutes } from "@/router/routes"
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

  function loginApp(data) {
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

  function getMenuData(list) {
    return list.map(item => {
      const isShow = item.meta.hidden !== true
      const hasRole = item.meta.roles ? item.meta.roles.includes(role.value) : true
      const menuItem = {
        children: [],
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
    userInfo: userInfo,
    menuData,
    token,
    role,
    loginApp,
    logoutApp
  }
})
