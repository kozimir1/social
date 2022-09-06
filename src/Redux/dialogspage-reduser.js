const ADD_MESSAGE = "ADD-MESSAGE";
// const UPDATE_MESSAGE = "UPDATE-MESSAGE";

const initialState = {
    persons: [
        {id: 1, name: "Max"},
        {id: 2, name: "Jake"},
        {id: 3, name: "Iren"},
        {id: 4, name: "Andreu"},
        {id: 5, name: "Mike"},
        {id: 6, name: "Victor"},
        {id: 7, name: "Kate"},
    ],
    messages: [
        {id: 1, message: "Hello"},
        {id: 2, message: "Hi"},
        {id: 3, message: "well done"},
        {id: 4, message: "well"},
    ],
    // newMessage: ``
}

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 3,
                message: action.message,
            }
             return {...state,
                messages: [...state.messages, newMessage],
                newMessage: "",
            }
        // case UPDATE_MESSAGE:
        //     return {...state,
        //         newMessage: action.newMessage
        //     }
        default:
            return state
    }

}
// dialogs util
export const sendMessageActionCreator=(message)=>({type: ADD_MESSAGE, message})

// export const onMessageChangeActionCreator=(text)=>
//     ({type: UPDATE_MESSAGE,newMessage: text})

export default dialogsPageReducer