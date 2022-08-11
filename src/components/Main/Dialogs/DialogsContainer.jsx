import React from 'react';
import {onMessageChangeActionCreator, sendMessageActionCreator} from "../../../Redux/dialogspage-reduser";
import Dialogs from "./Dialogs";
import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";


// const DialogsContainer = () => {
//     return <StoreContext.Consumer>
//         {store => {
//             const state = store.getState()
//
//             const sendMessage = () => {
//                 store.dispatch(sendMessageActionCreator())
//             }
//             const onMessageChange = (text) => {
//                 store.dispatch(onMessageChangeActionCreator(text))
//             }
//             return <Dialogs messageChange={onMessageChange} sendMessage={sendMessage}
//                             persons={state.dialogsPage.persons}
//                             messages={state.dialogsPage.messages} newMessage={state.dialogsPage.newMessage}/>
//         }
//         }
//     </StoreContext.Consumer>
//
// }
const mapStateToProps = (state) => {
    return {
        persons: state.dialogsPage.persons,
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        messageChange: (text) => {
            dispatch(onMessageChangeActionCreator(text))
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer
