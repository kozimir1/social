import React from "react";
import cl from "./../Friends.module.css"




const FriendsItem = (props)=>{
    return( <div className={cl.item}>
        <div className={cl.picture}></div>
        <div className={cl.name}>{props.name}</div>
    </div>)
}

export default FriendsItem