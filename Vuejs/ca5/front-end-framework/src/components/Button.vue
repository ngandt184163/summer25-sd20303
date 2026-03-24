<script setup>
import { ref } from "vue";

const count = ref(0);

const props = defineProps({
  btn_text: String,
  number1: Number,
});
</script>
<template>
  <button @click="count++">{{ btn_text }} : {{ count }}</button>
  <p>{{ number1 }}</p>
</template>
<style scoped></style>
