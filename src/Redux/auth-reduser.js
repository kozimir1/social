// noinspection LanguageDetectionInspection

import {authAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA= 'social/auth/SET_USER_DATA';
const SET_USER_AVATAR ='social/auth/SET_USER_AVATAR';


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
             ...state, ...action.payload
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
export const setAuthUserData = (userId,login,email, isAuth) => ({type: SET_USER_DATA,payload:{userId,login,email,isAuth}})
export const setAuthUserAvatar = (avatar) => ({type: SET_USER_AVATAR, avatar})

export const authThunk = ()=> async (dispatch)=>{
    const response = await authAPI.authMe()
       if(response.data.resultCode===0){
           const {id, login, email} = response.data.data
           dispatch(setAuthUserData(id, login, email, true))
           profileAPI.profile(id)
               .then(data=>{
                   const avatar = data.photos.small
                   dispatch(setAuthUserAvatar(avatar))
               })
       }

}
export const login = (email, password, rememberMe)=> async (dispatch)=>{
    const response = await authAPI.login(email, password, rememberMe)
            if(response.data.resultCode===0){
                dispatch(authThunk())
            }
            else{
                let error = response.data.fieldsErrors.length>0 ? {login: response.data.fieldsErrors[0].error}
                        : {_error: response.data.messages[0]}
                dispatch (stopSubmit( `Login`,error))
            }
}
export const logout = ()=> async (dispatch)=>{
   const response = await authAPI.logout()
            if(response.data.resultCode===0){
              dispatch (setAuthUserData(null,null, null, false))
            }
}

export default authReducer