const ADD_POST = "ADD-POST";
const UPDATE_NEW_TEXT_POST = "UPDATE-NEW-TEXT-POST";

const profilePageReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                likesCount: `1`,
                message: state.newTextPost,
            }
            state.posts.push(newPost)
            state.newTextPost = ""
            return state
        case UPDATE_NEW_TEXT_POST:
            state.newTextPost = action.newText
            return state
        default:
            return state
    }
}

// profile util
export const addPostActionCreator = ()=>({type: ADD_POST})

export const onPostChangeActionCreator = (text)=>
    ({type: UPDATE_NEW_TEXT_POST, newText: text})

export default profilePageReducer