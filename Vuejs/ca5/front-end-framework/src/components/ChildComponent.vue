<script setup>
import { ref, inject } from "vue";
import Chirld2Component from "./Chirld2Component.vue";

const msg = ref("Hello Vue");
const message = inject("message");
</script>
<template>
  <h2>Child Component</h2>
  <!-- noi dung cua slot se
     duoc component cha truyen vao -->
  <slot :msg="msg"></slot>
  <!-- hien thi bien message duoc truyen tu cha -->
  <p>Loi chao tu component cha: {{ message }}</p>
  <!-- goi component con Chirld 2 -->
  <Chirld2Component />
</template>
<style scoped></style>
