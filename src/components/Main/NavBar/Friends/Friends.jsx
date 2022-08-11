import React from "react";
import cl from "./Friends.module.css"
import FriendsItem from "./FriendsItem/FriendsItem";


const  Friends = (props) => {
    const friend = props.friends
        .map(f=><FriendsItem name={f.name} key={f.id}/>)
    return(
            <div className={cl.friends}>

                <h4>Friends</h4>
                <div className={cl.items}>
                    {friend}
                </div>
            </div>
    )
}
export default Friends