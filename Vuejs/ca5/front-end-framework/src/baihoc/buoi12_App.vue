<script setup>
import { useRouter } from "vue-router";
/**
 * 1. Vue Router là gì?
- Dùng để chuyển trang trong SPA
(Single Page Application)
- Không reload trang
 */
// Cach 1: dung code de xu li router
const router = useRouter();
// bien chua user id
const userId = 3;
function goToUser() {
  router.push(`/user/${userId}`);
}
</script>
<template>
  <h1>Buoi 12</h1>
  <router-link to="/">Home</router-link>
  <!-- <router-link to="/about">About</router-link>
  <router-link to="/user/3">User</router-link> -->
  <!-- goi router bang cach sd ten -->
  <router-link :to="{ name: 'about' }">About</router-link>
  <router-link :to="{ name: 'user', params: { id: userId } }">User</router-link>
  <button @click="goToUser()">User</button>

  <!-- noi hien thi noi dung -->
  <router-view></router-view>
</template>
<style scoped></style>
