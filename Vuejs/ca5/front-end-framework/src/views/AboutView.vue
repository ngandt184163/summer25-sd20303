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
  console.log("on Mounted");
});

onUnmounted(() => {
  console.log("on UnMounted");
});

onBeforeMount(() => {
  console.log("on Before Mount");
});

onBeforeUnmount(() => {
  console.log("on Before UnMount");
});

const count = ref(0);

onUpdated(() => {
  console.log("on Updated:", document.getElementById("count").innerText);
});
onBeforeUpdate(() => {
  console.log(
    "on Before Updated: ",
    document.getElementById("count").innerText,
  );
});
</script>
<template>
  <h1>About Page</h1>
  <button id="count" @click="count++">{{ count }}</button>
</template>
