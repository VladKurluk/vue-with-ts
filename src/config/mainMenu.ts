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
        title: "Animation with Vue.js 3",
        routeName: "Animation",
        path: "/animation",
      }
    ]
  },
];
