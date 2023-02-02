<template>
  <ElIcon :size="18" @click="toggle" :title="isFullscreen ? '退出全屏' : '开启全屏'">
    <FullScreen />
  </ElIcon>
</template>

<script setup lang='ts'>
import { useFullscreen } from '@vueuse/core'

const { isFullscreen, toggle } = useFullscreen()
</script>

<style scoped >

</style>