<script setup>
import { inject } from "vue";
const message = inject("message");
</script>
<template>
  <h2>Chirld 2 Component</h2>
  <p>Loi chao tu component ong: {{ message }}</p>
</template>
<style scoped></style>
