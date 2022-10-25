/*
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-10-25 11:49:18
 * @LastEditors: 王星星
 * @LastEditTime: 2022-10-25 13:49:15
 * @FilePath: \vue3-ts-cms\src\global\index.ts
 * @Description:
 */

import { App } from 'vue'
import registerElement from './register-element'

export function globalRegister(app: App): void {
  app.use(registerElement)
}
