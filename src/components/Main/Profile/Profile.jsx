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
                   status={props.status} isAuth={props.isAuth} isOwner={props.isOwner}
                   savePhoto={props.savePhoto} saveProfile={props.saveProfile}
                   statusError={props.statusError} statusErrorAC={props.statusErrorAC}/>
            <PostsСontainer/>
        </div>
    )
}
export default Profile