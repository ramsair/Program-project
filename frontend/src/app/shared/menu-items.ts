import { Injectable } from "@angular/core";

export interface Menu {
  state: string;
  name: string;
  icon: string;
  role: string;
}

const MENUITEMS: Menu[] = [
  {
    state: 'dashboard',
    name: 'Dashboard',
    icon: 'dashboard',
    role: '',
  },
];

@Injectable()
export class MenuItems {
  getMenuitems(): Menu[] {
    return MENUITEMS;
  }
}
