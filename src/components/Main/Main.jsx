import React from "react";
import Profile from "./Profile/Profile";
import cl from "./Main.module.css";
import Dialogs from "./Dialogs/Dialogs";
import NavBar from "./NavBar/NavBar";
import {Route,Routes} from "react-router-dom";
import Message from "./Message/Message";
import News from "./News/News";
import Music from "./Music/Music";
import {addPost} from "../../Redux/state";


const Main = (props) => {
    return (
            <main className={cl.main}>
                <div className='app-nav'>
                    <NavBar friends={props.state.navBar.friends}/>
                </div>
                <div className="app-content">
                    <Routes>
                        <Route path="/profile" element={<Profile state={props.state.profilePage} addPost={props.addPost} newPostPr={props.newPostPr}/>}/>
                        <Route path="/dialogs/*" element= {<Dialogs  state={props.state.dialogsPage} addMessage={props.addMessage}
                                                                     updateMessage={props.updateMessage}/>}/>
                        <Route path="/message" element= {<Message/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                    </Routes>
                </div>
            </main>

    )
}
export default Main