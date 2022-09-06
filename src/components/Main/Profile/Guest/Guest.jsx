import React from "react";
import cl from './Guest.module.css'
import Preloader from "../../../common/Preloader";
import ProfileStatusWithUseState from "./ProfileStatusWithUseState";

const Guest = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
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
            <ProfileStatusWithUseState setStatusThunk={props.setStatusThunk}
                           status={props.status}/>
        </div>
    )
}


export default Guest