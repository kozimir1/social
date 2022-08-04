import React from "react";
import cl from './Profile.module.css'
import Posts from "./Posts/Posts";
import Person from "./Person/Person";


const Profile = (props) => {
    return (
        <div className={cl.profile}>
            <Person/>
            <Posts posts={props.state.posts}/>
        </div>
    )
}
export default Profile