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

// them bien luu tru loi
const errors = ref({})
// viet ham xu li validate
const validate = () => {
  // reset loi khi bam submit
  errors.value = {}
  if (!student.value.name || typeof student.value.name !== 'string') {
    errors.value.name = 'Ten phai la mot chuoi'
  }

  if (!student.value.age || !Number.isInteger(Number(student.value.age))) {
    errors.value.age = 'Tuoi phai la mot so'
  }

  // test@gmail.com
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!student.value.email || !emailPattern.test(student.value.email)) {
    errors.value.email = 'Email khong hop le'
  }

  const imagePattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|webp|gif))$/
  if (!student.value.avatar || !imagePattern.test(student.value.avatar)) {
    errors.value.avatar = 'Anh phai la 1 duong dan'
  }

  return Object.keys(errors.value).length === 0
}

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
  // kiem tra loi
  if (!validate()) {
    return
  }
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
  <p class="text-danger">{{ errors.name }}</p>
  <input v-model="student.age" placeholder="Tuoi" /><br />
  <p class="text-danger">{{ errors.age }}</p>
  <input v-model="student.email" placeholder="Email" /><br />
  <p class="text-danger">{{ errors.email }}</p>
  <input v-model="student.avatar" placeholder="Link anh dai dien" /><br />
  <p class="text-danger">{{ errors.avatar }}</p>
  <button @click="submit">Luu</button>
</template>
