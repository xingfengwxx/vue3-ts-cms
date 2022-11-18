/*
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-11-17 17:06:37
 * @LastEditors: 王星星
 * @LastEditTime: 2022-11-17 17:10:18
 * @FilePath: \vue3-ts-cms\src\hooks\use-page-search.ts
 * @Description:
 */
import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }
  const handleQueryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }
  return [pageContentRef, handleResetClick, handleQueryClick]
}
