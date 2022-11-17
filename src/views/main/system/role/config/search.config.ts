/*
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-11-16 17:24:49
 * @LastEditors: 王星星
 * @LastEditTime: 2022-11-16 17:35:07
 * @FilePath: \finding_cms\src\views\main\system\role\config\search.config.ts
 * @Description:
 */
import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  labelWidth: '120px',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名称',
      placeholder: '请输入角色名称'
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限介绍',
      placeholder: '请输入权限介绍'
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
