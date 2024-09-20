import type { MenuItem } from "@/types/MainMenu";

export const mainMenu: MenuItem[] = [
  {
    title: "Home",
    submenu: false,
    route: {
      title: "Home",
      routeName: "Home",
      path: "/",
    }
  },
  {
    title: "Courses",
    submenu: true,
    routes: [
      {
        title: 'TypeScript with Vue.js 3',
        routeName: "Home",
        path: "/",
      },
      {
        title: "Vue.js Transitions and Animations",
        routeName: "Animation",
        path: "/animation",
      },
      {
        title: "Robust Vue.js Forms with FormKit",
        routeName: "FormsWithFormKit",
        path: "/forms-with-formkit",
      }
    ]
  },
];
