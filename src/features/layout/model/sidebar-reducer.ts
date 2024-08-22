import {SidebarType} from "../ui/sections/sidebar/Sidebar";
import {v1} from "uuid";


export type SidebarReducerActionType = {}

const initialState = {
    menu: [
        {id: v1(), href: '/profile', title: 'Profile'},
        {id: v1(), href: '/messages', title: 'Messages'},
        {id: v1(), href: '/users', title: 'Users'}
    ]
}

export const sidebarReducer = (state: SidebarType = initialState, action: SidebarReducerActionType) => {
    switch (action) {
        default :
            return state
    }
}
