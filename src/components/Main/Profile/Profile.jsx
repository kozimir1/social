import React from "react";
import cl from './Profile.module.css'
import Posts from "./Posts/Posts";
import Person from "./Person/Person";
import {addPost} from "../../../Redux/state";


const Profile = (props) => {
    return (
        <div className={cl.profile}>
            <Person/>
            <Posts profilePage={props.profilePage} dispatch = {props.dispatch}/>
        </div>
    )
}
export default Profile