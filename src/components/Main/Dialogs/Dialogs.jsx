import React from 'react';
import cl from "./Dialogs.module.css";
import PersonItem from "./PersonItem/PersonItem";
import PersonMessage from "./PersonMessage/PersonMassage";
import {Navigate} from "react-router-dom";


const Dialogs = (props) => {
    const personEl = props.persons
        .map(p => <PersonItem name={p.name} key={p.id}/>)

    const messageEL = props.messages
        .map(m => <PersonMessage message={m.message} key={m.id}/>)

    const onSendMessage = () => {
        props.sendMessage()
    }
    const onMessageChange =(e) => {
        const text = e.target.value
        props.messageChange(text)
        }
    return (
        <div className={cl.dialogs}>
            <div className={cl.items}>
                {personEl}
            </div>
            <div className={cl.messages}>
                {messageEL}
                <div><textarea placeholder="enter your message" onChange={ onMessageChange } value={props.newMessage}/>
                </div>
                <button className={cl.button} onClick={onSendMessage}>send message</button>
            </div>
        </div>
    )
}
export default Dialogs