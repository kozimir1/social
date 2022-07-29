import React from "react";
import cl from './Profile.module.css'

const Profile =()=>{
    return(
            <div className={cl.profile}>
                <div className='image'><img src='img/Image.jpg' alt='картинки нет'/></div>
                <div className='person'>Person</div>
                <div className="posts">
                    <div className="title">Posts</div>
                    <div className="new">New Posts</div>
                    <div className="area">
                        <div className="item">Post1</div>
                        <div className="item">Post2</div>
                    </div>
                </div>
            </div>
    )
}
export default Profile