import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer
})

export const store = createStore(reducers)