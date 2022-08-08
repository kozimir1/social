import React from 'react';
import cl from "./Dialogs.module.css";
import PersonItem from "./PersonItem/PersonItem";
import PersonMessage from "./PersonMessage/PersonMassage";
import {onMessageChangeActionCreator, sendMessageActionCreator} from "../../../Redux/dialogspage-reduser";


const Dialogs = (props) => {
    const personEl = props.state.persons
        .map(p => <PersonItem name={p.name} id={p.id}/>)

    const messageEL = props.state.messages
        .map(m => <PersonMessage message={m.message}/>)

    const createMessageEl = React.createRef()
    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }
    const onMessageChange =() => {
        const text = createMessageEl.current.value
        props.dispatch(onMessageChangeActionCreator(text))
        }
    return (
        <div className={cl.dialogs}>
            <div className={cl.items}>
                {personEl}
            </div>
            <div className={cl.messages}>
                {messageEL}
                <div><textarea onChange={ onMessageChange } ref={createMessageEl} value={props.state.newMessage}/>
                </div>
                <button className={cl.button} onClick={sendMessage}>send message</button>
            </div>
        </div>
    )
}
export default Dialogs