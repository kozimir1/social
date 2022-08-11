import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../../Redux/profilepage-reduser";
import Posts from "./Posts";
import StoreContext from "../../../../StoreContext";
import {connect} from "react-redux";


// const PostsСontainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 const state = store.getState()
//                 const addPost = () => {
//                     store.dispatch(addPostActionCreator())
//                 }
//                 const PostChange = (text) => {
//                     store.dispatch(onPostChangeActionCreator(text))
//                 }
//                 return <Posts newMessageChange={PostChange} addPost={addPost} posts={store.getState().profilePage.posts}
//                               newTextPost={store.getState().profilePage.newTextPost}/>
//             }}
//         </StoreContext.Consumer>
//     )
// }
const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newTextPost: state.profilePage.newTextPost
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
            },
        newMessageChange:(text) => {
            dispatch(onPostChangeActionCreator(text))
        }
    }
}

const PostsСontainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
export default PostsСontainer