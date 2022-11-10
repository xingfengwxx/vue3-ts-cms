/*
 * @Author: 王星星
 * @Email: 1099420259@qq.com
 * @Date: 2022-10-25 11:31:14
 * @LastEditors: 王星星
 * @LastEditTime: 2022-11-10 13:54:05
 * @FilePath: \vue3-ts-cms\src\store\index.ts
 * @Description:
 */

import { createStore } from 'vuex'

import login from './login/login'

import { IRootState } from './types'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'wxx',
      age: 18
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
