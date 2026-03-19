<script setup>
import { ref } from "vue";
/**
 * 1. xu li su kien: la cach Vue lang
 * nghe va xu li hanh dong cua nguoi
 * dung (click, nhap ban phim, gui form, ...)
 * 2. co 2 cach de cai dai su kien
 * - v-on:ten_su_kien
 * - @ten_su_kien
 * 3. co 2 cach xu li
 * - viet truc tiep vao su kien
 * + khi code xu li ngan gon
 * - sd ham
 * + code phuc tap, duoc sd nhieu
 */
function handle() {
  console.log("click thanh cong");
}
const count = ref(0);
function increment() {
  count.value++;
}
const count2 = ref(0);
function tang_n_dv(n) {
  count2.value += n;
}
/**
 * 4. EVENT MODIFIER: giup xu li cac tinh
 * huong pho bien mot cach se dang va
 * ngan gon
 */
const name = ref("");
function submitForm() {
  console.log(name.value);
}
function handle2() {
  console.log("click nut cha");
}

function handle3() {
  console.log("click nut con");
}

/**
 * 5. key modifier: dung de lang nghe cac
 * phim cu the nhu: enter, esc, tab,...
 */
const email = ref("");
function reset() {
  email.value = "";
}

function submit() {
  console.log(email.value);
}
</script>
<template>
  <h1>Buoi 5</h1>
  <button v-on:click="handle()">click 1</button>
  <button @click="handle()">click 2</button>
  <button @click="count++">{{ count }}</button>
  <button @click="increment()">{{ count }}</button>
  <button @click="tang_n_dv(3)">{{ count2 }}</button>
  <form @submit.prevent="submitForm()">
    <input v-model="name" />
    <button>Gui</button>
  </form>
  <button @click="handle2()">
    nut cha
    <button @click.stop="handle3()">nut con</button>
  </button>

  <p>{{ email }}</p>
  <input v-model="email" @keyup.esc="reset()" @keyup.enter="submit()" />
</template>
<style scoped></style>
