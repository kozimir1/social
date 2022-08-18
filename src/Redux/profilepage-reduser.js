import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_TEXT_POST = "UPDATE-NEW-TEXT-POST";
const GET_PROFILE = "GET_PROFILE";

const initialState = {
    posts: [
        {id: 1, message: 'Hi in my fist prob post', likesCount: `15`},
        {id: 2, message: "It's my first post", likesCount: `0`},],
    newTextPost: `Hello everybody`,
    profile: null,
}



const profilePageReducer = (state=initialState, action) => {
    // сюда переменные лучше не пихать в redusor (лишние операции)
    // попадаем каждый раз когда dispatchitся action даже если он нас не касается
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                likesCount: `1`,
                message: state.newTextPost,
            }
           return{...state,
                posts:[...state.posts, newPost],
                newTextPost :"",
            }
        case UPDATE_NEW_TEXT_POST:
            return{...state,
                newTextPost: action.newText,
            }
        case GET_PROFILE:
            return {
                ...state, profile: action.profile
            }
        default:
            return state
    }
}

// profile util
export const addPostActionCreator = ()=>({type: ADD_POST})
export const getProfile = (profile)=>({type: GET_PROFILE, profile})
export const onPostChangeActionCreator = (text)=> ({type: UPDATE_NEW_TEXT_POST, newText: text})

export const getSomeOneProfileThunk = (id) => dispatch =>{
    profileAPI.profile(id).then(data => {
        dispatch(getProfile(data))
    })
}

export default profilePageReducer