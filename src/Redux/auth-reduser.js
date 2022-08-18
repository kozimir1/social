// noinspection LanguageDetectionInspection

import {authAPI, profileAPI} from "../api/api";

const SET_USER_DATA= 'SET_USER_DATA';
const SET_USER_AVATAR ='SET_USER_AVATAR';


const initialState = {
    userId: null,
    login: null,
    email: null,
    avatar:null,
    isAuth: false

}

const authReducer = (state = initialState, action) => {
    // сюда переменные лучше не пихать в redusor (лишние операции)
    // попадаем каждый раз когда dispatchitся action даже если он нас не касается
    switch (action.type) {
        case SET_USER_DATA:
            return {
             ...state, ...action.data, isAuth: true
            }
        case SET_USER_AVATAR:
            return {
             ...state, avatar: action.avatar
            }
        default:
            return state
    }

}


// profile util
export const setAuthUserData = (userId,login,email) => ({type: SET_USER_DATA,data:{userId,login,email}})
export const setAuthUserAvatar = (avatar) => ({type: SET_USER_AVATAR, avatar})

export const authThunk = ()=>(dispatch)=>{
    authAPI.authMe().then(data => {
       if(data.resultCode===0){
           const {id, login, email} = data.data
           dispatch(setAuthUserData(id, login, email))
           profileAPI.profile(id)
               .then(data=>{
                   const avatar = data.photos.small
                   dispatch(setAuthUserAvatar(avatar))
               })
       }


    })

}

export default authReducer