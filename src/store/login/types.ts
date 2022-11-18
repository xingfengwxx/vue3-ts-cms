/*
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-11-10 11:09:51
 * @LastEditors: 王星星
 * @LastEditTime: 2022-11-17 17:28:36
 * @FilePath: \vue3-ts-cms\src\store\login\types.ts
 * @Description:
 */
export interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
  permissions: string[]
}
