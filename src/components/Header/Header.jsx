import React from "react";
import cl from "./Header.module.css";
import LoginContainer from "./LoginContainer";


const Header =()=>{
    return(
        <header className={cl.header}>
            <div className={cl.logo}>
                <img src='src/components/Header/Header' />
            </div>
            <div className={cl.menuBody}>
                <div className={cl.menu}> Пункт меню</div>
                <LoginContainer/>
            </div>
        </header>
    )
}
export default Header