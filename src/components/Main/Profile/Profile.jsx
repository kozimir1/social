import React from "react";
import cl from './Profile.module.css'
import Person from "./Person/Person";
import PostsСontainer from "./Posts/PostsСontainer";
import Guest from "./Guest/Guest";


const Profile = (props) => {

    return (
        <div className={cl.profile}>
            <Person name="dima"/>
            <Guest profile={props.profile} setStatusThunk={props.setStatusThunk}
                   status={props.status} isAuth={props.isAuth}/>
            <PostsСontainer/>
        </div>
    )
}
export default Profile