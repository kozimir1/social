import React from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToPropsRedirect = (state) => ({auth: state.auth.isAuth})

export const withAuthRedirect = (Component) => {
    const toURL= '/login'
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.auth) return <Navigate to={toURL}/>
            return <Component {...this.props}/>
        }
    }
    let ConnectRedirectComponent= connect(mapStateToPropsRedirect)(RedirectComponent);
    return ConnectRedirectComponent
};

export const withAuthRedirectToProfile = (Component) => {
    const toURL= '/profile'
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.auth) return <Navigate to={toURL}/>
            return <Component {...this.props}/>
        }
    }
    let ConnectRedirectComponent= connect(mapStateToPropsRedirect)(RedirectComponent);
    return ConnectRedirectComponent
};

