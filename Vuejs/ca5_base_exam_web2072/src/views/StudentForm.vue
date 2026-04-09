<script setup>
import { ref, onMounted } from 'vue'
// import api service
import api from '../services/api'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
// bien chua id cua sinh vien
const isEdit = route.params.id
const student = ref({
  name: '',
  age: '',
  email: '',
  avatar: '',
})

// neu nhu la sua thi get du lieu sinh vien do va gan vao form
const fetchStudent = async () => {
  const res = await api.get(`/students/${isEdit}`)
  // gan du lieu tu api vao bien student
  student.value = res.data
}

onMounted(() => {
  if (isEdit) {
    fetchStudent()
  }
})
const submit = async () => {
  if (isEdit) {
    // goi put api de cap nhat sinh vien
    await api.put(`/students/${isEdit}`, student.value)
  } else {
    // goi post api de tao moi sinh vien
    await api.post('/students', student.value)
  }
  // chuyen huong ve trang list
  router.push({ name: 'list' })
}
</script>

<template>
  <h1>{{ isEdit ? 'Sua' : 'Them' }} sinh viên</h1>
  <input v-model="student.name" placeholder="Ten" /><br />
  <input v-model="student.age" placeholder="Tuoi" /><br />
  <input v-model="student.email" placeholder="Email" /><br />
  <input v-model="student.avatar" placeholder="Link anh dai dien" /><br />
  <button @click="submit">Luu</button>
</template>
