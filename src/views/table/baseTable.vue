<template>
  <div class="flex flex-col overflow-hidden">
    <!-- 查询 -->
    <ElForm ref="searchRef" v-show="search.show" :model="search.model" label-width="80px">
      <AgelFormGrid :items="search.items" responsive></AgelFormGrid>
      <div class="flex justify-center mb-3">
        <ElButton icon="RefreshRight" @click="() => searchRef?.resetFields()">重置</ElButton>
        <ElButton type="primary" icon="Search" @click="table.request">查询</ElButton>
      </div>
    </ElForm>
    <!-- 按钮条 -->
    <div class="table-bar flex justify-between items-center mb-3">
      <div>
        <ElButton icon="Plus" @click="form.toAdd">新增</ElButton>
        <ElButton icon="Delete">删除</ElButton>
      </div>
      <div>
        <ElButton icon="Refresh" round @click="table.request"></ElButton>
        <ElButton icon="Search" round @click="search.show = !search.show"></ElButton>
      </div>
    </div>
    <!-- 列表 -->
    <AgelTable class="flex-1" v-bind="table" v-model:page="table.page"> </AgelTable>
    <!-- 弹窗表单 -->
    <ElDialog v-model="form.show" :title="form.title" width="800px" top="10vh">
      <ElForm ref="formRef" :model="form.model" label-width="80px">
        <AgelFormDesc :items="form.items" :view-model="form.state == 'view'"></AgelFormDesc>
      </ElForm>
      <template #footer>
        <ElButton v-if="form.state !== 'view'" type="primary" @click="form.submit">提交</ElButton>
      </template>
    </ElDialog>
  </div>
</template>

<script lang="tsx" setup>
import { reactive, ref, nextTick } from 'vue'
import type { FormInstance } from 'element-plus'
import http from '@/api'

type Row = {
  name: string
  age: string
  email: string
  decs: string
  date: string
}

const searchRef = ref<FormInstance>()
const search = reactive({
  show: false,
  model: { name: '', age: '', email: '', date: '' },
  items: [
    { label: '姓名', prop: 'name' },
    { label: '年龄', prop: 'age' },
    { label: '邮件', prop: 'email' },
    {
      label: '出生日期',
      prop: 'date',
      slot: 'el-date-picker',
      attrs: { type: 'datetime' }
    }
  ]
})

const formRef = ref<FormInstance>()
const form = reactive({
  show: false,
  title: '',
  state: 'edit',
  model: { name: '', age: '', date: '', email: '', decs: '' },
  items: [
    { label: '姓名', prop: 'name', required: true },
    { label: '年龄', prop: 'age', required: true },
    { label: '出生日期', prop: 'date', slot: 'el-date-picker' },
    { label: '邮件', span: 3, prop: 'email' },
    {
      label: '介绍',
      prop: 'decs',
      span: 3,
      attrs: { type: 'textarea', rows: 5 }
    }
  ],
  toAdd: () => {
    form.show = true
    form.title = '新增用户'
    form.state = 'add'
    nextTick(() => {
      formRef.value?.resetFields()
    })
  },
  toEdit: (row: Row) => {
    form.show = true
    form.title = '编辑用户资料'
    form.state = 'edit'
    nextTick(() => {
      form.model = { ...row }
    })
  },
  toView: (row: Row) => {
    form.show = true
    form.title = '查看用户资料'
    form.state = 'view'
    nextTick(() => {
      form.model = { ...row }
    })
  },
  submit: () => {
    formRef.value?.validate().then(() => {
      form.show = false
      table.request()
    })
  }
})

const table = reactive({
  loading: false,
  border: true,
  data: [] as Row[],
  page: {
    sortOrder: null,
    sortProp: '',
    currentPage: 1,
    pageSize: 10,
    total: 0
  },
  columns: [
    { label: '#', type: 'selection' },
    { label: '姓名', prop: 'name', sortable: 'custom', width: 100 },
    { label: '年龄', prop: 'age', sortable: 'custom', width: 100 },
    { label: '邮件', prop: 'email', width: 250 },
    { label: '出生日期', prop: 'date', width: 150 },
    { label: '介绍', prop: 'decs', showOverflowTooltip: true },
    {
      width: '120px',
      label: '操作',
      fixed: 'right',
      slot: (scope: any) => {
        return (
          <div>
            <el-button link type="primary" onClick={() => form.toView(scope.row)}>
              查看{' '}
            </el-button>
            <el-divider direction="vertical" />
            <el-button link type="primary" onClick={() => form.toEdit(scope.row)}>
              {' '}
              编辑
            </el-button>
          </div>
        )
      }
    }
  ],
  request: () => {
    table.loading = true
    http.post('/mock/data', { size: table.page.pageSize }).then((res) => {
      table.data = res.data.list
      table.page.total = res.data.total
      table.loading = false
    })
  }
})

table.request()
</script>
