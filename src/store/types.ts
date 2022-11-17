/*
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-11-10 11:07:14
 * @LastEditors: 王星星
 * @LastEditTime: 2022-11-17 09:40:39
 * @FilePath: \vue3-ts-cms\src\store\types.ts
 * @Description:
 */
import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'

export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
