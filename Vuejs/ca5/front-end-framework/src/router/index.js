import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/contact/:id",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/user/:id",
      name: "user",
      component: () => import("../views/UserView.vue"),
      children: [
        {
          path: "profile",
          name: "user-profile",
          component: () => import("../views/UserProfileView.vue"),
        },
        {
          path: "posts",
          name: "user-posts",
          component: () => import("../views/UserPostsView.vue"),
        },
      ],
    },
  ],
});

export default router;
