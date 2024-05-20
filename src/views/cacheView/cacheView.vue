<template>
  <div>
    <h2>带有缓存的页面，输入 input value 进行测试</h2>
    <ElInput v-model="value" />
  </div>
</template>

<script setup>
const value = ref('')
</script>
