import React from "react";
import cl from "./Header.module.css";


const Header =()=>{
    return(
        <header className={cl.header}>
            <div className={cl.logo}>
                <img src='src/components/Header/Header' />
            </div>
            <div className='menu'> Пункт меню</div>
        </header>
    )
}
export default Header