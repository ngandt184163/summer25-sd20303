import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentList from '../views/StudentList.vue'
import StudentForm from '../views/StudentForm.vue'
import StudentDetail from '../views/StudentDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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

export default router
