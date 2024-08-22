export type AppType = {
    isLoading: boolean
    error: string | null
}
const initialState = {
    isLoading: false,
    error: null
}

export const appReducer = (state: AppType = initialState, action: AppActionType): AppType => {
    switch (action.type) {
        case 'APP/SET-LOADER': return {...state, isLoading: action.isLoading}
        case "APP/SET-ERROR": return {...state, error: action.error}
        default :
            return state
    }
}

export type AppActionType = ReturnType<typeof setAppLoaderAC> | ReturnType<typeof setAppErrorAC>

export const setAppLoaderAC = (isLoading: boolean) => {
    return {type: 'APP/SET-LOADER', isLoading} as const
}
export const setAppErrorAC = (error: string | null) => {
    return {type: 'APP/SET-ERROR', error} as const
}
