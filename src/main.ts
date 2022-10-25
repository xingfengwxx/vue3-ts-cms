/*
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-10-24 15:41:23
 * @LastEditors: 王星星
 * @LastEditTime: 2022-10-25 14:00:15
 * @FilePath: \vue3-ts-cms\src\main.ts
 * @Description:
 */

import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css'
import './assets/css/index.less'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'
import store from './store'
const app = createApp(App)

// 注册element-plus/其他
// app.use(globalRegister)
app.use(ElementPlus)
app.use(router)
app.use(store)

app.mount('#app')
