import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, HashRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {initialize} from "./Redux/app-reduser";
import Preloader from "./components/common/Preloader";
import store from "./Redux/redux-store";


class App extends React.Component {
    componentDidMount() {
        this.props.initialize()
        window.addEventListener("unhandledrejection", event => {
            alert(`unhandledRejection: ${event.reason.message}`);
        });
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", event => {
            alert(`unhandledRejection: ${event.reason.message}`);
        });
    }

    render() {
        if (!this.props.initializeMe) {
            return <Preloader/>
        }
        return (
            <HashRouter>
            {/*<BrowserRouter basename={process.env.PUBLIC_URL}>*/}
                <div className="wrapper">
                    <Header/>
                    <Main/>
                    <Footer/>
                </div>
            </HashRouter>
             // </BrowserRouter>
        )


    }
}

const mapStateToProps = (state) => {
    return {initializeMe: state.app.initialize}
}
const AppContainer = connect(mapStateToProps, {initialize})(App)

const SocialApp = (props) => {
    return (

            <Provider store={store}>
                <AppContainer/>
            </Provider>)

}

export default SocialApp;
