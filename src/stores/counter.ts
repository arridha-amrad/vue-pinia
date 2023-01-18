import { defineStore } from "pinia";

export const useCounterStore = defineStore("Counter", {
  state: () => ({
    count: 0,
  }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increase() {
      this.count++;
    },
    decrease() {
      this.count--;
    },
  },
});
