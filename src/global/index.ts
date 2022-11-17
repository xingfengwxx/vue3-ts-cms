/*
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-10-25 11:49:18
 * @LastEditors: 王星星
 * @LastEditTime: 2022-11-17 10:24:17
 * @FilePath: \vue3-ts-cms\src\global\index.ts
 * @Description:
 */

import { App } from 'vue'
import registerElement from './register-element'
import registerElementIcons from './register-element-icons'
import registerProperties from './register-properties'

export function globalRegister(app: App): void {
  app.use(registerElement)
  app.use(registerElementIcons)
  app.use(registerProperties)
}
