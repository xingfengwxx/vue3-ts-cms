/*
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-11-22 11:29:09
 * @LastEditors: 王星星
 * @LastEditTime: 2022-11-22 11:31:34
 * @FilePath: \vue3-ts-cms\src\components\page-echarts\utils\convert-data.ts
 * @Description:
 */
import { coordinateData } from './coordinate-data'

export const convertData = function (data: any) {
  const res = []
  for (let i = 0; i < data.length; i++) {
    const geoCoord = coordinateData[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      })
    }
  }
  return res
}
