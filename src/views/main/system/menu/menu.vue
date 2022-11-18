<!--
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-11-17 09:32:13
 * @LastEditors: 王星星
 * @LastEditTime: 2022-11-18 15:39:46
 * @FilePath: \vue3-ts-cms\src\views\main\system\menu\menu.vue
 * @Description:
-->
<template>
  <div class="menu">
    <page-content :contentTableConfig="contentTableConfig" pageName="menu">
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/components/page-content'

import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'hy-menu',
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
