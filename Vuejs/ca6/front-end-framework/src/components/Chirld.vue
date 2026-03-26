<script setup>
import { ref, inject } from "vue";
import Chirld2 from "./Chirld2.vue";

const message = ref("hello vue");
const message2 = inject("message");
</script>
<template>
  <h2>Chirld Component</h2>
  <!-- noi dung cua slot se duoc
     component cha truyen vao -->
  <slot :msg="message"></slot>
  <p>Day la du lieu duoc truyen tu cha: {{ message2 }}</p>
  <Chirld2></Chirld2>
</template>
<style scoped></style>
