<script setup>
import { ref, reactive } from "vue";
const danhsachsv = reactive([
  {
    name: "binh",
    ago: "22",
  },
  {
    name: "123",
    ago: "23",
  },
]);
const fruits = reactive(["Apple", "Banana", "Orange", "Mango"]);
const fruits1 = reactive(["tao", "chuoi", "le"]);

function removeItem(index) {
  fruits1.splice(index, 1);
}
</script>
<template>
  <h1>Bai tap buoi 4</h1>
  <h2>Bai1</h2>
  <div class="fruits">
    <li v-for="item in fruits">
      {{ item }}
    </li>
  </div>
  <!-- PH33814 Ph44522 PH34985 -->

  <h1>Danh sach sinh vien</h1>
  <ul class="danhsachsv">
    <li v-for="item in danhsachsv">{{ item.name }} - {{ item.ago }}</li>
  </ul>
  <ul>
    <li v-for="(item, index) in fruits1" :key="index">
      {{ item }}
      <button @click="removeItem(index)">X</button>
    </li>
  </ul>
</template>
