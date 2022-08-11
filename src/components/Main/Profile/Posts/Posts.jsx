import React from "react";
import cl from './Posts.module.css'
import Post from "./Post/Post";



const Posts = (props) => {
    const postEL = props.posts
        .map(p =><Post key={p.id} message={p.message} likesCount={p.likesCount} />)

    const createNewPostEl = React.createRef()
    const onAddPost = () => {
        props.addPost()
    }
    const onPostChange= () => {
        const text = createNewPostEl.current.value
        props.newMessageChange(text)
    }
    return (
        <div className={cl.posts}>
            <div className={cl.title}>Posts</div>
            <div><textarea onChange={onPostChange} ref={createNewPostEl} value={props.newTextPost}/></div>
            <button onClick={onAddPost} className="new">add Post</button>
            {postEL}
            {/*{[`fsdfsdfsdf`, ` like spread`]}*/}
        </div>
    )
}
export default Posts