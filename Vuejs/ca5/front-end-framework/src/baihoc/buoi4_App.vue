<script setup>
import { reactive } from "vue";

/**
 * 1. v-for: dung de de lap qua
 * mang hoac doi tuong va render ra
 * template cho cac phan tu mang
 * hoac thuoc tinh cua toi tuong
 */

const fruits = reactive(["Tao", "Cam", "Xoai"]);
// khai bao mot doi tuong user
const user = reactive({
  name: "NganDT35",
  age: 30,
  job: "Student",
});

// khai bao mot mang san pham
const products = reactive([
  {
    id: 1,
    name: "IPhone 17",
    price: 35500000,
  },
  {
    id: 2,
    name: "SamSung S26 Ultra",
    price: 42000000,
  },
]);
</script>

<template>
  <h1>Buoi 4</h1>
  <!-- in ra danh sach cac loai hoa qua -->
  <ul class="fruits-1">
    <li v-for="item in fruits">
      {{ item }}
    </li>
  </ul>
  <!-- in ra danh sach cac loai hoa qua
   cung voi key -->
  <ul class="fruits-2">
    <li v-for="(item, index) in fruits" :key="index">
      {{ index }} - {{ item }}
    </li>
  </ul>
  <!-- in ra thong tin user -->
  <div class="user">
    <p v-for="(value, key) in user" :key="key">{{ key }} : {{ value }}</p>
  </div>
  <!-- in ra mang san pham -->
  <div class="products">
    <template v-for="item in products">
      <hr />
      <i>{{ item.id }}</i>
      <h2>{{ item.name }}</h2>
      <del>{{ item.price }} VND</del>
      <hr />
    </template>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
