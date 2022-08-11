import {combineReducers, legacy_createStore} from "redux";
import profilePageReducer from "./profilepage-reduser";
import dialogsPageReducer from "./dialogspage-reduser";
import navbarReducer from "./navbar-reduser";
import usersReducer from "./users-reduser";


const reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    navBar: navbarReducer,
    usersPage: usersReducer,
})
let store = legacy_createStore(reducers);
window.store=store

export default store