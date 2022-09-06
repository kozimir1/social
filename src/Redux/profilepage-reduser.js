import {profileAPI} from "../api/api";

const ADD_POST = "social/profile/ADD-POST";
const GET_PROFILE = "social/profile/GET_PROFILE";
const SET_STATUS = `social/profile/SET_STATUS`
const DELETE_POST = `social/profile/DELETE_POST`

const initialState = {
    posts: [
        {id: 1, message: 'Hi in my fist prob post', likesCount: `15`},
        {id: 2, message: "It's my first post", likesCount: `0`},],
    newTextPost: `Hello everybody`,
    profile: null,
    status: ``,
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
        default:
            return state
    }
}

// profile util
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const getProfile = (profile) => ({type: GET_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
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
        }
    })
}


export default profilePageReducer