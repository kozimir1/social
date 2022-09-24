import React from "react";
import cl from './Guest.module.css'


import {Contacts} from "./Guest";
import {reduxForm} from "redux-form";
import {createField, Input} from "../../../common/FormsControl";

const ProfileFormData = (props) => {

    return (
        <form className={cl.data} onSubmit={props.handleSubmit}>
            <div className={cl.content}>
                <div><b> About: </b>{createField("About yourself","aboutMe", [],Input)}</div>
                <div><b>Name: </b>{createField("Full Name","fullName", [],Input)}</div>
                <div><b>Looking For a Job: </b>{createField("","lookingForAJob", [],Input,{type:"checkbox"})}</div>
                <div><b>My professional skills :</b>{createField("My professional skills", "lookingForAJobDescription", [],Input)}</div>
            </div>
            <div><b>Contacts:</b>
                {props.error && <div className={cl.formError}>{props.error}</div>}
                <div className={cl.socialContainer}>{Object.keys(props.profile.contacts).map(key => {
                    return <Contacts key={key} contactsTitle={key}
                                     contactsValue={createField(key,"contacts." + key,[],Input)}/>
                })}</div>
                {<button>Save</button>}
            </div>
        </form>
    )
}
const ProfileFormDataRedux = reduxForm({
    // a unique name for the form
    form: 'ProfileData'
})(ProfileFormData)

export default ProfileFormDataRedux