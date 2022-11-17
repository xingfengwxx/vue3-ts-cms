<!--
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-11-16 09:33:35
 * @LastEditors: 王星星
 * @LastEditTime: 2022-11-16 17:24:39
 * @FilePath: \finding_cms\src\views\main\system\role\role.vue
 * @Description:
-->
<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'role',
  components: {
    PageContent,
    PageSearch
  },
  setup() {
    return {
      searchFormConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
