import {Action, AnyAction, Dispatch} from "redux";
import {AuthApi, AuthResponse} from "../../api/API";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../../../app/store-redux";
import {handleServerAppError} from "../../../common/utils/handleServerAppError";
import {handleServerNetworkError} from "../../../common/utils/handleServerNetworkError";

export type initialStateType = {
    id: number
    login: string
    email: string
    isLoginIn: boolean
    isAuth: boolean
}

const initialState = {
    id: 1,
    login: '',
    email: '',
    isLoginIn: false,
    isAuth: false
}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}

export const authReducer = (state: initialStateType = initialState, action: AuthActionType) => {
    switch (action.type) {
        case "SET-AUTH-USER-DATA":
            return {...state, ...action.data}
        case "SET-IS-AUTH": return {...state, isAuth: action.isAuth}
        case 'SET-IS-LOGIN-IN': return {...state, isLoginIn: action.isLoginIn}
        default :
            return state
    }
}

export const setAuthUserData = (data: AuthResponse) => {
    return {type: 'SET-AUTH-USER-DATA', data} as const
}
export const setIsAuth = (isAuth: boolean) => {
    return {type: 'SET-IS-AUTH', isAuth} as const
}
export const setIsLoggedInAC = (isLoginIn: boolean) => {
    return {type: 'SET-IS-LOGIN-IN', isLoginIn} as const
}

type AuthActionType = ReturnType<typeof setAuthUserData> | ReturnType<typeof setIsAuth> | ReturnType<typeof setIsLoggedInAC>

export const setIsAuthTC = () => {
    return (dispatch: Dispatch) => {
        AuthApi.me()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setIsAuth(true))
                    dispatch(setIsLoggedInAC(true))
                    dispatch(setAuthUserData(res.data.data))
                }
            })
            .catch(e => console.log(e));
    }
}

export const loginTC = (values: LoginParamsType) => {
    return (dispatch: ThunkDispatch<AppRootStateType, unknown, AnyAction>) => {
        AuthApi.login(values)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setIsLoggedInAC(true))
                }else {
                    handleServerAppError(res.data, dispatch)
                }
            })
            .catch(e => handleServerNetworkError(e, dispatch));
    }
}
export const logoutTC = () => {
    return (dispatch: Dispatch) => {
        AuthApi.logout()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setIsLoggedInAC(false))
                }
            })
            .catch(e => console.log(e));
    }
}
