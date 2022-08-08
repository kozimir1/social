import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/state";
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const randerTreeAll=(state)=>{
    root.render(
        <React.StrictMode>
            <App state={state} dispatch = {store.dispatch.bind(store)}/>
        </React.StrictMode>
    );
}
store.subscribe(randerTreeAll)

randerTreeAll(store.getState())

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
