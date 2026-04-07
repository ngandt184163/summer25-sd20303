<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'
import { useRoute } from 'vue-router'

// bien luu tru tham so id tu URL
const route = useRoute()
// chua thong tin sinh vien duoc lay tu API
const student = ref(null)

const fetchStudent = async () => {
  try {
    const res = await api.get(`/students/${route.params.id}`)
    // gan du lieu tra ve vao bien student
    student.value = res.data
  } catch (error) {
    console.error('Lỗi khi lấy thông tin sinh viên:', error)
  }
}

// goi ham fetchStudent khi component duoc gan vao DOM
onMounted(fetchStudent)
</script>

<template>
  <h1>Chi tiết sinh viên</h1>
  <ul v-if="student">
    <li>{{ student.name }}</li>
    <li>{{ student.email }}</li>
    <li>{{ student.age }}</li>
    <li><img :src="student.avatar" /></li>
  </ul>
</template>
