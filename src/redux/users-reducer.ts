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
    totalCount: number
    error: null
}

type SendMessageActionType = ReturnType<typeof followUserAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>
export type UsersReducerActionType =
    SendMessageActionType | SetUsersActionType

const initialState: UsersPageType = {
    items: [],
    totalCount: 5,
    error: null
}

export const usersReducer = (state: UsersPageType = initialState, action: UsersReducerActionType): UsersPageType => {

    switch (action.type) {
        case "FOLLOW":
            return {...state, items: state.items.map(user => user.id === action.payload.userId
                ? {...user,  followed: !action.payload.isFollow}
                : user)}
        case "SET-USERS":
            return (
                {...state, items: [...state.items, ...action.payload.users]}
            )

        default :
            return state
    }
}

export const followUserAC = (userId: number, isFollow: boolean) => {
    return {type: 'FOLLOW', payload: {userId, isFollow}} as const
}
export const setUsersAC = (users: UserType[]) => {
    return {type: 'SET-USERS', payload: {users}} as const
}
