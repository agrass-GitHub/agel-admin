<template>
  <div class="p-0">
    <iframe :src="link" frameborder="0" style="width: 100%; height: 100%"></iframe>
    <ElTooltip content="在浏览器新标签页中打开">
      <div
        class="absolute bottom-3 right-3 z-10 cursor-pointer rounded-full bg-gray-200 w-10 h-10 flex-center shadow-lg text-black hover:text-[var(--el-color-primary)]"
        @click="toNewTab"
      >
        <ElIcon size="30"><ChromeFilled /></ElIcon>
      </div>
    </ElTooltip>
  </div>
</template>

<script setup>
/** iframe 页面暂不可通过 keepalive 进行缓存 */
import { useRoute } from 'vue-router'

const route = useRoute()
const link = route.meta.link

function toNewTab() {
  window.open(link, '_blank')
}
</script>

<style scoped></style>
