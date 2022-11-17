/*
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-11-10 11:10:12
 * @LastEditors: 王星星
 * @LastEditTime: 2022-11-17 09:36:45
 * @FilePath: \vue3-ts-cms\src\service\login\types.ts
 * @Description:
 */
export interface IAccount {
  name: string
  password: string
}

export interface ILoginResult {
  id: number
  name: string
  token: string
}
