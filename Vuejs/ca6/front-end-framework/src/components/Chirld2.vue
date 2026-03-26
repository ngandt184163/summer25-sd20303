<script setup>
import { inject } from "vue";
const message2 = inject("message");
</script>
<template>
  <h2>Chirld2 Component</h2>
  <p>Day la du lieu duoc truyen tu ong: {{ message2 }}</p>
</template>
<style scoped></style>
