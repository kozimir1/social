import * as axios from "axios";
import {saveProfile} from "../Redux/profilepage-reduser";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {'API-KEY': `d36dfecc-3528-4f07-8438-53fec58caedc`},
    withCredentials: true
})

export const usersAPI = {
    getUsers(pageCount = 1, pageNumber = 4
    ) {
        return instance.get(`users?count=${pageCount}&page=${pageNumber}`)
            .then(response => response.data)
    }
}
export const followAPI = {
    unfol(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    fol(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    }
}
export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    },
    login (email, password, rememberMe, captcha) {
        return instance.post(`/auth/login`, {email, password, rememberMe, captcha})
    },
    logout () {
        return instance.delete(`/auth/login`)
    }
}
export const securityAPI = {
    getCaptchaURL() {
        return instance.get(`/security/get-captcha-url`)
    },
}

export const profileAPI = {
    profile(id) {
        return instance.get(`profile/${id}`)
            .then(response => response.data)
    },
    getStatus(id) {
        return instance.get(`/profile/status/${id}`)
            .then(response => response.data)
    },

    setStatus(status) {
        return instance.put(`/profile/status/`, {status: status})
    },
    saveProfile(profile) {
        return instance.put(`/profile`, profile)
    },

    savePhoto(photo) {
        const formData = new FormData();
        formData.append("image", photo)
        return instance.put(`/profile/photo`, formData ,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}
