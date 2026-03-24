<script setup>
import { ref } from "vue";

const count = ref(0);
const props = defineProps({
  btn_text: String,
  max: Number,
  min: Number,
});
</script>
<template>
  <button @click="count++">{{ btn_text }}: {{ count }}</button>
  <p>{{ max }}</p>
</template>
<style scoped></style>
