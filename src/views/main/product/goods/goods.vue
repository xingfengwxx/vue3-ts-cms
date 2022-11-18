<!--
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-11-17 09:32:13
 * @LastEditors: 王星星
 * @LastEditTime: 2022-11-18 16:13:12
 * @FilePath: \vue3-ts-cms\src\views\main\product\goods\goods.vue
 * @Description:
-->
<template>
  <div class="goods">
    <page-content :contentTableConfig="contentTableConfig" pageName="goods">
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        ></el-image>
      </template>
      <template #oldPrice="scope">{{ '¥' + scope.row.oldPrice }}</template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/components/page-content'

import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'goods',
  components: {
    PageContent
  },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
