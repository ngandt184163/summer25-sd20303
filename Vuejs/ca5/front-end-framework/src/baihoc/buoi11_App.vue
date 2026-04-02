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
const todos = ref([]);
const loading = ref(false);
// goi API sau khi component
// duoc gan vao DOM
onMounted(async () => {
  try {
    loading.value = true;
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    todos.value = res.data;

    // gui du lieu moi
    const postRes = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title: "New Todo",
        completed: false,
      },
    );
    // console.log("Dữ liệu đã được gửi:", postResponse.data);
    todos.value.push(postRes.data);

    /**
     * PUT/PATCH: update du lieu
     * - sau khi update xong ma muon hien thi
     * thi se phai tu cap nhat lai cho todos,
     * cb co the sd map()
     * DELETE: xoa du lieu
     * - sau khi xoa ma muon hien thi thi co
     * the sd filter() de loc nhung gia tri
     * khong bi xoa ra khoi todos
     */
  } catch (error) {
    // tham khao slide 6, trang 26.
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else {
      console.log(error);
    }
  } finally {
    console.log("done");
    loading.value = false;
  }
});
</script>
<template>
  <h1>buoi 11</h1>
  <p v-if="loading">Loading...</p>
  <ul>
    <li v-for="item in todos" :key="item.id">
      {{ item.title }}
    </li>
  </ul>
</template>
<style scoped></style>
