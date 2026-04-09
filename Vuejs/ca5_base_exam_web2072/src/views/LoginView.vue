<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import api from '@/services/api'
const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref('')

const login = async () => {
  const res = await api.get('users', {
    params: {
      username: username.value,
      password: password.value,
    },
  })

  // kiem tra
  if (res.data.length > 0) {
    // luu thong tin nguoi dung vao localStorage
    localStorage.setItem('user', JSON.stringify(res.data[0]))
    // chuyen den trang list
    router.push({ name: 'list' })
  } else {
    // gan loi
    error.value = 'Tai khoan hoac mat khau khong dung'
  }
}
</script>
<template>
  <h1>Login</h1>
  <input v-model="username" placeholder="Username" /><br />
  <input v-model="password" placeholder="Password" type="password" /><br />
  <button @click="login">Login</button>
  <p style="color: red" v-if="error">{{ error }}</p>
</template>
