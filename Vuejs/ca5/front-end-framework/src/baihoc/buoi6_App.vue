<script setup>
import { ref } from "vue";
/**
 * 1. form binding: la su lien ket
 * du lieu giua the input va bien
 * - chung ta se sd: v-model
 */
const name = ref("");
const discription = ref("");
const checkbox = ref(false);
const multi_checkbox = ref([]);
const gender = ref();
const address = ref("Ha Noi");
function submitForm() {
  //
  console.log("Gui thanh cong");
}
</script>
<template>
  <h1>Buoi 6</h1>
  <form @submit.prevent="submitForm()">
    nhap ten: <input v-model.lazy="name" /><br />
    Mo ta: <textarea v-model="discription"></textarea><br />
    remember: <input type="checkbox" v-model="checkbox" /><br />
    so thich: <br />
    <input type="checkbox" value="chay bo" v-model="multi_checkbox" /> chay bo
    <br />
    <input type="checkbox" value="boi loi" v-model="multi_checkbox" /> boi loi
    <br />
    <input type="checkbox" value="danh dan" v-model="multi_checkbox" /> danh dan
    <br />
    <input type="checkbox" value="choi game" v-model="multi_checkbox" /> choi
    game <br />
    Gioi tinh: <br />
    Nam: <input type="radio" value="Nam" v-model="gender" />
    <br />
    Nu: <input type="radio" value="Nu" v-model="gender" />
    <br />
    que quan: <br />
    <select v-model="address">
      <option value="Ha Noi">Ha Noi</option>
      <option value="Da nang">Da nang</option>
      <option value="HCM">HCM</option></select
    ><br />
    <button>Gui</button>
  </form>
  <p>{{ name }} - {{ name.length }} - {{ typeof name }}</p>
  <p>{{ discription }}</p>
  <p>{{ checkbox ? "Da chon" : "Chua chon" }}</p>
  <p v-for="item in multi_checkbox">{{ item }}</p>
  <p>{{ gender }}</p>
  <p>{{ address }}</p>
</template>
<style scoped></style>
