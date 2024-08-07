export type AppType = {
    isLoading: boolean
}
const initialState = {
    isLoading: false
}

export const appReducer = (state: AppType = initialState, action: AppActionType): AppType => {
    switch (action.type) {
        case 'APP/SET-LOADER': return {...state, isLoading: action.isLoading}
        default :
            return state
    }
}

export type AppActionType = ReturnType<typeof setAppLoaderAC>

export const setAppLoaderAC = (isLoading: boolean) => {
    return {type: 'APP/SET-LOADER', isLoading} as const
}