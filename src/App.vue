<script setup lang="ts">
import { onBeforeMount } from "vue";
import { authStore } from "./stores/auth";
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

const { setAuth, logout } = authStore();

onBeforeMount(() => {
  const auth = localStorage.getItem("auth");
  if (auth) {
    if (auth === "true") {
      setAuth();
    }
  } else {
    logout();
  }
});
</script>

<template>
  <Navbar />
  <router-view></router-view>
</template>

<style scoped></style>
