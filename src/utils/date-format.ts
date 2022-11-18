/*
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-11-17 10:23:56
 * @LastEditors: 王星星
 * @LastEditTime: 2022-11-18 15:27:10
 * @FilePath: \vue3-ts-cms\src\utils\date-format.ts
 * @Description:
 */
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function formatUtcString(
  utcString: string,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs.utc(utcString).format(format)
}
