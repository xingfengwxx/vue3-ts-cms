<!--
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-11-22 10:16:16
 * @LastEditors: 王星星
 * @LastEditTime: 2022-11-22 10:24:24
 * @FilePath: \vue3-ts-cms\src\base-ui\card\src\card.vue
 * @Description:
-->
<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ title }}</span>
      </div>
    </template>
    <div class="item">
      <slot></slot>
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
  props: {
    title: {
      type: String,
      default: 'Title'
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.box-card {
  &:deep(.el-card__header) {
    padding: 10px 20px !important;
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
}

.item {
  margin-bottom: 10px;
}
</style>
