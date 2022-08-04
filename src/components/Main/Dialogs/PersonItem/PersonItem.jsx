import React from 'react';
import cl from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const PersonItem = (props) => {
    const path = '/dialogs/' + props.id
    return (
        <div className={cl.person}>
            <div className={cl.ava}></div>
            <NavLink to={path}>{props.name}</NavLink></div>

    )
}


export default PersonItem