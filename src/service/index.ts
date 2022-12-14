/*
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-10-25 14:17:17
 * @LastEditors: 王星星
 * @LastEditTime: 2022-11-18 14:37:11
 * @FilePath: \vue3-ts-cms\src\service\index.ts
 * @Description: service统一出口
 */
import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

import localCache from '@/utils/cache'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      // console.log('请求成功的拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      // console.log('请求失败的拦截')
      return Promise.reject(err)
    },
    responseInterceptor: (res) => {
      // console.log('响应成功的拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      // console.log('响应失败的拦截')
      return Promise.reject(err)
    }
  }
})

export default hyRequest
