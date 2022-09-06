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
            <div className={cl.login}>{props.isAuth ?
                <div>{props.login} - <button onClick={()=>props.logout()}>logout</button></div>
                : <NavLink to="/login"> Login </NavLink>}</div>
        </div>
)
}
export default Login