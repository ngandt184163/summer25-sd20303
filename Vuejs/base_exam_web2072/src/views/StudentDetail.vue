<script setup>
import { ref, onMounted } from 'vue'
// import api service
import api from '../services/api'
import { useRoute } from 'vue-router'

// chua danh sach tham so tu url
const route = useRoute()
// tao bien luu tru sinh vien
const student = ref(null)

// ham get du lieu tu api va gan vao bien student
const fetchStudent = async () => {
  const res = await api.get(`/students/${route.params.id}`)
  // gan du lieu tu api vao bien student
  student.value = res.data
}

onMounted(fetchStudent)
</script>

<template>
  <h1>Chi tiết sinh viên</h1>
  <ul v-if="student">
    <li>{{ student.name }}</li>
    <li>{{ student.age }}</li>
    <li>{{ student.email }}</li>
    <li><img :src="student.avatar" /></li>
  </ul>
</template>
