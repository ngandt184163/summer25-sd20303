<script setup>
import { ref } from "vue";
/**
 * 1. xu li su kien: vue lang nghe
 * va xu li cac su kien cua nguoi
 * dung nhu: click, nhap tu ban
 * phim, gui form, ...
 * 2. co 2 cach de lang nghe su kien
 * - v-on:ten_su_kien
 * - @ten_su_kien
 * 3. 2 cach de xu li su kien
 * - inline handle: viet truc tiep
 * vao su kien
 * - method handle: viet ham xu li
 */

function handle() {
  console.log("click thanh cong");
}

const count = ref(0);
function increment() {
  count.value++;
}
// truyen tham so vao ham khi xu li su kien
function tudo(n) {
  count.value += n;
}
const name = ref("");
function submitForm(e) {
  // e.preventDefault();
  console.log(name.value);
}
function parent() {
  console.log("click nut cha");
}
function child() {
  console.log("click nut con");
}
const email = ref("");
function reset() {
  email.value = "";
}

function submit() {
  alert(email.value);
}
</script>
<template>
  <h1>buoi 5</h1>
  <button v-on:click="handle()">click 1</button>
  <button @click="handle()">click 2</button>
  <!-- inline handle, chi sd khi code
   ngan gon, it logic -->
  <button @click="count++">{{ count }}</button>
  <!-- method handle: sd khi code nhieu, logic
   phuc tap, day la cach thuong dc sd -->
  <button @click="increment()">{{ count }}</button>
  <button @click="tudo(-30)">{{ count }}</button>

  <!-- sd event modifier -->
  <form @submit.prevent="submitForm()">
    <input v-model="name" />
    <button>Gui</button>
  </form>
  <button @click="parent()">
    nut cha
    <button @click.stop="child()">nu con</button>
  </button>

  <!-- key modifiers -->
  <p>{{ email }}</p>
  <input @keyup.enter="submit()" @keyup.esc="reset()" v-model="email" />
</template>
<style scoped></style>
