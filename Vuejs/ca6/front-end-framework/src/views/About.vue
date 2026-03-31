<script setup>
import {
  ref,
  onMounted,
  onUnmounted,
  onBeforeMount,
  onBeforeUnmount,
  onUpdated,
  onBeforeUpdate,
} from "vue";

onMounted(() => {
  console.log("on mounted");
});

onUnmounted(() => {
  console.log("on unMounted");
});

onBeforeMount(() => {
  console.log("on before mount");
});

onBeforeUnmount(() => {
  console.log("on before unmount");
});

onUpdated(() => {
  console.log("on updated: ", document.getElementById("count").innerText);
});

onBeforeUpdate(() => {
  console.log("on before update: ", document.getElementById("count").innerText);
});

const count = ref(0);
</script>
<template>
  <h1>About Page</h1>
  <button id="count" @click="count++">{{ count }}</button>
</template>
