/*
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-10-25 11:49:33
 * @LastEditors: 王星星
 * @LastEditTime: 2022-11-18 16:04:30
 * @FilePath: \vue3-ts-cms\src\global\register-element.ts
 * @Description:
 */

import { App } from 'vue'

import {
  ElAside,
  ElAvatar,
  ElButton,
  ElCheckbox,
  ElContainer,
  ElDatePicker,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElForm,
  ElFormItem,
  ElHeader,
  ElInput,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElOption,
  ElRadio,
  ElRow,
  ElCol,
  ElSelect,
  ElSubMenu,
  ElTabPane,
  ElTabs,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElIcon,
  ElImage
} from 'element-plus'

const components = [
  ElAside,
  ElAvatar,
  ElButton,
  ElCheckbox,
  ElContainer,
  ElDatePicker,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElForm,
  ElFormItem,
  ElHeader,
  ElInput,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElOption,
  ElRadio,
  ElRow,
  ElCol,
  ElSelect,
  ElSubMenu,
  ElTabPane,
  ElTabs,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,

  ElIcon,
  ElImage
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
