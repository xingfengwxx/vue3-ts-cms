/*
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-10-24 15:41:23
 * @LastEditors: 王星星
 * @LastEditTime: 2022-10-25 16:00:03
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

import hyRequest from './service'

const app = createApp(App)

// 注册element-plus/其他
// app.use(globalRegister)
app.use(ElementPlus)
app.use(router)
app.use(store)

app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)

hyRequest.request({
  url: '/home/multidata',
  method: 'GET',
  headers: {},
  interceptors: {
    requestInterceptor: (config) => {
      console.log('单独请求的config')
      config.headers['token'] = '123'
      return config
    },
    responseInterceptor: (res) => {
      console.log('单独响应的response')
      return res
    }
  }
})

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

hyRequest
  .get<DataType>({
    url: '/home/multidata',
    showLoading: false
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })
