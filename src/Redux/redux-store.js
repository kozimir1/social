import {applyMiddleware, combineReducers, compose, createStore, legacy_createStore} from "redux";
import profilePageReducer from "./profilepage-reduser";
import dialogsPageReducer from "./dialogspage-reduser";
import navbarReducer from "./navbar-reduser";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reduser";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reduser";


const reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    navBar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
// let store = legacy_createStore(reducers, applyMiddleware(thunk));
window.__store__=store

export default store