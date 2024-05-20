<template>
  <component :is="layouts[appStore.layout]"></component>
  <AppThemeDrawer />
</template>

<script setup lang="ts">
// 动态 index 布局组件
import AppThemeDrawer from '@/layouts/AppThemeDrawer/AppThemeDrawer.vue'
import ClassicsLayout from './ClassicsLayout.vue'
import HorizontalLayout from './HorizontalLayout.vue'
import VerticalLayout from './VerticalLayout.vue'
import useAppStore from '@/stores/useAppStore'

const layouts = {
  classics: ClassicsLayout,
  horizontal: HorizontalLayout,
  vertical: VerticalLayout
}

const appStore = useAppStore()
</script>

<style scoped>
:deep(.el-header) {
  padding: 0px 23px;
}
</style>
