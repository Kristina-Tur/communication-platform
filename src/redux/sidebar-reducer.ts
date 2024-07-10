import {v1} from "uuid";
import {ActionType, ProfilePageType, SidebarType} from "./store";
import {AppRootStateType} from "./store-redux";

const initialState = {
    menu: [
        {id: v1(), href: '/profile', title: 'Profile'},
        {id: v1(), href: '/messages', title: 'Messages'},
        {id: v1(), href: '/news', title: 'News'},
        {id: v1(), href: '/music', title: 'Music'},
        {id: v1(), href: '/settings', title: 'Settings'}
    ]
}

export const sidebarReducer = (state: SidebarType = initialState, action: ActionType) => {
    switch (action.type) {
        default :
            return state
    }
}
