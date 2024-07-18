import avatar from "../assets/images/avatar.png";

export type UserType = {
    id: string
    name: string
    avatar: string
    isFollow: boolean
    status: string
    country: string
    city: string
}
export type UsersPageType = {
    users: UserType[]
}

type SendMessageActionType = ReturnType<typeof followUserAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>
export type UsersReducerActionType =
    SendMessageActionType | SetUsersActionType

const initialState: UsersPageType = {
    users: []
}

export const usersReducer = (state: UsersPageType = initialState, action: UsersReducerActionType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(user => user.id === action.payload.userId
                ? {...user, isFollow: !action.payload.isFollow}
                : user)}
        case "SET-USERS":
            return {...state, users: [...state.users, ...action.payload.users]}
        default :
            return state
    }
}

export const followUserAC = (userId: string, isFollow: boolean) => {
    return {type: 'FOLLOW', payload: {userId, isFollow}} as const
}
export const setUsersAC = (users: []) => {
    return {type: 'SET-USERS', payload: {users}} as const
}
