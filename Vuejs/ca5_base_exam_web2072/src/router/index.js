import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentList from '../views/StudentList.vue'
import StudentForm from '../views/StudentForm.vue'
import StudentDetail from '../views/StudentDetail.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', name: 'login', component: LoginView },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    { path: '/list', name: 'list', component: StudentList },
    { path: '/add', name: 'add', component: StudentForm },
    { path: '/edit/:id', name: 'edit', component: StudentForm },
    { path: '/students/:id', name: 'detail', component: StudentDetail },
  ],
})

// kiem tra dang nhap truoc khi vao cac trang khac
router.beforeEach((to, from, next) => {
  const user = localStorage.getItem('user')
  if (!user && to.name !== 'login' && to.name !== 'home') {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
