<script setup>
const emits = defineEmits(["counter"]);
</script>
<template>
  <button @click="emits('counter')">Increment</button>
</template>
<style scoped></style>
