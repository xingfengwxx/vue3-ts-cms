/*
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-11-16 09:33:35
 * @LastEditors: 王星星
 * @LastEditTime: 2022-11-21 10:18:17
 * @FilePath: \vue3-ts-cms\src\service\main\system\system.ts
 * @Description:
 */
import hyRequest from '../../index'

import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return hyRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

// url: /users/id
export function deletePageData(url: string) {
  return hyRequest.delete<IDataType>({
    url: url
  })
}

export function createPageData(url: string, newData: any) {
  return hyRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return hyRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
