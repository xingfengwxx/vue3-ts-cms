<!--
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-10-25 10:44:12
 * @LastEditors: 王星星
 * @LastEditTime: 2022-11-10 14:16:05
 * @FilePath: \vue3-ts-cms\src\views\main\main.vue
 * @Description:
-->
<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <nav-menu :collapse="isCollapse" />
      </el-aside>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const isCollapse = ref(false)
    return {
      isCollapse
    }
  }
})
</script>

<style scoped></style>
