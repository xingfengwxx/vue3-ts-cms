/*
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-10-24 15:41:23
 * @LastEditors: 王星星
 * @LastEditTime: 2022-11-18 17:01:04
 * @FilePath: \vue3-ts-cms\src\main.ts
 * @Description:
 */

import { createApp } from 'vue'
import { globalRegister } from './global'
import App from './App.vue'

import 'normalize.css'
import './assets/css/index.less'

// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'
import store from './store'
import { setupStore } from './store'

const app = createApp(App)

// 注册element-plus/其他，局部注册
app.use(globalRegister)
//全局注册
// app.use(ElementPlus)
setupStore()
app.use(store)
// path: /user => user
app.use(router)

app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)
