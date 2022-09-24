import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = "social/profile/ADD-POST";
const GET_PROFILE = "social/profile/GET_PROFILE";
const SET_STATUS = `social/profile/SET_STATUS`
const DELETE_POST = `social/profile/DELETE_POST`
const SAVE_PHOTO = `social/profile/SAVE_PHOTO`
const STATUS_ERROR = `social/profile/STATUS_ERROR`

const initialState = {
    posts: [
        {id: 1, message: 'Hi in my fist prob post', likesCount: `15`},
        {id: 2, message: "It's my first post", likesCount: `0`},],
    newTextPost: `Hello everybody`,
    profile: null,
    status: ``,
    statusError: null,
}


const profilePageReducer = (state = initialState, action) => {
    // сюда переменные лучше не пихать в redusor (лишние операции)
    // попадаем каждый раз когда dispatchitся action даже если он нас не касается
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                likesCount: `1`,
                message: action.newPostText,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newTextPost: "",
            }
        case GET_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        case SAVE_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        case STATUS_ERROR:
            return {
                ...state,
                statusError: action.error
            }
        default:
            return state
    }
}

// profile util
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const getProfile = (profile) => ({type: GET_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO, photos})
export const statusErrorAC= (error) => ({type: STATUS_ERROR, error})
// санки
export const getSomeOneProfileThunk = (id) => dispatch => {
    profileAPI.profile(id).then(data => {
        dispatch(getProfile(data))
    })
}
export const getStatusThunk = (id) => dispatch => {
    profileAPI.getStatus(id).then(data => {
        dispatch(setStatus(data))
    })
}
export const setStatusThunk = (status) => dispatch => {
     profileAPI.setStatus(status).then(response => {
        if (response.data.resultCode === 0) {
             dispatch(setStatus(status))
        }else{
            dispatch(statusErrorAC(response.data.messages[0]))
        }
    }).catch(err => alert())


}
export const savePhoto = (file) => dispatch => {
    profileAPI.savePhoto(file).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos))

        }
    })
}
export const saveProfile = (data) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(data)
    if (response.data.resultCode === 0) {
        dispatch(getSomeOneProfileThunk(userId))
    } else {
        let errorMessage = response.data.messages[0].split('->')[1].split(')')[0].toLowerCase()
        console.log(errorMessage)
        dispatch(stopSubmit(`ProfileData`, {"contacts": {[errorMessage]: response.data.messages[0]}}))
        return Promise.reject(response.data.messages[0])
    }
}


export default profilePageReducer