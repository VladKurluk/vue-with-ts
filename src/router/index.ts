import { createRouter, createWebHistory } from "vue-router";
import TypecriptCourse from "@/pages/TypecriptWithVueCourse.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: TypecriptCourse,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;