import React from "react";
import cl from './Post.module.css'


const Post =(props)=>{
    return(
        <div className={cl.item}>{props.message}
            <div>Likes {props.likesCount}</div>
        </div>
    )
}
export default Post