import {v1} from "uuid";
import {Dispatch} from "redux";
import {ProfileApi} from "../../api/API";

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: null,
        vk: string
        twitter: string
        instagram: string
        youtube: null,
        github: string
        mainLink: null
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type PostsType = {
    id: string
    postText: string
}
export type ProfilePageType = {
    posts: PostsType[]
    postText: string
    profile: ProfileType | null
}

type AddPostActionType = ReturnType<typeof addPostAC>
type UpdatePostTextActionType = ReturnType<typeof updatePostTextAC>
export type ProfilePageActionType =
    AddPostActionType |
    UpdatePostTextActionType |
    ReturnType<typeof setUserProfileAC>

const initialState = {
    posts: [
        {id: v1(), postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id: v1(), postText: ' Lorem ipsum dolor sit amet'},
    ],
    postText: '',
    profile: null
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfilePageActionType) => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {id: v1(), postText: state.postText}
            return {...state, postText: '', posts: [newPost, ...state.posts]}
        }
        case 'UPDATE-POST-TEXT': {
            return {...state, postText: action.value}
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
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
export const setUserProfileAC = (profile: ProfileType) => {
    return {type: 'SET-USER-PROFILE', profile} as const
}

export const getUserProfileTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        ProfileApi.getUserProfile(userId)
            .then(res => {
                dispatch(setUserProfileAC(res.data))

            })
            .catch(e => console.log(e));
    }
}
