<template>
  <!-- <ElContainer > -->
  <!-- 导航条 -->
  <AgelNavTabs v-if="appStore.navTabs" v-model:tabs="navTabs" :route-path="route.path" home-path="/home"
    :is-background="appStore.navTabsIsBackground" more reload fixed @reload="refreshRouteView" @pathChange="pathChange">
    <template #menu>
      <div @click="fullScreen = true">
        <AgelIcon icon="FullScreen"></AgelIcon>
        <span>放大页面</span>
      </div>
    </template>
  </AgelNavTabs>
  <!-- 主界面 -->
  <ElMain class="flex flex-col flex-1 p-2 bg-gray-200 dark:bg-[var(--el-bg-color-page)] overflow-hidden">
    <div class="flex flex-col flex-1 bg-white dark:bg-[var(--el-bg-color)] overflow-hidden"
      :class="{ 'full-screen-view': fullScreen }">
      <RouterView v-slot="{ Component, route }">
        <transition appear name="el-fade-in-linear" mode="out-in">
          <KeepAlive :include="keepAliveNames">
            <component :is="Component" :key="routeKeyMap[route.path] || route.path" class="h-full relative p-[10px]" />
          </KeepAlive>
        </transition>
      </RouterView>
    </div>
  </ElMain>
  <!-- 页脚 -->
  <ElFooter v-if="appStore.footer" height="25px" class="border-t flex items-center justify-end">
    <span class="text-xs text-gray-500"> ag-admin copyright©{{ new Date().getFullYear() }}</span>
  </ElFooter>
  <!-- 缩小 -->
  <transition name="el-zoom-in-top">
    <div v-show="fullScreen" class="fixed top-2.5 right-2.5 text-gray-700 cursor-pointer z-20">
      <ElIcon :size="30" @click="fullScreen = false">
        <CircleCloseFilled />
      </ElIcon>
    </div>
  </transition>
  <!-- </ElContainer> -->
</template>

<script setup>
import { dynamicRoutes, homeRoute } from '@/router/routes'
import { ref, reactive, watch } from 'vue'
import { useStorage } from '@vueuse/core'
import useAppStore from '@/stores/useAppStore'
import useUserStore from '@/stores/useUserStore'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const homeTab = {
  path: homeRoute.path,
  title: homeRoute.meta.title,
  icon: homeRoute.meta.icon,
  fixed: true
}
const appStore = useAppStore()
const userStore = useUserStore()
const fullScreen = ref(false)
const navTabs = useStorage('AgelNavTabs', [homeTab], sessionStorage)
const keepAliveNames = getKeepAliveNames(dynamicRoutes)
const routeKeyMap = reactive({})

watch(
  () => route.path,
  () => {
    const index = navTabs.value.findIndex((item) => item.path === route.path)
    if (index == -1) {
      navTabs.value.push({
        path: route.path,
        icon: route.meta.icon,
        title: route.meta.title,
        fixed: false
      })
    }
  },
  { immediate: true }
)

// 监听退出登录，清空持久化缓存
watch(
  () => userStore.token,
  (newv) => {
    if (newv == '') {
      navTabs.value = [homeTab]
    }
  }
)

function pathChange(path) {
  router.push({ path })
}

function refreshRouteView({ path }) {
  routeKeyMap[path] = new Date().getTime()
}

function getKeepAliveNames(list, arr = []) {
  list.forEach((item) => {
    const name = item.name
    if (item.children && item.children.length > 0) {
      getKeepAliveNames(item.children, arr)
    } else if (item.meta && item.meta.keepAlive && arr.indexOf(name) === -1) {
      arr.push(name)
    }
  })
  return arr
}
</script>

<style scoped></style>
