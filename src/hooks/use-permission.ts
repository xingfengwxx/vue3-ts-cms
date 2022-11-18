/*
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-11-17 17:20:12
 * @LastEditors: 王星星
 * @LastEditTime: 2022-11-18 13:55:01
 * @FilePath: \vue3-ts-cms\src\hooks\use-permission.ts
 * @Description:
 */
import { useStore } from '@/store'

export function usePermission(pageName: string, handleName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `system:${pageName}:${handleName}`
  return !!permissions.find((item) => item === verifyPermission)
}
