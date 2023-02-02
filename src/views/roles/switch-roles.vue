<template>
  <div>
    <ElButton type="primary" @click="loginAdmin">切换到管理员</ElButton>
    <ElButton type="primary" @click="loginUser">切换到用户</ElButton>
  </div>
</template>

<script setup lang='ts'>
import useUserStore from '@/stores/useUserStore'
import { ElMessage } from 'element-plus'
const userStore = useUserStore()

function loginAdmin() {
  userStore.loginApp({
    account: 'admin',
    password: "123456"
  }).then(() => {
    ElMessage.success('切换管理员角色成功')
  })
}

function loginUser() {
  userStore.loginApp({
    account: 'user',
    password: "123456"
  }).then(() => {
    ElMessage.success('切换用户角色成功')
  })
}

</script>

<style scoped>

</style>