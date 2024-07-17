import {v1} from "uuid";
import {SidebarType} from "../layout/sections/Sidebar/Sidebar";


export type SidebarReducerActionType = {}

const initialState = {
    menu: [
        {id: v1(), href: '/profile', title: 'Profile'},
        {id: v1(), href: '/messages', title: 'Messages'},
        {id: v1(), href: '/users', title: 'Users'},
        {id: v1(), href: '/news', title: 'News'},
        {id: v1(), href: '/music', title: 'Music'},
        {id: v1(), href: '/settings', title: 'Settings'}
    ]
}

export const sidebarReducer = (state: SidebarType = initialState, action: SidebarReducerActionType) => {
    switch (action) {
        default :
            return state
    }
}
