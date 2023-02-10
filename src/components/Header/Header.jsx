import React from "react";
import cl from "./Header.module.css";
import LoginContainer from "./LoginContainer";


const Header =()=>{
    return(
        <header className={cl.header}>
            <div className={cl.logo}>
            </div>
            <div className={cl.menuBody}>
                <div className={cl.menu}>123</div>
                <LoginContainer/>
            </div>
        </header>
    )
}
export default Header