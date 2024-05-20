<template>
  <ElPopover placement="bottom" :width="280" trigger="hover">
    <template #reference>
      <ElBadge is-dot class="mt-1.5">
        <ElIcon :size="20" title="提醒">
          <Bell />
        </ElIcon>
      </ElBadge>
    </template>
    <template #default>
      <div class="flex justify-between px-3 pb-2">
        <ElBadge :value="5">
          <span class="font-bold">提醒</span>
        </ElBadge>
        <span class="text-p cursor-pointer hover:text-gray-500">全部已读</span>
      </div>
      <div class="h-52 border-t">
        <ElScrollbar>
          <div v-for="item in 5" :key="item" class="py-2 px-2 flex items-center cursor-pointer">
            <ElAvatar
              :size="30"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            />
            <div class="flex-1 px-3 text-xs">你还有一段工作未处理...</div>
            <p class="w-10 text-xs text-right text-gray-400">一周前</p>
          </div>
        </ElScrollbar>
      </div>
      <div class="text-center text-p cursor-pointer border-t pt-2 hover:text-gray-500">
        查看所有通知
      </div>
    </template>
  </ElPopover>
</template>

<script setup></script>

<style scoped lang="scss"></style>
