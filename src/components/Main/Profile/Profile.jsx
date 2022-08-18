import React from "react";
import cl from './Profile.module.css'
import Person from "./Person/Person";
import PostsСontainer from "./Posts/PostsСontainer";
import Guest from "./Guest/Guest";


const Profile = (props) => {
    return (
        <div className={cl.profile}>
            <Person/>
            <Guest profile={props.profile}/>
            <PostsСontainer/>
        </div>
    )
}
export default Profile