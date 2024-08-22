import {applyMiddleware, CombinedState, combineReducers, createStore, Store} from "redux";
import {ProfilePageType, profileReducer} from "../features/layout/model/profile-reducer";
import {MessagesPageType, messagesReducer} from "../features/layout/model/messages-reducer";
import {sidebarReducer} from "../features/layout/model/sidebar-reducer";
import {SidebarType} from "../features/layout/ui/sections/sidebar/Sidebar";
import {UsersPageType, usersReducer} from "../features/layout/model/users-reducer";
import {appReducer, AppType} from "./app-reducer";
import {authReducer, initialStateType} from "../features/auth/model/auth-reducer";
import thunk from "redux-thunk";

export type AppRootStateType = ReturnType<typeof reducers>

export type RootState = CombinedState<{
    sidebar: SidebarType;
    profilePage: ProfilePageType;
    messagesPage: MessagesPageType;
    usersPage: UsersPageType;
    app: AppType
    auth: initialStateType
}>;

const reducers = combineReducers({
    sidebar: sidebarReducer,
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    app: appReducer,
    auth: authReducer
})

export const store: Store<AppRootStateType, any> = createStore(reducers, applyMiddleware(thunk))

