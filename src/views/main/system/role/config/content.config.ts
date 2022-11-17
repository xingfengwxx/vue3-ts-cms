/*
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-11-16 17:24:49
 * @LastEditors: 王星星
 * @LastEditTime: 2022-11-16 17:34:49
 * @FilePath: \finding_cms\src\views\main\system\role\config\content.config.ts
 * @Description:
 */
export const contentTableConfig = {
  title: '用户列表',
  propList: [
    { prop: 'name', label: '角色名', minWidth: '100' },
    { prop: 'intro', label: '权限介绍', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
