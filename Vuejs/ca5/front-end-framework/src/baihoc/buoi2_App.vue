<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, reactive } from "vue";
/**
 * 1. reactivity trong vuejs
 * là cơ chế giúp giao diện tự động
 * cập nhật khi dữ liệu thay đổi.
 */

/**
 * 2. reactive state trong vuejs
 * la du lieu duoc Vue theo doi,
 * khi du lieu thay doi, giao dien
 * duoc tu dong cap nhat
 * - co 2 cach de tao: sd ref()
 * hoac sd reactive()
 * - ref(): sd de tao reactive cho
 * cac gia gia tri don le(nguyen thuy)
 * number, string, boolean,....
 * - reactive(): sd cho cac doi tuong
 * hoac mang
 */

//  khoi tao bien bang ref
const count = ref(0);
const message = ref("hello vue");
// ham cap nhat message
function changeMessage() {
  message.value = "Xin chao Vue";
}

// khoi tao 1 doi tuong bang reactive
const user = reactive({
  name: "ngandt35",
  age: 18,
});

/**
 * 3. data binding trong vuejs
 * la viec lien ket giua du lieu
 * voi giao dien
 * -one-way binding: du lieu chi
 * di mot chieu
 * -two-way binding: du lieu di
 * 2 chieu
 */

// du lieu di 1 chieu
const message2 = ref("hello");
const imgURL = ref(
  "https://m.yodycdn.com/blog/hinh-anh-hoa-hong-dep-nhat-yody-vn-106.jpg",
);

// du lieu di 2 chieu: sd v-model
const email = ref("example@gmai.com");
</script>

<template>
  <h1>Buoi hoc so 2</h1>
  <!-- tu dong cap nhat lai count -->
  <p>{{ count }}</p>
  <!-- khi bap nut, count thay doi,
   UI tu dong cap nhat -->
  <button @click="count++">tang</button>
  <button @click="count--">giam</button>

  <!-- tu dong cap nhat message -->
  <p>{{ message }}</p>
  <button @click="changeMessage()">doi</button>

  <!-- du lieu di 1 chieu tu data->UI -->
  <p>{{ message2 }}</p>
  <img style="width: 300px; height: 200px" :src="imgURL" alt="" />
  <br />
  <!-- du lieu di 2 chieu
   khi input thay doi thi gia tri
   cua email thay doi, text 
   se thay doi ngay -->
  <input v-model="email" />
  <p>Email: {{ email }}</p>
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
