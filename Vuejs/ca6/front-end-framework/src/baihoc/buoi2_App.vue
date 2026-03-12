<script setup>
import { ref, reactive } from "vue";
/**
 * 1.reactivity trong vuejs
 * - la co che giup giao dien tu
 * dong cap nhat khi du lieu thay doi
 */

// khai bao bien count
const count = ref(0);

/**
 * 2.reactive state
 * - la du lieu duoc vue theo doi
 * - khi du lieu thay doi -> giao
 * dien tu dong cap nhat
 * - co 2 cach de tao reactive
 * + ref(): dung de tao reactive
 * cho gia tri don le( cac kieu dl
 * nguyen thuy: number, string, boolean)
 * + reactive(): dung cho cac doi tuong
 * va mang
 */

// khai bao bien sd ref
const message = ref("hello world");
function changeMessage() {
  message.value = "xin chao the gioi";
}

// khai bao bien sd reactive
const user = reactive({
  name: "ngandt35",
  age: 18,
});
function thayTuoi() {
  user.age = 20;
}

/**
 * 3. data binding
 * - la viec lien ket du lieu voi giao dien
 * - co 2 loai
 * + one way data binding: la du lieu mot chieu
 * Data -> UI
 * + two way data binding: du lieu hai chieu
 * Data -> UI -> Data
 */

// du lieu di 1 chieu tu data - ui
const message2 = ref("hello vuejs");
const imgUrl = ref(
  "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-con-cho-51-1024x536.jpg",
);

// du lieu di 2 chieu tu data - ui - data
const email = ref("example.com");
</script>

<template>
  <h1>Buoi 2</h1>
  <!-- hien thi count -->
  <p>{{ count }}</p>
  <!-- khi count thay doi
   tu UI tu cap gia tri moi cua 
   count va hien thi -->
  <button @click="count++">Tang</button>
  <!-- hien thi message -->
  <p>{{ message }}</p>
  <button @click="changeMessage()">Doi</button>
  <!-- hien thi user -->
  <div class="user">
    <p>ten: {{ user.name }}</p>
    <p>tuoi: {{ user.age }}</p>
    <button @click="thayTuoi()">thay doi tuoi</button>
  </div>

  <!-- hien thi du lieu 1 chieu -->
  <p>{{ message2 }}</p>
  <img :src="imgUrl" alt="" />

  <!-- hien thi du lieu 2 chieu -->
  <br />
  <input v-model="email" />
  <p>Email: {{ email }}</p>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
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
}
</style>
