import React from 'react';
import cl from "./Dialogs.module.css";
import PersonItem from "./PersonItem/PersonItem";
import PersonMessage from "./PersonMessage/PersonMassage";


const Dialogs = (props) => {

    const personEl = props.state.persons
        .map(p => <PersonItem name={p.name} id={p.id}/>)

    const messageEL =props.state.messages
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