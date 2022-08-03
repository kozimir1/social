import React from "react";
import cl from './Profile.module.css'
import Posts from "./Posts/Posts";
import Person from "./Person/Person";


const Profile = () => {
    return (

        <div className={cl.profile}>
            <Person/>
            <Posts/>
        </div>
    )
}
export default Profile