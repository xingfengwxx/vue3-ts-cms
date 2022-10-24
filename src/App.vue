<!--
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-10-24 15:41:23
 * @LastEditors: 王星星
 * @LastEditTime: 2022-10-24 15:50:03
 * @FilePath: \vue3-ts-cms\src\App.vue
 * @Description:
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
