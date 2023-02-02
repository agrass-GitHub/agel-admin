<template>
  <el-config-provider :locale="locale" :button="{ autoInsertSpace: true }" :size="appStore.componentSize"
    :experimental-features="{ ElementPlusCrx }">
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
import useAppStore from "@/stores/useAppStore"
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { computed } from "vue"

const appStore = useAppStore()

const locale = computed(() => {
  return { zhCn: zhCn, en: en }[appStore.language]
})

const ElementPlusCrx = {
  AgelFormItem: {
    AgelSelect: function (props: any) {
      return {
        placeholder: '请选择' + props.label,
      }
    },
    ElInput: function (props: any) {
      return {
        clearable: true,
        placeholder: '请输入' + props.label,
      }
    },
    ElDatePicker: function (props: any) {
      let valueFormat = 'yyyy-MM-dd'
      if (props.type == "datetime" || props.type == "datetimerange") {
        valueFormat = "yyyy-MM-dd HH:mm:ss"
      }
      if (props.type == "month" || props.type == "monthrange") {
        valueFormat = "yyyy-MM"
      }
      if (props.type == "year") {
        valueFormat = "yyyy"
      }
      return {
        valueFormat,
        placeholder: '请选择' + props.label,
      }
    }
  }
}
</script>

<style lang="scss">

</style>
