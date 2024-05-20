<template>
  <ElContainer class="h-full overflow-hidden">
    <ElHeader height="45px" class="flex items-center justify-between border-b">
      <IconBarLeft></IconBarLeft>
      <IconBarRight></IconBarRight>
    </ElHeader>
    <ElContainer class="overflow-hidden">
      <ElAside :width="appStore.slideMenuWidth" class="overflow-hidden border-r">
        <ElScrollbar>
          <div
            class="border-b font-bold text-p whitespace-nowrap text-center h-[40px] leading-[40px]"
          >
            {{ appStore.menuCollapse ? 'Ag' : 'Ag Admin' }}
          </div>
          <AgelMenu
            :menus="userStore.menuData"
            router
            :collapse="appStore.menuCollapse"
            :collapse-transition="false"
            class="border-r-0"
          >
          </AgelMenu>
        </ElScrollbar>
      </ElAside>
      <ElContainer direction="vertical">
        <AppMain></AppMain>
      </ElContainer>
    </ElContainer>
  </ElContainer>
</template>

<script setup>
// 经典 index 布局组件
import IconBarLeft from '@/layouts/IconBar/IconBarLeft.vue'
import IconBarRight from '@/layouts/IconBar/IconBarRight.vue'
import AppMain from '@/layouts/AppMain/AppMain.vue'
import useAppStore from '@/stores/useAppStore'
import useUserStore from '@/stores/useUserStore'

const appStore = useAppStore()
const userStore = useUserStore()
</script>

<style scoped></style>
