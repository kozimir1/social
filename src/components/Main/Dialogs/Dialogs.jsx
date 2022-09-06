import React from 'react';
import cl from "./Dialogs.module.css";
import PersonItem from "./PersonItem/PersonItem";
import PersonMessage from "./PersonMessage/PersonMassage";
import {Field, reduxForm} from "redux-form";
import { maxLengthCreator, required} from "../../../util/validators/validators";
import {TextAria} from "../../common/FormsControl";



const maxLength15 =maxLengthCreator (15)
const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextAria} name="newMessage"
                validate={[required, maxLength15]}
                       placeholder="enter your message" />
            </div>
            <div>
                <button className={cl.button}>send message</button>
            </div>
        </form>
    )
}
const DialogsFormRedux = reduxForm({form: 'dialogsForm'})(DialogsForm)

const Dialogs = (props) => {
    const personEl = props.persons
        .map(p => <PersonItem name={p.name} key={p.id}/>)

    const messageEL = props.messages
        .map(m => <PersonMessage message={m.message} key={m.id}/>)

    // const onSendMessage = () => {
    //     props.sendMessage()
    // }
    // const onMessageChange = (e) => {
    //     const text = e.target.value
    //     props.messageChange(text)
    // }
    const newDialog = (values)=>{
        props.sendMessage(values.newMessage)
    }
    return (
        <div className={cl.dialogs}>
            <div className={cl.items}>
                {personEl}
            </div>
            <div className={cl.messages}>
                {messageEL}
                <DialogsFormRedux onSubmit={newDialog}/>
            </div>

        </div>
    )
}
export default Dialogs