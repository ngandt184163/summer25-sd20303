<script setup>
import { ref } from 'vue'
import api from '../services/api'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref('')

const login = async () => {
  const res = await api.get('/users', {
    params: {
      username: username.value,
      password: password.value,
    },
  })

  if (res.data.length > 0) {
    // luu thong tin nguoi dung vao localStorage
    localStorage.setItem('user', JSON.stringify(res.data[0]))
    // dieu huong ve trang danh sach sinh vien
    router.push({ name: 'list' })
  } else {
    error.value = 'Sai username hoac password'
  }
}
</script>
<template>
  <h1>Login</h1>
  <input v-model="username" placeholder="Username" /><br />
  <input v-model="password" type="password" placeholder="Password" /><br />
  <button @click="login">Dang nhap</button>
  <p v-if="error" style="color: red">{{ error }}</p>
</template>
