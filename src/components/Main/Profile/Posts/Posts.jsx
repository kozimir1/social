import React from "react";
import cl from './Posts.module.css'
import Post from "./Post/Post";


const Posts =()=>{
   const posts=[
       {id: 1, message: 'Hi in my fist prob post', likesCount:`15`},
       {id: 2, message: "It's my first post", likesCount:`0`},
   ]
    const postEL=posts
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