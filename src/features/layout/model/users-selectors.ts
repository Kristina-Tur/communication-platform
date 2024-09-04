import {RootState} from "../../../app/store-redux";

export const getUsers = (state: RootState) => {
    return state.usersPage.items
}
export const getPageSize = (state: RootState) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: RootState) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: RootState) => {
    return state.usersPage.currentPage
}
export const getFollowingInProgress = (state: RootState) => {
    return state.usersPage.followingInProgress
}
export const getIsLoginIn = (state: RootState) => {
    return state.auth.isLoginIn
}
