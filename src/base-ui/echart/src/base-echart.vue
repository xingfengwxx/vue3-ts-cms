<!--
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-11-22 10:42:29
 * @LastEditors: 王星星
 * @LastEditTime: 2022-11-22 11:14:11
 * @FilePath: \vue3-ts-cms\src\base-ui\echart\src\base-echart.vue
 * @Description:
-->
<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue'
import { EChartsOption } from 'echarts'
import useEchart from '../hooks/useEchart'

const props = withDefaults(
  defineProps<{
    options: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)

const echartDivRef = ref<HTMLElement>()

onMounted(() => {
  const { setOptions } = useEchart(echartDivRef.value!)

  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<style scoped></style>
