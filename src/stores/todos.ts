import { defineStore } from "pinia";
import { v4 } from "uuid";

export type Todo = {
  id: string;
  title: string;
  isDone: boolean;
};

export const useTodoStore = defineStore("todos", {
  state: () => ({
    todos: [] as Todo[],
  }),
  getters: {
    setTodos: (state) => state.todos,
  },
  actions: {
    addTodo(title: string) {
      const newTodo: Todo = {
        id: v4(),
        isDone: false,
        title,
      };
      this.todos.splice(0, 0, newTodo);
    },
    deleteTodo(id: string) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    updateDone(id: string) {
      const index = this.todos.findIndex((todo) => todo.id === id);
      this.todos[index].isDone = !this.todos[index].isDone;
    },
    updateTodo(todo: Todo) {
      const index = this.todos.findIndex((t) => t.id === todo.id);
      const editedTodo: Todo = {
        id: todo.id,
        isDone: todo.isDone,
        title: todo.title,
      };
      this.todos[index] = editedTodo;
    },
  },
});
