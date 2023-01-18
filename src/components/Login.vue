<style scoped>
#section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.login-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

input {
  padding: 0.5rem;
}
</style>

<template>
  <section id="section">
    <Modal :close="close" v-if="open" />
    <h1>Login</h1>
    <div style="color: red; font-weight: bold">{{ message }}</div>
    <form @submit="submit" class="login-form">
      <input type="text" placeholder="username" v-model="username" />
      <input type="password" placeholder="password" v-model="password" />
      <button type="submit">Login</button>
    </form>
    <button @click="show()">open modal</button>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { authStore } from "../stores/auth";
import Modal from "./Modal.vue";

const open = ref(false);
const username = ref("");
const password = ref("");
const message = ref("");
const router = useRouter();
const { setAuth } = authStore();

const show = () => {
  open.value = true;
};
const close = () => {
  open.value = false;
};

const submit = (e: Event) => {
  e.preventDefault();
  if (!username.value || !password.value) return;
  const p = password.value;
  if (p !== "123") {
    message.value = "wrong password";
    return;
  }
  localStorage.setItem("auth", "true");
  setAuth();
  router.replace("/");
  // localStorage.setItem("auth", username.value);
};
</script>
