<template>
  <ElDropdown>
    <div class="flex items-center space-x-2" title="用户">
      <ElAvatar v-if="userStore.userInfo.portrait" :size="30" :src="userStore.userInfo.portrait" />
      <ElIcon v-else :size="20">
        <Avatar />
      </ElIcon>
      <span>{{ userStore.userInfo.name }}</span>
      <ElIcon>
        <ArrowDown />
      </ElIcon>
    </div>
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem icon="Postcard">个人资料</ElDropdownItem>
        <ElDropdownItem icon="SetUp">系统设置</ElDropdownItem>
        <ElDropdownItem divided icon="SwitchButton" @click="logoutApp">退出登录</ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>

<script setup lang='ts'>
import useUserStore from "@/stores/useUserStore"
import { useRouter } from "vue-router"
const userStore = useUserStore()
const router = useRouter()

function logoutApp() {
  userStore.logoutApp().then(() => {
    router.push({ path: '/login' })
  })
}
</script>

<style scoped lang='scss'>

</style>