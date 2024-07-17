import {v1} from "uuid";

export type PostsType = {
    id: string
    postText: string
}
export type ProfilePageType = {
    posts: PostsType[]
    postText: string
}

type AddPostActionType = ReturnType<typeof addPostAC>
type UpdatePostTextActionType = ReturnType<typeof updatePostTextAC>
export type ProfileReducerActionType =
    AddPostActionType |
    UpdatePostTextActionType

const initialState = {
    posts: [
        {id: v1(), postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id: v1(), postText: ' Lorem ipsum dolor sit amet'},
    ],
    postText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerActionType) => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {id: v1(), postText: state.postText}
            return {...state, postText: '', posts: [newPost, ...state.posts]}
        }
        case 'UPDATE-POST-TEXT': {
            return {...state, postText: action.value}
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