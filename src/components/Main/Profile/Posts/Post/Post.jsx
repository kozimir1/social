import React from "react";
import cl from './Post.module.css'


const Post =(probs)=>{
    return(
        <div className={cl.item}>{probs.message}
            <div>Likes {probs.likesCount}</div>
        </div>
    )
}
export default Post