<template>
  <el-config-provider
    :locale="locale"
    :button="{ autoInsertSpace: true }"
    :size="appStore.componentSize"
    :experimental-features="{ ElementPlusCrx }"
  >
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
import useAppStore from '@/stores/useAppStore'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { computed } from 'vue'
import { type ElementPlusCrxConfig } from 'element-plus-crx'

const appStore = useAppStore()

const locale = computed(() => {
  return { zhCn: zhCn, en: en }[appStore.language]
})

const ElementPlusCrx: ElementPlusCrxConfig = {
  AgelTable: {
    ElTable: {
      highlightCurrentRow: true
    },
    ElTableColumn: {
      showOverflowTooltip: true
    }
  },
  AgelFormItem: {
    AgelSelect: function (props: any) {
      return {
        placeholder: '请选择' + props.label
      }
    },
    ElInput: function (props: any) {
      return {
        clearable: true,
        placeholder: '请输入' + props.label
      }
    },
    ElDatePicker: function (props: any) {
      let valueFormat = 'YYYY-MM-DD'
      let dateType = props?.attrs?.type
      if (dateType == 'datetime' || dateType == 'datetimerange') {
        valueFormat = 'YYYY-MM-DD HH:mm:ss'
      }
      if (dateType == 'month' || dateType == 'monthrange') {
        valueFormat = 'YYYY-MM'
      }
      if (dateType == 'year') {
        valueFormat = 'YYYY'
      }
      return {
        valueFormat,
        placeholder: '请选择' + props.label
      }
    }
  }
}
</script>

<style lang="scss"></style>
