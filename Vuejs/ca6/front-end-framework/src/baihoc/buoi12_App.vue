<script setup>
import { useRouter } from "vue-router";
/**
 * 1. Vue Router là gì?
- Dùng để chuyển trang trong SPA 
(Single Page Application)
- Không reload trang
 */

// su dụng code để điều hướng
const router = useRouter();
function goToContact() {
  router.push("/contact");
}

// tao bien gia dinh userID
const userID = 3;
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <!-- <router-link to="/about">About</router-link>
    <router-link to="/user">User</router-link> -->
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-link :to="{ name: 'user', params: { id: userID } }"
      >User</router-link
    >
  </nav>
  <button @click="goToContact()">Contact</button>

  <router-view />
</template>
