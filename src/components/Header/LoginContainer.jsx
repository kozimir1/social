import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {authThunk, logout} from "../../Redux/auth-reduser";


class LoginContainer extends React.Component {
    componentDidMount(){
    // this.props.authThunk()
        // authAPI.authMe().then(data => {
        //     const {id, login, email} = data.data
        //     this.props.setAuthUserData(id, login, email)
        //     profileAPI.profile(id)
        //         .then(data=>{
        //             const avatar = data.photos.small
        //             this.props.setAuthUserAvatar(avatar)
        //         })
        // })
    }

    render() {
        return (
            <Login {...this.props}/>
        )
    }
}

const mstp = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        avatar: state.auth.avatar
    }
}

export default connect(mstp, {authThunk,logout})(LoginContainer)