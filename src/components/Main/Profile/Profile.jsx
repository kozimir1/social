import React from "react";
import cl from './Profile.module.css'
import Posts from "./Posts/Posts";
import Person from "./Person/Person";
import {addPost} from "../../../Redux/state";


const Profile = (props) => {
    return (
        <div className={cl.profile}>
            <Person/>
            <Posts posts={props.state.posts}  newTextPost={props.state.newTextPost} addPost={props.addPost} newPostPr={props.newPostPr}/>
        </div>
    )
}
export default Profile