import React from 'react';
import {sendMessageActionCreator} from "../../../Redux/dialogspage-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";



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
        // auth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (message) => {
            dispatch(sendMessageActionCreator(message))
        },
        // messageChange: (text) => {
        //     dispatch(onMessageChangeActionCreator(text))
        // },
    }
}

 //    = (props) =>{
 //    if (!props.auth) return <Navigate to='/login'/>
 //     return <Dialogs {...props}/>
 // }
//эти 2 вместо compose
// const AuthRedirect =withAuthRedirect(Dialogs)
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirect)

export default compose(connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
