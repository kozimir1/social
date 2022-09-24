// noinspection LanguageDetectionInspection

import {authAPI, profileAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA= 'social/auth/SET_USER_DATA';
const SET_USER_AVATAR ='social/auth/SET_USER_AVATAR';
const GET_CAPTCHA_URL_SUCCESS ='social/auth/GET_CAPTCHA_URL_SUCCESS';


const initialState = {
    userId: null,
    login: null,
    email: null,
    avatar:null,
    isAuth: false,
    captchaURL: null // if captcha not use

}

const authReducer = (state = initialState, action) => {
    // сюда переменные лучше не пихать в redusor (лишние операции)
    // попадаем каждый раз когда dispatchitся action даже если он нас не касается
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
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
export const setAuthUserData = (userId,login,email, isAuth, captchaURL) => ({type: SET_USER_DATA,payload:{userId,login,email,isAuth,captchaURL}})
export const getCaptchaURLSuccess = (captchaURL) => ({type: GET_CAPTCHA_URL_SUCCESS,payload:{captchaURL}})

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
export const login = (email, password, rememberMe, captcha = null)=> async (dispatch)=>{
    const response = await authAPI.login(email, password, rememberMe, captcha)
            if(response.data.resultCode===0){
                dispatch(authThunk())
            }
            else{
                if(response.data.resultCode===10){
                    dispatch(getCaptchaURL())
                }

                let error = response.data.fieldsErrors.length>0 ? {login: response.data.fieldsErrors[0].error}
                        : {_error: response.data.messages[0]}
                dispatch (stopSubmit( `Login`,error))
            }
}

export const logout = ()=> async (dispatch)=>{
   const response = await authAPI.logout()
            if(response.data.resultCode===0){
              dispatch (setAuthUserData(null,null, null, false, null))
            }
}
export const getCaptchaURL = ()=> async (dispatch)=>{
   const response = await securityAPI.getCaptchaURL()
           const captchaURL =response.data.url
              dispatch (getCaptchaURLSuccess(captchaURL))
}

export default authReducer