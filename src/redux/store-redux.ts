import {CombinedState, combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {MessagesPageType, ProfilePageType, SidebarType} from "./store";

export type AppRootStateType = ReturnType<typeof reducers>

export type RootState = CombinedState<{
    sidebar: SidebarType;
    profilePage: ProfilePageType;
    messagesPage: MessagesPageType;
}>;

const reducers = combineReducers({
    sidebar: sidebarReducer,
    profilePage: profileReducer,
    messagesPage: messagesReducer
})

export const store: Store<AppRootStateType, any> = createStore(reducers)

