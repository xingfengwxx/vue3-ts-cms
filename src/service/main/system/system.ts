/*
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-11-16 09:33:35
 * @LastEditors: 王星星
 * @LastEditTime: 2022-11-16 17:00:55
 * @FilePath: \finding_cms\src\service\main\system\system.ts
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
