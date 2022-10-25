/*
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-10-25 14:20:02
 * @LastEditors: 王星星
 * @LastEditTime: 2022-10-25 15:51:47
 * @FilePath: \vue3-ts-cms\src\service\request\type.ts
 * @Description:
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: any) => any
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors<T>
  showLoading?: boolean
}
