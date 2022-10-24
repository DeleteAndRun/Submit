/*
 * @Author: xyw
 * @Date: 2022-10-24 09:37:48
 * @LastEditors: xyw
 * @LastEditTime: 2022-10-24 09:41:32
 * @Description:
 * @FilePath: \submission\src\store\index.js
 */
import { defineStore } from "pinia";

export const mainStore = defineStore("main", {
  state: () => {
    return {
      year: "2022",
    };
  },
  getters: {
    selYear() {
      return this.year;
    },
  },
  actions: {
    async setYear(year) {
      this.year = year;
    },
  },
});
