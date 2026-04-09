<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
// chua id trong truong hop la edit
const isEdit = route.params.id
const student = ref({
  name: '',
  email: '',
  age: '',
  avatar: '',
})

// lay thong tin sinh vien neu la edit
const fetchStudent = async () => {
  try {
    const res = await api.get(`/students/${isEdit}`)
    // gan du lieu tra ve vao bien student
    student.value = res.data
  } catch (error) {
    console.error('Lỗi khi lấy thông tin sinh viên:', error)
  }
}
// kiem tra xem co phai la edit hay khong
onMounted(() => {
  // kiem tra neu la edit thi moi goi ham fetchStudent
  if (isEdit) {
    fetchStudent()
  }
})

// ham xu ly submit form
const submit = async () => {
  // kiem tra xem la edit hay la them moi
  if (isEdit) {
    await api.put(`/students/${isEdit}`, student.value)
  } else {
    await api.post(`/students`, student.value)
  }
  // chuyen huong ve trang danh sach
  router.push({ name: 'list' })
}

/**
 * 1. authentication: la xac thuc nguoi dung, kiem tra xem da dang nhap chua
 */
</script>
<template>
  <h1>{{ isEdit ? 'Sua' : 'Them' }} sinh viên</h1>
  <input v-model="student.name" placeholder="Ten" /><br />
  <input v-model="student.age" placeholder="Tuoi" /><br />
  <input v-model="student.email" placeholder="Email" /><br />
  <input v-model="student.avatar" placeholder="Anh dai dien" /><br />
  <button @click="submit">Luu</button>
</template>
