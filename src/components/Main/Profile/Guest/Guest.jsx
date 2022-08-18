import React from "react";
import cl from './Guest.module.css'
import Preloader from "../../../common/Preloader";

const Guest = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={cl.guest}>
            <div className={cl.image}><img src={props.profile.photos.large} alt='картинки нет'/></div>
            <div className={cl.content}>
                <div>About: {props.profile.aboutMe}</div>
                <div>Name: {props.profile.fullName}</div>
                <div>Find job: {props.profile.lookingForAJob
                    ? props.profile.lookingForAJobDescription
                    : "не ищу"} </div>
            </div>
        </div>

    )
}


export default Guest