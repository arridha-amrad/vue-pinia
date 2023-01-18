<template>
  <h1>Todo Detail</h1>
  <br />
  <div>
    <h3>id : {{ todo?.id }}</h3>
    <h2>{{ todo?.title }}</h2>
    <p>status : {{ todo?.isDone ? "complete" : "working..." }}</p>
  </div>
  <br />
  <Modal :close="close" v-if="isOpen" />
  <button @click="show()">Open modal</button>
  <div class="dummyHighContainer"></div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useTodoStore } from "../stores/todos";
import Modal from "./Modal.vue";
import { ref } from "vue";
const isOpen = ref(false);

const show = () => (isOpen.value = true);
const close = () => (isOpen.value = false);

const router = useRouter();
const store = useTodoStore();
const todoId = router.currentRoute.value.params.id;
const todo = store.todos.find((todo) => todo.id === todoId);
</script>

<style>
.dummyHighContainer {
  height: 200vh;
}
</style>
