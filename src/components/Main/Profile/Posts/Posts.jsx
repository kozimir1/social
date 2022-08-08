import React from "react";
import cl from './Posts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../../Redux/profilepage-reduser";



const Posts = (props) => {
    const postEL = props.profilePage.posts
        .map(p => <div><Post message={p.message} likesCount={p.likesCount}/></div>)

    const createNewPostEl = React.createRef()
    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    const onPostChange= () => {
        const text = createNewPostEl.current.value
        props.dispatch(onPostChangeActionCreator(text))
    }
    return (
        <div className={cl.posts}>
            <div className={cl.title}>Posts</div>
            <div><textarea onChange={onPostChange} ref={createNewPostEl} value={props.profilePage.newTextPost}/></div>
            <button onClick={addPost} className="new">add Post</button>
            {postEL}
            {[`fsdfsdfsdf`, ` like spread`]}

        </div>
    )
}
export default Posts