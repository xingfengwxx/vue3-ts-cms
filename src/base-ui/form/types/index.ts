/*
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-11-16 09:33:35
 * @LastEditors: 王星星
 * @LastEditTime: 2022-11-21 13:43:44
 * @FilePath: \vue3-ts-cms\src\base-ui\form\types\index.ts
 * @Description:
 */
type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  // 针对select
  options?: any[]
  // 针对特殊的属性
  otherOptions?: any
  isHidden?: boolean
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemStyle?: any
}
