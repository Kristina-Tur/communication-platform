import axios from "axios";
import {LoginParamsType} from "../auth/model/auth-reducer";
import {ProfileType} from "../layout/model/profile-reducer";
import {BaseResponse} from "../auth/types";
import {UserType} from "../layout/model/users-reducer";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '0d6fcc4b-d0b8-4c34-b068-91acef8dc727'
    }
})

export const AuthApi = {
    me() {
        return instance.get<BaseResponse<AuthResponse>>(`auth/me`)
    },
    login(values: LoginParamsType) {
        return instance.post<BaseResponse>(`auth/login`, values)
    },
    logout() {
        return instance.delete<BaseResponse>(`auth/login`)
    },

}

export const UsersApi = {
    fetchUsers(currentPage: number, pageSize: number) {
        return instance.get<GetUsersResponse>(`users?page=${currentPage}&count=${pageSize}`)
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(res => res.data)
    },
    unFollowUser(userId: number) {
        return instance.delete(`follow/${userId}`, {})
            .then(res => res.data)
    },

}

export const ProfileApi = {
    getUserProfile(userId: number) {
        return instance.get<ProfileType>(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put<BaseResponse>(`profile/status`, {status})
    },

}

export type AuthResponse = {
    id: number
    login: string
    email: string
}

export type GetUsersResponse = {
    items: UserType[]
    totalCount: number
    error: null
}