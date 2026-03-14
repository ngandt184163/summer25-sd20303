<script setup>
import { ref, reactive } from "vue";
/**
 * 1. class binding: cho phep thay
 * doi class theo du lieu
 */
const isActive = ref(false);
function toggle() {
  isActive.value = !isActive.value;
}
/**
 * 2.style binding:  cho phep thay doi style
 * theo du lieu
 */
const textColor = ref("red");
function changeColor() {
  textColor.value = "violet";
}

/**
 * 3.conditional rendering: la hien thi hoac
 * an mot phan giao dien dua tren mot dieu
 * kien (dung if else)
 * - trong vue js dung
 * + v-if: dung de hien thi phan tu khi
 * dieu kien dung. neu dieu kien sai phan tu
 * se khong duoc render vao DOM
 * + v-else: dung khi dieu kien cua v-if sai
 * + v-else-if: dung khi co nhieu dieu kien
 * + v-show: cung giong v-if, de an hien phan
 * tu theo dieu kien, dung thi hien thi,
 * sai thi an bang display: none
 */
const isAdmin = ref(false);
const diem = ref(9);
const isVisible = ref(false);
/**
 * so sanh v-if va v-show
 * - v-if: xoa phan tu khoi Dom khi dk sai,
 * render lai khi doi trang thai, ton tai nguyen
 * hon, dung khi it thay doi
 * -v-show: dieu kien sai se khong xoa khoi
 * DOM, chi doi css display: none, nhanh hon,
 * dung khi thay doi nhieu
 */
</script>

<template>
  <h1>Buoi 3</h1>
  <!-- thay doi class theo data -->
  <p :class="{ active: isActive }">Xin Chao</p>
  <button @click="toggle()">Toggle</button>

  <!-- thay doi style theo data -->
  <p :style="{ color: textColor }">Xin chao Vue</p>
  <button @click="changeColor()">Doi mau</button>
  <!-- kiem tra xem co phai admin khong -->
  <p v-if="isAdmin">Ban la Admin</p>
  <p v-else>Ban khong phai la Admin</p>

  <!-- hien thi hoc luc qua "diem" -->
  <p v-if="diem >= 8">Gioi</p>
  <p v-else-if="diem >= 7">Kha</p>
  <p v-else-if="diem >= 5">Trung Binh</p>
  <p v-else>Truot</p>
  <!-- hien thi qua v-show -->
  <p v-show="isVisible">Noi dung hien thi</p>
</template>

<style scoped>
.active {
  color: red;
}
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
