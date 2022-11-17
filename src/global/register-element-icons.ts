/*
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-11-17 09:54:57
 * @LastEditors: 王星星
 * @LastEditTime: 2022-11-17 09:55:05
 * @FilePath: \vue3-ts-cms\src\global\register-element-icons.ts
 * @Description:
 */
import { App } from 'vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default function (app: App): void {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
