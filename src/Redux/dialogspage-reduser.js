const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

const dialogsPageReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 3,
                message: state.newMessage,
            }
            state.messages.push(newMessage)
            state.newMessage = ""
            return state
        case UPDATE_MESSAGE:
            state.newMessage = action.newMessage
            return state
        default:
            return state
    }

}
// dialogs util
export const sendMessageActionCreator=()=>({type: ADD_MESSAGE})

export const onMessageChangeActionCreator=(text)=>
    ({type: UPDATE_MESSAGE,newMessage: text})

export default dialogsPageReducer