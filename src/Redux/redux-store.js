import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import profilePageReducer from "./profilepage-reduser";
import dialogsPageReducer from "./dialogspage-reduser";
import navbarReducer from "./navbar-reduser";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reduser";
import thunk from "redux-thunk";


const reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    navBar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer
})
let store = legacy_createStore(reducers, applyMiddleware(thunk));
window.store=store

export default store