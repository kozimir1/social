import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {'API-KEY': `d36dfecc-3528-4f07-8438-53fec58caedc`},
    withCredentials: true
})

export const usersAPI = {
    getUsers(pageCount=1, pageNumber=4
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
            .then(response => response.data)
    }
}
export const profileAPI = {
    profile (id){
        return instance.get(`profile/${id}`)
            .then(response => response.data)
    }
}

