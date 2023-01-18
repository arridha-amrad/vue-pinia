import { defineStore } from "pinia";

export const authStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
    isOk: false,
  }),
  actions: {
    toggleIsOk() {
      this.isOk = !this.isOk;
    },
    setAuth() {
      this.isAuthenticated = true;
    },
    logout() {
      this.isAuthenticated = false;
      localStorage.removeItem("auth");
    },
  },
});
