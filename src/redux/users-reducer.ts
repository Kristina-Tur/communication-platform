import avatar from "../assets/images/avatar.png";

export type UserType = {
    /*id: string
    name: string
    avatar: string
    isFollow: boolean
    status: string
    country: string
    city: string*/
    name: string
    id: number
    photos: {
        "small": null,
        "large": null
    },
    status: null,
    followed: boolean
}
export type UsersPageType = {
    items: UserType[]
    /*totalCount: number
    error: null*/
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type SetFollowUserActionType = ReturnType<typeof followUserAC>
type SetUnFollowUserActionType = ReturnType<typeof unFollowUserAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>
type SeCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>

export type UsersReducerActionType =
    SetFollowUserActionType | SetUsersActionType | SeCurrentPageActionType | SetTotalUsersCountActionType | SetUnFollowUserActionType

const initialState: UsersPageType = {
    items: [] as UserType[],
    /*totalCount: 5,
    error: null,*/
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1
}

export const usersReducer = (state: UsersPageType = initialState, action: UsersReducerActionType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":{
            console.log(1)
            return {...state, items: state.items.map(user => user.id === action.payload.userId
                    ? {...user,  followed: true}
                    : user)}
        }

         case "UN-FOLLOW":
            return {...state, items: state.items.map(user => user.id === action.payload.userId
                ? {...user,  followed: false}
                : user)}
        case "SET-USERS":
            return (
                {...state, items: action.payload.users}
            )
        case "SET-CURRENT-PAGE": return {...state, currentPage: action.payload.currentPage}
        case "SET-TOTAL-USERS-COUNT": return {...state, totalUsersCount: action.payload.totalUsersCount}
        default :
            return state
    }
}

export const followUserAC = (userId: number) => {
    return {type: 'FOLLOW', payload: {userId}} as const
}
export const unFollowUserAC = (userId: number) => {
    return {type: 'UN-FOLLOW', payload: {userId}} as const
}

export const setUsersAC = (users: UserType[]) => {
    return {type: 'SET-USERS', payload: {users}} as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {type: 'SET-CURRENT-PAGE', payload: {currentPage}} as const
}
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {type: 'SET-TOTAL-USERS-COUNT', payload: {totalUsersCount}} as const
}
