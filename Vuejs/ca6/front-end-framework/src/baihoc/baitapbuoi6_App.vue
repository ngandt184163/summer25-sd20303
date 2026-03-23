<script setup>
import { ref } from "vue";
const name = ref("");
const email = ref("");
const checkbox = ref(false);
const submitForm = () => {
  if (!name.value || !email.value || !checkbox.value) {
    alert("vui long nhap day du thong tin");
    return;
  }
  console.log(name.value, email.value);
};
</script>
<template>
  <h1>Bai tap buoi 6</h1>
  <p>PH57153</p>
  <form @submit.prevent="submitForm()">
    ten:<input type="text" v-model="name" required /><br />
    email:<input type="email" v-model="email" required /><br />
    <input type="checkbox" v-model="checkbox" required="" /> dong y
    <button>gui</button>
  </form>
</template>
<style scoped></style>
