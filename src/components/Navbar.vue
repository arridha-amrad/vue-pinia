<style>
.routes {
  display: flex;
  gap: 1rem;
}
.nav-item {
  text-decoration: none;
  color: blue;
}
.active {
  position: relative;
}
.active::before {
  content: "";
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  right: 0;
  height: 3px;
  background-color: rgb(62, 229, 62);
}
</style>

<template>
  <nav class="routes">
    <router-link active-class="active" class="nav-item" to="/login"
      >Login</router-link
    >
    <router-link active-class="active" class="nav-item" to="/"
      >Counter</router-link
    >
    <router-link active-class="active" class="nav-item" to="/todos"
      >Todos</router-link
    >
    <button @click="loggingOut()" v-if="isAuthenticated">Logout</button>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";
import { authStore } from "../stores/auth";
import { storeToRefs } from "pinia";
const router = useRouter();
const auth = authStore();
const { isAuthenticated } = storeToRefs(auth);
const { logout } = auth;
const loggingOut = () => {
  logout();
  router.replace("/login");
};
</script>
