
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
