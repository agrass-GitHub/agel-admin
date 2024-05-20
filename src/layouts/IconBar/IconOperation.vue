<template>
  <ElIcon :size="20" title="控制面板" @click="appStore.themeDrawer = !appStore.themeDrawer">
    <Operation />
  </ElIcon>
</template>

<script setup>
import useAppStore from '@/stores/useAppStore'
const appStore = useAppStore()
</script>

<style scoped></style>
