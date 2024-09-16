interface Route {
  title: string;
  routeName: string;
  path: string;
};

interface MenuItemBase {
  title: string;
  submenu: boolean;
};

export interface MenuItemWithRoute extends MenuItemBase {
  route: Route;
};

export interface MenuItemWithSubmenu extends MenuItemBase {
  routes: Route[];
};

export type MenuItem = MenuItemWithRoute | MenuItemWithSubmenu;
