import CounterPage from "./components/HelloWorld.vue";
import TodosPage from "./components/Todos.vue";
import TodoDetail from "./components/TodoDetail.vue";
import Login from "./components/Login.vue";
import Navbar from "./components/Navbar.vue";

import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";

import { authStore } from "./stores/auth";

const routes: RouteRecordRaw[] = [
  {
    name: "Counter",
    path: "/",
    component: CounterPage,
    meta: {
      authenticated: true,
    },
  },
  {
    name: "Todos",
    path: "/todos",
    component: TodosPage,
    meta: {
      authenticated: true,
    },
  },
  {
    name: "TodoDetail",
    path: "/todos/:id",
    component: TodoDetail,
    meta: {
      authenticated: true,
    },
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
    meta: {
      authenticated: false,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from) => {
  const { isAuthenticated } = authStore();
  if (to.meta.authenticated) {
    if (!isAuthenticated) {
      return {
        name: "Login",
      };
    }
  } else {
    if (isAuthenticated) {
      console.log("from : ", from);
      return {
        path: from.fullPath,
      };
    }
  }
});

export default router;
  