<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.231);
}
.modal-container {
  width: 300px;
  max-height: 80vh;
  height: 300px;
  overflow-y: auto;
  background-color: white;
  z-index: 99;
}
</style>

<template>
  <div class="modal">
    <div class="overlay"></div>
    <div class="modal-container">
      <h1>Hello</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus atque
        ipsa magni debitis aliquid impedit? Tempora soluta quam aspernatur
        magnam sint labore at voluptatem consectetur doloribus inventore, neque
        quas ipsam facere sapiente quod. Voluptatibus perspiciatis, molestiae
        aut quidem ipsam illo excepturi sequi atque corrupti at quae odit earum
        corporis in facere deserunt voluptates nostrum eum numquam explicabo
        impedit nulla iusto. Tempora ab iste, dolorem facere quisquam autem
        totam ipsa laboriosam fugiat odio aliquam cupiditate sapiente maxime,
        magnam quod modi reprehenderit assumenda animi distinctio. Dolore
        repellat aspernatur iusto eveniet culpa officiis voluptatibus,
        consequatur quis minus a repudiandae sapiente. Maiores, iusto odio?
      </p>
      <button @click="close()">close</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

defineProps({
  close: {
    type: Function,
    required: true,
  },
});
onMounted(() => {
  document.body.style.height = "100vh";
  document.body.style.overflowY = "hidden";
});
onUnmounted(() => {
  document.body.style.height = "100%";
  document.body.style.overflowY = "auto";
});
</script>
