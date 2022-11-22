/*
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-11-22 10:47:48
 * @LastEditors: 王星星
 * @LastEditTime: 2022-11-22 11:04:49
 * @FilePath: \vue3-ts-cms\src\base-ui\echart\src\hooks\useEchart.ts
 * @Description:
 */
import * as echarts from 'echarts'

import chinaMapData from '../data/china.json'

echarts.registerMap('china', chinaMapData)

export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el)

  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }

  const updateSize = () => {
    echartInstance.resize()
  }

  window.addEventListener('resize', () => {
    echartInstance.resize()
  })

  return {
    echartInstance,
    setOptions,
    updateSize
  }
}
