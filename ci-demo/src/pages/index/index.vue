<template>
  <view>
    <Table :data-source="dataSource">
      <TableColumn title="Id" data-index="id" />
      <TableColumn title="Time" data-index="time" />
    </Table>
  </view>
</template>

<script setup>
import { computed } from 'vue'
import { Table, TableColumn, Balloon } from '@tarojs/components'
import './index.less'

const dataSource = computed(() => {
  const result = []
  for (let i = 0; i < 5; i++) {
    result.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
      },
      id: 100306660940 + i,
      time: 2000 + i
    })
  }
  return result
})

</script>
