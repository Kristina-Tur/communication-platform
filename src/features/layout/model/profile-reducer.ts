import {v1} from "uuid";
import {Dispatch} from "redux";
import {ProfileApi} from "../../api/API";
import {handleServerNetworkError} from "../../../common/utils/handleServerNetworkError";
import {handleServerAppError} from "../../../common/utils/handleServerAppError";

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
    profile: null | ProfileType
    status: string
}

type AddPostActionType = ReturnType<typeof addPostAC>
type UpdatePostTextActionType = ReturnType<typeof updatePostTextAC>
export type ProfilePageActionType =
    AddPostActionType |
    UpdatePostTextActionType |
    ReturnType<typeof setUserProfileAC> |
    ReturnType<typeof setStatusAC>

const initialState = {
    posts: [
        {id: v1(), postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id: v1(), postText: ' Lorem ipsum dolor sit amet'},
    ],
    postText: '',
    profile: null,
    status: ''
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
        case "SET-STATUS": {
            return {...state, status: action.status}
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
export const setStatusAC = (status: string) => {
    return {type: 'SET-STATUS', status} as const
}

export const getUserProfileTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        ProfileApi.getUserProfile(userId)
            .then(res => {
                    dispatch(setUserProfileAC(res.data))
            })
            .catch(e =>  handleServerNetworkError(e, dispatch));
    }
}
export const getStatusTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        ProfileApi.getStatus(userId)
            .then(res => {
                dispatch(setStatusAC(res.data))
            })
            .catch(e =>  handleServerNetworkError(e, dispatch))
    }
}
export const updateStatusTC = (status: string) => {
    return (dispatch: Dispatch) => {
        ProfileApi.updateStatus(status)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setStatusAC(status))
                }else{
                    handleServerAppError(res.data, dispatch)
                }
            })
            .catch(e =>  handleServerNetworkError(e, dispatch))
    }
}

