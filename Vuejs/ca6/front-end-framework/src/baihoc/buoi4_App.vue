<script setup>
import { reactive } from "vue";
/**
 * 1.v-for: dung de lap qua mot
 * mang hoac la 1 doi tuong va render
 * ra template cho cac phan tu mang
 * hoac la cac thuoc tinh cua doi
 * tuong
 */
const fruits = reactive(["Tao", "Cam", "Xoai"]);
const user = reactive({
  name: "ngandt35",
  age: 30,
  job: "student",
});
// tao mang cac doi tuong
const products = reactive([
  {
    id: 1,
    name: "Iphone 17",
    price: 36000000,
  },
  {
    id: 2,
    name: "SamSung S26 Ultra",
    price: 42000000,
  },
]);
</script>
<template>
  <h1>buoi 4</h1>
  <!-- in ra ds hoa qua -->
  <ul class="fruits-1">
    <li v-for="item in fruits">
      {{ item }}
    </li>
  </ul>
  <!-- in ra ds hoa qua kem theo index -->
  <ul class="fruits-1">
    <li v-for="(item, index) in fruits" :key="index">
      {{ index }} : {{ item }}
    </li>
  </ul>
  <!-- in ra thong tin user -->
  <ul class="user">
    <li v-for="(value, key) in user" :key="key">{{ key }} : {{ value }}</li>
  </ul>
  <!-- sd template -->
  <div class="products">
    <template v-for="item in products">
      <hr />
      <b>{{ item.id }}</b>
      <h2>{{ item.name }}</h2>
      <i>{{ item.price }}</i>
      <hr />
    </template>
  </div>
</template>
<style scoped></style>
