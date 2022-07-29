import React from "react";
import Profile from "./Profile";
import cl from "./Main.module.css";


const Main =()=>{
    return(
        <main className={cl.main}>
            <nav className={cl.nav}>
                <ul className={cl.item}>
                    <li className={`${cl.item} ${cl.item}`}><a className={cl.link} href='#'>Profile</a></li>
                    <li className={cl.item}><a className={cl.link} href='#'>Message</a></li>
                    <li className={cl.item}><a className={cl.link} href='#'>News</a></li>
                    <li className={cl.item}><a className={cl.link} href='#'>Music</a></li>
                </ul>
                <div className={cl.setting}><a href='#'>Setting</a></div>
            </nav>
            <Profile/>
        </main>
    )
}
export default Main