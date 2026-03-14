<script setup>
import { ref } from "vue";
/**
 * 1. class binding: thay doi class
 * theo data
 */
const isActive = ref(false);
function toggle() {
  isActive.value = !isActive.value;
}
/**
 * 2. style binding: thay doi style
 * theo data
 */
const textColor = ref("red");
function changeColor() {
  textColor.value = "violet";
}
/**
 * 3. conditional rendering: la an hoac
 * hien thi mot phan tu theo dieu kien
 * dieu kien dung thi hien thi, dieu kien
 * sai thi an di ( cu the la dung if else)
 * -v-if: dung de hien thi phan tu
 * neu dieu kien la dung
 * -v-else: hien thi phan tu khi dk sai
 * -v-else-if: dung khi co nhieu dieu kien
 * -v-show: tac dung giong v-if, cung de
 * an hoac hien phan tu theo dieu kien,
 * dung thi hien, sai thi khong hien
 * no khong xoa phan tu ra khoi DOM ma
 * chi thay doi css: display:none
 */
const isAdmin = ref(false);
const diem = ref(3);
const isVisible = ref(false);
/**
 * so sanh v-if va v-show
 * -v-if: xoa phan tu khoi DOM,
 * se render lai khi co su thay doi,
 * ton tai nguyen hon, dung khi on dinh
 * -v-show: khong xoa khoi DOM ma chi thay
 * doi css: display:none, chay nhanh hon,
 * dung khi can thay doi lien tuc
 */
</script>

<template>
  <h1>Buoi 3</h1>
  <!-- an hien class active theo isActive -->
  <p :class="{ active: isActive }">Xin chao</p>
  <button @click="toggle()">Active</button>
  <!-- thay doi style theo textColor -->
  <p :style="{ color: textColor }">Xin Chao Vue</p>
  <button @click="changeColor()">Doi mau</button>
  <!-- hien thi phan tu theo dieu kien -->
  <p v-if="isAdmin">Ban la admin</p>
  <p v-else>Ban khong phai la admin</p>
  <!-- hien thi hoc luc theo diem -->
  <p v-if="diem >= 8">Gioi</p>
  <p v-else-if="diem >= 7">Kha</p>
  <p v-else-if="diem >= 5">Trung binh</p>
  <p v-else>Yeu</p>
  <!-- an hien bang v-show -->
  <p v-show="isVisible">phan tu hien thi</p>
</template>

<style scoped>
.active {
  color: red;
}
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
