import {CombinedState, combineReducers, createStore, Store} from "redux";
import {ProfilePageType, profileReducer} from "./profile-reducer";
import {MessagesPageType, messagesReducer} from "./messages-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {SidebarType} from "../layout/sections/Sidebar/Sidebar";
import {UsersPageType, usersReducer} from "./users-reducer";
import {appReducer, AppType} from "./app-reducer";

export type AppRootStateType = ReturnType<typeof reducers>

export type RootState = CombinedState<{
    sidebar: SidebarType;
    profilePage: ProfilePageType;
    messagesPage: MessagesPageType;
    usersPage: UsersPageType;
    app: AppType
}>;

const reducers = combineReducers({
    sidebar: sidebarReducer,
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    app: appReducer
})

export const store: Store<AppRootStateType, any> = createStore(reducers)

