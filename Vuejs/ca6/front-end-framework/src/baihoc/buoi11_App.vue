<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
/**
 * 1. Axios là gì?
Axios = thư viện gọi API
API (Application Programming Interface) là giao diện lập trình ứng dụng – hiểu đơn giản là cách để các hệ thống/phần mềm nói chuyện với nhau.
Bạn không cần biết backend làm như nào, chỉ cần gọi API là lấy được dữ liệu.
API thường trả về JSON
API = cầu nối giữa frontend và backend
Axios = công cụ để gọi API trong Vue
Không có API → frontend không có dữ liệu để hiển thị
 */
// tao mang de luu tru data tu API
const todos = ref([]);
// tao bien luu tru trang thai loading
const loading = ref(false);
// sd onMounted de goi API khi
// component duoc them vao DOM
onMounted(async () => {
  try {
    loading.value = true;
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    // gan data vao bien todos
    todos.value = res.data;

    // gui du lieu moi
    const postRes = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title: "New Todo",
      },
    );
    // sd push vao mang todos de them du
    // lieu moi vao danh sach
    todos.value.push(postRes.data);
    // console.log(postRes.data);
    /**
     * PUT/PATCH: cap nhat du lieu
     * - sd ham map de tim kiem va cap nhat
     * lai gia tri cua item can cap nhat
     * DELETE: xoa du lieu
     * - sd ham filter de loc ra cac item
     * khong phai la item can xoa, sau do
     * gan lai mang todos
     */
  } catch (error) {
    // xu li loi chi tiet hon
    if (error.response) {
      // loi tu server
      console.log("server error", error.response.status);
    } else if (error.request) {
      // loi tu client
      console.log("client error", error.request);
    } else {
      // loi khac
      console.log(error);
    }
  } finally {
    loading.value = false;
    console.log("Done");
  }
});
</script>
<template>
  <h1>Buoi 11</h1>
  <p v-if="loading">Loading ...</p>
  <ul>
    <li v-for="item in todos" :key="item.id">
      {{ item.title }}
    </li>
  </ul>
</template>
<style scoped></style>
