<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'
import { useRouter } from 'vue-router'

// tao bien dieu dieu huong router
const router = useRouter()
// tao bien luu tru danh sach sinh vien dc lay tu API
const students = ref([])
// ham lay du lieu sinh vien tu API
const fetchStudents = async () => {
  try {
    const res = await api.get('/students')
    // gan du lieu tra ve vao bien students
    students.value = res.data
  } catch (error) {
    console.error('Lỗi khi lấy danh sách sinh viên:', error)
  }
}

// ham xem chi tiet sinh vien
const goDetail = (id) => {
  router.push(`/students/${id}`)
}

// ham xoa sinh vien
const removeStudent = async (id) => {
  try {
    // goi API xoa sinh vien
    await api.delete(`/students/${id}`)
    // sau khi xoa thanh cong, goi lai ham fetchStudents de cap nhat lai danh sach
    fetchStudents()
  } catch (error) {
    console.error('Lỗi khi xóa sinh viên:', error)
  }
}

// chuyen huong sang trang edit sinh vien
const goEdit = (id) => {
  router.push(`/edit/${id}`)
}

// goi ham fetchStudents khi component duoc gan vao DOM
onMounted(fetchStudents)
</script>

<template>
  <h1>Danh sách sinh viên</h1>
  <button @click="router.push('/add')">Them</button>
  <ul>
    <li v-for="student in students" :key="student.id">
      {{ student.name }}
      <button @click="goDetail(student.id)">Xem</button>
      <button @click="goEdit(student.id)">Sua</button>
      <button @click="removeStudent(student.id)">Xoa</button>
    </li>
  </ul>
</template>
