/*
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-11-21 11:22:34
 * @LastEditors: 王星星
 * @LastEditTime: 2022-11-22 16:35:52
 * @FilePath: \vue3-ts-cms\src\hooks\use-page-modal.ts
 * @Description:
 */
import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallbackFn = (item?: any) => void

export function usePageModal(newCb?: CallbackFn, editCb?: CallbackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleNewData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    newCb && newCb()
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCb && editCb(item)
  }
  return [pageModalRef, defaultInfo, handleNewData, handleEditData]
}
