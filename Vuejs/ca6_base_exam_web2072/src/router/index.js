import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentList from '../views/StudentList.vue'
import StudentForm from '../views/StudentForm.vue'
import StudentDetail from '../views/StudentDetail.vue'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', name: 'login', component: Login },
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

// xu li chan dang nhap khi chua dang nhap
router.beforeEach((to, from, next) => {
  // tim xem co user trong localStorage hay khong
  const user = localStorage.getItem('user')
  // kiem tra
  if (!user && to.name !== 'login' && to.name !== 'home') {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
