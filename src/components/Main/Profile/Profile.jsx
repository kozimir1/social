import React from "react";
import cl from './Profile.module.css'
import Person from "./Person/Person";
import PostsСontainer from "./Posts/PostsСontainer";


const Profile = (props) => {
    return (
        <div className={cl.profile}>
            <Person/>
            <PostsСontainer/>
        </div>
    )
}
export default Profile