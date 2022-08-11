import React from "react";
import Profile from "./Profile/Profile";
import cl from "./Main.module.css";
import NavBar from "./NavBar/NavBar";
import {Route,Routes} from "react-router-dom";
import Message from "./Message/Message";
import News from "./News/News";
import Music from "./Music/Music";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";




const Main = (props) => {
    return (
            <main className={cl.main}>
                <div className='app-nav'>
                    <NavBar/>
                </div>
                <div className="app-content">
                    <Routes>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/dialogs/*" element= {<DialogsContainer/>}/>
                        <Route path="/message" element= {<Message/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </main>

    )
}
export default Main