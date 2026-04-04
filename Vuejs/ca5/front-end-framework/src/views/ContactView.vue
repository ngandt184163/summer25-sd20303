<template>
  <h1>Contact Page</h1>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;
console.log(id);
</script>
