// список типов для надежности
import profilePageReducer from "./profilepage-reduser";
import dialogsPageReducer from "./dialogspage-reduser";
import navbarReducer from "./navbar-reduser";

const store = {
    _callSubcriber() { //let - потому что перезаписываем randerTreeAll на observer
        if (console.log(`state was changed`)) {
        }
    },
    _state: {
        dialogsPage: {
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
            newMessage: `введите текст`
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Hi in my fist prob post', likesCount: `15`},
                {id: 2, message: "It's my first post", likesCount: `0`},],
            newTextPost: `Hello everybody`
        },
        navBar: {
            friends: [
                {id: 1, name: "Andrew"},
                {id: 2, name: "Sasha"},
                {id: 3, name: "Sveta"}
            ],
        }
    },
    getState() {
        return this._state
    },
    subscribe(observer) {   //наблюдатель callback
        this._callSubcriber = observer
    },
    dispatch(action) {
        this._state.profilePage=profilePageReducer(this._state.profilePage, action)
        this._state.dialogsPage=dialogsPageReducer(this._state.dialogsPage, action)
        this._state.navBar=navbarReducer(this._state.navBar, action)
        this._callSubcriber(this._state)
    }
}

window.store = store
export default store
