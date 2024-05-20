<template>
  <ElIcon
    :size="20"
    class="cursor-pointer"
    :title="appStore.menuCollapse ? '打开菜单' : '收起菜单'"
    @click="appStore.menuCollapse = !appStore.menuCollapse"
  >
    <Expand v-if="appStore.menuCollapse" />
    <Fold v-else />
  </ElIcon>
</template>

<script setup>
import useAppStore from '@/stores/useAppStore'

const appStore = useAppStore()
</script>

<style scoped></style>
