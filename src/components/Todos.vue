<style>
.todo {
  padding: 0.5rem;
  background-color: #ddd;
  width: fit-content;
  cursor: pointer;
}

#todos {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.todos {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>

<template>
  <section id="todos">
    <h1>Todos</h1>
    <br />
    <form @submit="submit">
      <input type="text" placeholder="title" v-model="title" />
      <button type="submit">{{ btnLabel }}</button>
      <button v-if="isEdited" @click="cancelEdit">X</button>
    </form>
    <ul class="todos">
      <li
        class="todo"
        :key="todo.id"
        @click="router.push(`/todos/${todo.id}`)"
        v-for="todo in store.todos"
      >
        <div @click="(e) => e.stopPropagation()">
          <button @click="toggleIsEdited(todo)">update todo</button>
          <button @click="store.updateDone(todo.id)">toggle done</button>
          <button @click="store.deleteTodo(todo.id)">del</button>
        </div>
        <p>{{ todo.title }} --- {{ todo.isDone ? "done" : "not-done" }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { Todo, useTodoStore } from "../stores/todos";
import { useRouter } from "vue-router";
import { authStore } from "../stores/auth";

const store = useTodoStore();
const userStore = authStore();
console.log("isAuthenticated : ", userStore.isAuthenticated);

const title = ref("");
const isEdited = ref(false);
const btnLabel = computed(() => (isEdited.value ? "Update" : "Add"));
const selectedTodo = ref<Todo | null>(null);

const router = useRouter();

const cancelEdit = () => {
  isEdited.value = false;
  title.value = "";
};

const toggleIsEdited = (todo: Todo) => {
  isEdited.value = true;
  title.value = todo.title;
  selectedTodo.value = todo;
};

const submit = (e: Event) => {
  e.preventDefault();
  if (isEdited.value) {
    if (selectedTodo.value) {
      store.updateTodo({
        id: selectedTodo.value.id,
        isDone: selectedTodo.value.isDone,
        title: title.value,
      });
      isEdited.value = false;
      selectedTodo.value = null;
    }
  } else {
    store.addTodo(title.value);
  }
  title.value = "";
};
</script>
