<script setup>
import { useRouter } from "vue-router";
/**
 * 1. Lifecycle: la vong doi cua
 * component, la tat cac cac qua trinh 
 * tu luc no duoc sinh ra den khi no
 * bi huy di
 * - vong doi cua component la tu luc
 * no duoc them vao DOM den khi no duoc
 * xoa khoi DOM
 * 2. Lifecycle Hooks là gì?
  Hooks = các “điểm móc” để chạy code theo từng giai đoạn  
  - giai doan o day la:
  + truoc khi them vao DOM
  + sau khi them vao DOM
  + truoc khi xoa khoi DOM
  + sau khi xoa khoi DOM  
  + truoc khi cap nhat DOM
  + sau khi cap nhat DOM
  3. cac hook quan trong
  3.1. onMounted()
  - chay khi component duoc hien thi
  len man hinh
  - sd khi
  + lay du lieu
  + goi API
  + thao tac voi DOM
  3.2. onUnMounted()
  - chay khi component bi xoa khoi DOM
  - sd khi
  + don dep du lieu, dong ket noi toi server
  + don dep su kien,...
  3.4 onBeforeMount()
    Chạy trước khi render
  3.5 onBeforeUnmount()
    Chạy trước khi bị hủy
  3.2 onUpdated()
    Khi data thay đổi → UI update
  3.5 onBeforeUpdate()
    Chạy trước khi Update
 */

const router = useRouter();
const id = 1;

function goToContact() {
  router.push(`/contact/${id}`);
}
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>

  <button @click="goToContact">Contact</button>

  <router-view />
</template>
