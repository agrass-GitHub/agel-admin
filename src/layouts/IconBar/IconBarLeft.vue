<template>
  <div class="h-full flex items-center space-x-4">
    <IconCollapse></IconCollapse>
    <AppBreadcrumb v-if="appStore.breadcrumb"></AppBreadcrumb>
  </div>
</template>

<script setup lang='ts'>
import IconCollapse from './IconCollapse.vue'
import AppBreadcrumb from '../AppBreadcrumb/AppBreadcrumb.vue'
import useAppStore from '@/stores/useAppStore'

const appStore = useAppStore()
</script>

<style scoped >

</style>