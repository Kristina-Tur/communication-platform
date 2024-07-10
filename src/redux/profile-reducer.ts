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
            const copyState = {...state}
            copyState.posts = [...state.posts]
            copyState.posts.unshift(newPost)
            copyState.postText = ''
            return copyState
        }
        case 'UPDATE-POST-TEXT': {
            return {...state, postText: action.value}
           /* state.postText = action.value
             state*/
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