import {UserType} from "./users-reducer";

export type AuthDataType = {
    id: number
    login: string
    email: string
    isAuth: boolean
}

const initialState = {
    id: 1,
    login: "",
    email: "",
    isAuth: false
}

export const authReducer = (state: AuthDataType = initialState, action: AuthActionType) => {
    switch (action.type) {
        case "SET-AUTH-USER-DATA":
            return {...state, ...action.data}
        case "SET-IS-AUTH": return {...state, isAuth: action.isAuth}
        default :
            return state
    }
}

export const setAuthUserData = (data: AuthDataType) => {
    return {type: 'SET-AUTH-USER-DATA', data} as const
}
export const setIsAuth = (isAuth: boolean) => {
    return {type: 'SET-IS-AUTH', isAuth} as const
}
type AuthActionType = ReturnType<typeof setAuthUserData> | ReturnType<typeof setIsAuth>