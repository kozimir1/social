import React from 'react';
import cl from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const PersonItem = (probs) => {
    const path = '/dialogs/' + probs.id
    return (
        <div className={cl.person}>
            <NavLink to={path}>{probs.name}</NavLink></div>

    )
}

const PersonMessage = (probs) => {
    return (
        <div className={cl.message}>{probs.message}</div>
    )
}

const Dialogs = () => {
    const persons = [
        {id: 1, name: "Max"},
        {id: 2, name: "Jake"},
        {id: 3, name: "Iren"},
        {id: 4, name: "Andreu"},
        {id: 5, name: "Mike"},
        {id: 6, name: "Victor"},
        {id: 7, name: "Kate"},
    ]
    const messages = [
        {id: 1, message: "Hello"},
        {id: 2, message: "Hi"},
        {id: 3, message: "well done"},
        {id: 4, message: "well"},
    ]
    const personEl = persons
        .map(p => <PersonItem name={p.name} id={p.id}/>)

    const messageEL = messages
        .map(m=> <PersonMessage message={m.message}/>)
    return (
        <div className={cl.dialogs}>
            <div className={cl.items}>
                {personEl}
            </div>
            <div className={cl.messages}>
                {messageEL}
            </div>
        </div>
    )
}
export default Dialogs