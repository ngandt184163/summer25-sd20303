<script setup>
/**
 * 1. Lifecycle là gì
 * - la vong doi cua component, bao 
 * gom tat ca cac giai doan tu luc
 * no duoc sinh ra den khi no
 * bi huy
 * - vong doi cua componet la tu luc
 * no duoc gan vao DOM, thay doi UI 
 * va cuoi cung la xoa khoi DOM
 * 
 * 2. Lifecycle Hooks là gì?
  Hooks = các “điểm móc” để chạy 
  code theo từng giai đoạn
  - chung ta co 6 giai doan co ban
  + sau khi dc gan vao DOM  
  + sau khi bi xoa khoi DOM
  + truoc khi duoc gan vao DOM
  + truoc khi bi xoa khoi DOM
  + truoc khi du lieu bi thay doi
  khien cho UI dc cap nhat
  + sau khi du lieu bi thay doi
  3.1. onMounted
  - sau khi component duoc hien thi
  le man hinh thi no se chay
  Dùng khi:
  Gọi API
  Lấy dữ liệu
  thao tác DOM
  3.1. onUnMounted
  - sau khi component bi xoa khoi
  DOM
  - Dung khi xoa du lieu, dong ket
  noi toi server, xoa su kien

  3.3 onBeforeMount
  - chay truoc khi component duoc 
  hien thi
  3.4 onBeforeUnmount
  - chay truoc khi component bi
  xoa khoi DOM
  3.5. onUpdated
  - chay sau khi du lieu thay doi
  va lam cho UI cap nhat
  3.6 onBeforeUpdate
  - chay truoc khi du lieu thay 
  doi
 */
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>

  <router-view />
</template>
