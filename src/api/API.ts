import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '0d6fcc4b-d0b8-4c34-b068-91acef8dc727'
    }
})

export const AuthApi = {
    me() {
        return instance.get(`auth/me`)
            .then(res => res.data)
    },
}

export const UsersApi = {
    fetchUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
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
    getUserProfile(userId: number){
       return  instance.get(`profile/` + userId)
    }
}