/*
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-10-24 15:41:23
 * @LastEditors: 王星星
 * @LastEditTime: 2022-10-25 10:52:33
 * @FilePath: \vue3-ts-cms\src\main.ts
 * @Description:
 */

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

const app = createApp(App)

// 注册element-plus/其他
app.use(router)

app.mount('#app')
