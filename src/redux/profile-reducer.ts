import {v1} from "uuid";
import {ActionType, ProfilePageType} from "./store";

const initialState = {
    posts: [
        {id: v1(), postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id: v1(), postText: ' Lorem ipsum dolor sit amet'},
    ],
    postText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {id: v1(), postText: state.postText}
            state.posts.unshift(newPost)
            state.postText = ''
            return state
        }
        case 'UPDATE-POST-TEXT': {
            state.postText = action.value
            return state
        }
        default :
            return state
    }
}

export const addPostAC = () => {
    return {type: 'ADD-POST'} as const
}
export const updatePostTextAC = (value: string) => {
    return {type: 'UPDATE-POST-TEXT', value} as const
}