import React from "react";
import cl from "./NavBar.module.css";
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const  NavBar = (props) => {
    return(
        <nav className={cl.nav}>
            <ul className={cl.item}>
                <li className={`${cl.item} ${cl.item}`}><NavLink className = {({isActive}) =>  isActive ? cl.active : cl.link } to='/profile'>Profile</NavLink></li>
                <li className={cl.item}><NavLink className = {({isActive}) =>  isActive ? cl.active : cl.link } to='/dialogs'>Dialogs</NavLink></li>
                <li className={cl.item}><NavLink className = {({isActive}) =>  isActive ? cl.active : cl.link } to='/message'>Message</NavLink></li>
                <li className={cl.item}><NavLink className = {({isActive}) =>  isActive ? cl.active : cl.link }  to='/news'>News</NavLink></li>
                <li className={cl.item}><NavLink className = {({isActive}) =>  isActive ? cl.active : cl.link }   to='/music'>Music</NavLink></li>
            </ul>
            <div className={cl.setting}><a href=''>Setting</a></div>
            <Friends friends={props.friends}/>
        </nav>
    )
}
export default NavBar