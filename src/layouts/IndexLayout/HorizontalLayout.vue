<template>
  <ElContainer class="h-full overflow-hidden">
    <ElHeader height="45px" class="border-b flex items-center justify-between ">
      <div class="border py-1 px-2 bg-p text-white rounded-lg whitespace-nowrap">Ag Admin</div>
      <AgelMenu :menus="userStore.menuData" router mode="horizontal" class="border-b-0 h-[45px] flex-1 overflow-hidden">
      </AgelMenu>
      <IconBarRight></IconBarRight>
    </ElHeader>
    <ElContainer class="overflow-hidden flex-col">
      <AppMain></AppMain>
    </ElContainer>
  </ElContainer>
</template>

<script setup lang='ts'>
// 横向 index 布局组件
import IconBarRight from "@/layouts/IconBar/IconBarRight.vue"
import AppMain from '@/layouts/AppMain/AppMain.vue'
import useUserStore from '@/stores/useUserStore'

const userStore = useUserStore()
</script>

<style scoped lang='scss'>

</style>