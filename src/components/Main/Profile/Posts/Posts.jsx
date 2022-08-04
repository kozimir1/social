import React from "react";
import cl from './Posts.module.css'
import Post from "./Post/Post";


const Posts =(props)=>{
    const postEL=props.posts
        .map(p=> <div><Post message = {p.message} likesCount={p.likesCount}/></div>)
    return(
                <div className={cl.posts}>
                    <div className={cl.title}>Posts</div>
                    <div><textarea></textarea></div>
                    <div className="new">New Posts</div>
                    {[`fsdfsdfsdf`, ` like spread`]}
                    {postEL}
                </div>
    )
}
export default Posts