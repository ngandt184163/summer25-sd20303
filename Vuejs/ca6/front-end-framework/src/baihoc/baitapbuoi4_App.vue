<script setup>
import { reactive } from "vue";
const fruits = reactive(["Tao", "Cam", "Xoai"]);
const newFruits = reactive("");

const user = reactive([
  { name: "An", age: 20 },
  { name: "Binh", age: 21 },
  { name: "Bao", age: 19 },
]);
</script>
<template>
  <h1>Bai tap buoi 4</h1>
  <p>PH57153</p>
  <ul class="fruits">
    <input type="text" v-model="newFruits" placeholder="Nhap ten hoa qua" />
    <button @click="fruits.push(newFruits)">them</button>
    <li v-for="fruit in fruits">
      {{ fruit }}
      <button @click="fruits.splice(fruits.indexOf(fruit), 1)">xoa</button>
    </li>
  </ul>

  <p>PH59447</p>
  <ul class="user">
    <template v-for="person in user">
      <p>{{ person.name }} - {{ person.age }}</p>
    </template>
  </ul>
</template>
