<script setup lang="ts">
import { watch } from "vue";
import { useCounterStore } from "../stores/counter";
import { computed, ref } from "@vue/reactivity";

const store = useCounterStore();
const double = computed(() => store.double);

const firstName = ref("John");
const lastName = ref("Doe");

const fullName = computed({
  // getter
  get() {
    return firstName.value + " " + lastName.value;
  },
  // setter
  set(newValue) {
    // Note: we are using destructuring assignment syntax here.
    [firstName.value, lastName.value] = newValue.split(" ");
  },
});

watch(
  () => store.count,
  (count, prevCount) => {
    if (prevCount > count) return;
    if (prevCount < count && count === 10) {
      alert("big volume");
      fullName.value = "ALex Bardot";
    }
  }
);
</script>

<template>
  <h1>{{ store.count }}</h1>
  <h2>{{ double }}</h2>
  <br />
  <p>{{ fullName }}</p>
  <button :disabled="store.count >= 15" @click="store.increase()">
    Increase
  </button>
  <button :disabled="store.count <= 0" @click="store.decrease()">
    Decrease
  </button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
