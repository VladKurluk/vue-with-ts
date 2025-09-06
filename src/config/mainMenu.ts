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
      },
      {
        title: "Charts for Vue.js 3",
        routeName: "ChartsForVue",
        path: "/carts-for-vue-3",
      },
      {
        title: "Build a Drag-and-Drop Trello Board with Vue.js",
        routeName: "TrelloClone",
        path: "/trello-clone-vue",
      },
      {
        title: "Vue Component Design: Master Scalable Vue.js Patterns",
        routeName: "ComponentDesign",
        path: "/component-design",
      }
    ]
  },
];
