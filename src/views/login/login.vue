<template>
  <div class="login-page h-full flex-center bg-gray-100 dark:bg-[var(--el-bg-color-page)]">
    <div
      class="border border-gray-200 w-96 p-10 shadow-blue-200 shadow-md bg-white rounded-md dark:bg-[var(--el-bg-color)] dark:shadow-blue-700 dark:border-blue-900">
      <div class="text-center text-2xl text-p mb-2">AG Admin</div>
      <div class="text-gray-400 text-sm text-center">vite + vue3 + vueUse + typescript + element plus + tailwindcss
      </div>
      <ElForm ref="elFormRef" :model="form.data" :rules="form.rules" class="mt-8" label-position="top">
        <ElFormItem prop="account">
          <ElInput v-model="form.data.account" placeholder="Please input account"
            @keydown="keydown($event as KeyboardEvent)"></ElInput>
        </ElFormItem>
        <ElFormItem prop="password">
          <ElInput v-model="form.data.password" placeholder="Please input password" type="password"
            @keydown="keydown($event as KeyboardEvent)"></ElInput>
        </ElFormItem>
      </ElForm>
      <div class="flex justify-center items-center mt-6">
        <ElButton :loading="form.loading" class="w-full" type="primary" @click="submit">Login</ElButton>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive, ref } from 'vue'
import useUserStore from "@/stores/useUserStore"
import { homeRoute } from "@/router/routes"
import { useRouter } from 'vue-router'
import { ElForm } from 'element-plus'

const form = reactive(({
  loading: false,
  data: {
    account: 'admin',
    password: '123456'
  },
  rules: {
    account: { required: true, message: 'Please input Activity account', trigger: 'blur', },
    password: { required: true, message: 'Please input Activity password', trigger: 'blur' }
  }
}))

const elFormRef = ref<InstanceType<typeof ElForm> | null>(null)
const userStore = useUserStore()
const router = useRouter()


function keydown(e: KeyboardEvent) {
  if (e.key === 'Enter') submit()
}

async function submit() {
  await elFormRef.value?.validate()
  form.loading = true
  userStore.loginApp(form.data).then(() => {
    router.push({ path: homeRoute.path })
  }).catch(() => {
    form.loading = false
  })

}
</script>

