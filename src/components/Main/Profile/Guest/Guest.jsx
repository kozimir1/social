import React, {useState} from "react";
import cl from './Guest.module.css'
import Preloader from "../../../common/Preloader";
import ProfileStatusWithUseState from "./ProfileStatusWithUseState";
import empty from "../../../../img/empty.png"
import ProfileFormData from "./ProfileFormData";

const Guest = (props) => {
    const [editMode, setEditMode] = useState(false)
    const goToEditMode = ()=>{
        setEditMode(true)
    }
    const onSubmit=(data)=>{
         props.saveProfile(data).then(()=>{
             setEditMode(false)
         })







    }
    if (!props.profile) {
        return <Preloader/>
    }
    const photoSelect = (e) => {
        props.savePhoto(e.target.files[0])
    }


    return (
        <div>
            <div className={cl.guest}>
                <div className={cl.image}><img src={props.profile.photos.large || empty} alt='картинки нет'/>
                    {props.isOwner && <input onChange={photoSelect} type="file"/>}</div>

                {editMode ? <ProfileFormData initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
                    : <ProfileData isOwner={props.isOwner} profile={props.profile} goToEditMode={goToEditMode}/>}
            </div>
            <ProfileStatusWithUseState setStatusThunk={props.setStatusThunk}
                                       status={props.status} statusError={props.statusError}
                                       statusErrorAC={props.statusErrorAC}/>
        </div>
    )
}
export const Contacts = ({contactsTitle, contactsValue}) => {
    return <div className={cl.socials}><b>{contactsTitle}: </b>{contactsValue}</div>
}
const ProfileData = (props) => {
return (
    <div className={cl.data}>
        <div className={cl.content}>
            <div><b> About: </b>{props.profile.aboutMe || `no info`}</div>
            <div><b>Name: </b>{props.profile.fullName}</div>
            <div><b>Looking For a Job: </b> {props.profile.lookingForAJob
                ? "yes" : "no"} </div>
            {props.profile.lookingForAJob && <div><b>My professional skills :</b> {props.profile.lookingForAJobDescription}</div>}
        </div>
        <div><b>Contacts:</b>
            <div className={cl.socialContainer}>{Object.keys(props.profile.contacts).map(key => {
                return <Contacts key={key} contactsTitle={key}
                                 contactsValue={props.profile.contacts[key]}/>
            })}</div>
            {props.isOwner && <button onClick={props.goToEditMode}>Edit</button>}
        </div>
    </div>
)
}

export default Guest