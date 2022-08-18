import React from "react";
import cl from "./Header.module.css";
import {NavLink} from "react-router-dom";
import image from "../../img/empty.png"

const Login = (props) => {
    return (
        <div className={cl.auth}>
            {props.isAuth ? <div className={cl.avaImage}>
                <img src={props.avatar ? props.avatar : image}></img>
                </div>
                : undefined }
            <div className={cl.login}>{props.isAuth ? props.login : <NavLink to="/login"> Login </NavLink>}</div>
        </div>
)
}
export default Login