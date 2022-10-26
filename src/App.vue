<!--
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-10-24 15:41:23
 * @LastEditors: 王星星
 * @LastEditTime: 2022-10-26 10:19:11
 * @FilePath: \vue3-ts-cms\src\App.vue
 * @Description:
-->
<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  props: {
    name: {
      type: String
    }
  }
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
