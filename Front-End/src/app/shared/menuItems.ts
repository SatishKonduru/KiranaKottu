import { Injectable } from "@angular/core"

export interface Menu{
    state: string,
    name: string,
    icon: string,
    role: string
}

const MENU_ITEMS = [
    {
        state: 'dashboard',
        name: "Dashboard",
        icon: 'dashboard',
        role: 'admin'
    }
]
@Injectable()
export class MenuItems {
    getMenuItems() : Menu[] {
        return MENU_ITEMS;
    }
}