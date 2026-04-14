<script setup>
import { ref, onMounted } from 'vue'
// import api service
import api from '../services/api'
import { useRouter } from 'vue-router'

// bien dieu khiển router
const router = useRouter()
// bien luu tru danh sach sinh vien khi get tu api
const students = ref([])
// ham get du lieu tu api va gan vao bien students
const fetchStudents = async () => {
  const res = await api.get('/students')
  // gan du lieu tu api vao bien students
  students.value = res.data
}

// ham xem chi tiet sinh vien
const goDetail = (id) => {
  router.push(`/students/${id}`)
}

const goEdit = (id) => {
  router.push(`/edit/${id}`)
}
// ham xoa sv
const removeStudent = async (id) => {
  await api.delete(`students/${id}`)
  // sau khi xoa xong thi goi lai ham fetchStudents de cap nhat lai danh sach
  fetchStudents()
}

onMounted(fetchStudents)

//
const logout = () => {
  // xoa thong tin nguoi dung trong localStorage
  localStorage.removeItem('user')
  // chuyen den trang login
  router.push({ name: 'login' })
}
</script>

<template>
  <button @click="logout">Dang Xuat</button>
  <h1>Danh sách sinh viên</h1>
  <button @click="router.push('/add')">Them moi</button>

  <table class="table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Xem</th>
        <th scope="col">Sua</th>
        <th scope="col">Xoa</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="student in students" :key="student.id">
        <th scope="row">{{ student.name }}</th>
        <td><button class="btn btn-warning" @click="goDetail(student.id)">Xem</button></td>
        <td><button class="btn btn-info" @click="goEdit(student.id)">Sua</button></td>
        <td><button class="btn btn-danger" @click="removeStudent(student.id)">Xoa</button></td>
      </tr>
    </tbody>
  </table>
</template>
