import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store";
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import SocialApp from "./App";
// import StoreContext, {Provider} from "./StoreContext";

// setInterval(()=>{
//     store.dispatch({type:`FAKE`})
// },1000)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SocialApp/>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
