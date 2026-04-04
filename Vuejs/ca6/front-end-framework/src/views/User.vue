<script setup>
import { useRoute } from "vue-router";
// lay du lieu tu url
const route = useRoute();
console.log(route.params);
</script>
<template>
  <h1>User Page</h1>
  <router-link :to="{ name: 'user-profile', params: { id: route.params.id } }"
    >Profile</router-link
  >
  <router-link :to="{ name: 'user-post', params: { id: route.params.id } }"
    >Posts</router-link
  >
  <!-- noi hien thi noi dung -->
  <router-view />
</template>
