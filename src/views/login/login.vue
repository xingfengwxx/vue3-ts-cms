<!--
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-10-25 10:44:12
 * @LastEditors: 王星星
 * @LastEditTime: 2022-10-26 09:50:53
 * @FilePath: \vue3-ts-cms\src\views\login\login.vue
 * @Description:
-->
<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './cpns/login-panel.vue'

export default defineComponent({
  components: {
    LoginPanel
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
