import { createRouter, createWebHistory } from "vue-router";
import TypecriptCourse from "@/pages/TypecriptWithVueCourse.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: TypecriptCourse,
  },
  {
    path: "/animation",
    name: "Animation",
    component: () => import("@/pages/AnimationCourse.vue"),
  },
  {
    path: "/forms-with-formkit",
    name: "FormsWithFormKit",
    component: () => import("@/pages/FormWithFormKit.vue"),
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