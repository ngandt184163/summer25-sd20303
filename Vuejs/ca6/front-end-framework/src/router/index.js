import { createRouter, createWebHistory } from "vue-router";

// import component
import Home from "../views/Home.vue";
import About from "../views/About.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", name: "about", component: About },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/user/:id",
    name: "user",
    component: () => import("../views/User.vue"),
    children: [
      {
        path: "profile",
        name: "user-profile",
        component: () => import("../views/UserProfile.vue"),
      },
      {
        path: "post",
        name: "user-post",
        component: () => import("../views/UserPost.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
