<template>
  <ElBreadcrumb separator-icon="ArrowRight">
    <TransitionGroup name="breadcrumb" >
      <ElBreadcrumbItem v-for="item in list" :key="item.path" :to="(item.to as string)">
        <div class="flex items-center space-x-1">
          <ElIcon v-if="item.icon">
            <component :is="item.icon"></component>
          </ElIcon>
          <span>{{ item.title }}</span>
        </div>
      </ElBreadcrumbItem>
    </TransitionGroup>
  </ElBreadcrumb>
</template>

<script setup lang='ts'>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const list = computed(() => {
  return route.matched.filter(v => v.meta && v.meta.title).map(v => {
    return {
      path: v.path,
      title: v.meta.title,
      icon: v.meta.icon,
      to: v.redirect
    }
  })
})
</script>

<style scoped >
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.3s ease;
}

.breadcrumb-enter-from,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(10px);
}

.breadcrumb-leave-active {
  position: absolute;
  z-index: -1;
}
</style>