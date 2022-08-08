import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import store from "./Redux/state";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Main state={props.state} dispatch = {props.dispatch}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
        ;

}
export default App;
