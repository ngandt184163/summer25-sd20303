<script setup>
const emits = defineEmits("counter");
</script>
<template>
  <button @click="emits('counter')">Tang len</button>
</template>
<style scoped></style>
