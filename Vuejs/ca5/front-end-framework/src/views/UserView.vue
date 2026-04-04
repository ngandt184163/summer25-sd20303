<script setup>
import { useRoute } from "vue-router";
// lay du lieu tu url
const route = useRoute();
</script>
<template>
  <h1>User Page</h1>
  <router-link :to="{ name: 'user-profile', params: { id: route.params.id } }"
    >User Profile</router-link
  >
  <router-link :to="{ name: 'user-posts', params: { id: route.params.id } }"
    >User Posts</router-link
  >

  <!-- noi hien thi noi dung -->
  <router-view></router-view>
</template>
