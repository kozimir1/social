import React from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
const mapStateToPropsRedirect = (state) => ({
    auth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.auth) return <Navigate to='/login'/>
            return <Component {...this.props}/>
        }
    }
    let ConnectRedirectComponent= connect(mapStateToPropsRedirect)(RedirectComponent);
    return ConnectRedirectComponent
};

