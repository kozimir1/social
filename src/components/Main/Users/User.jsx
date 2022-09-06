import React from "react";
import cl from "./Users.module.css";
import image from "../../../img/empty.png"
import {NavLink} from "react-router-dom";

const User = ({user, followingOnProcess,unfollowThunk,followThunk}) => {

    return <div  className={cl.items}>
                <div className={cl.collumn}>
                    <div className={cl.image}>
                        <NavLink to={"/profile/" + user.id}><img
                            src={user.photos.small != null ? user.photos.small : image}/></NavLink>
                    </div>
                    <div className={cl.follow}>
                        {/*определяем переменную в зависимотсти от условия*/}
                        {user.followed
                            ? <button disabled={followingOnProcess.some(id=>id===user.id)} onClick={() => {
                              unfollowThunk(user.id)
                                // props.toggleONFollowing(user.id, true)
                                // followAPI.unfol(user.id)
                                //     .then(data => {
                                //         if (data.resultCode == 0) {
                                //             props.unfollow(user.id)
                                //         }
                                //         props.toggleONFollowing(user.id,false)
                                //     })
                            }}
                                      className={cl.button}>unfollow</button>
                            : <button disabled={followingOnProcess.some(id=>id===user.id)} onClick={() =>
                            {followThunk(user.id)}}
                                      className={cl.button}>follow</button>}
                    </div>
                </div>
                <div className={cl.collumn}>
                    <div className={cl.border}>
                        <div className={cl.item}>
                            <div className={cl.name}>{user.name}</div>
                            <div className={cl.status}>{user.status}</div>
                        </div>
                        <div className={cl.item}>
                            <div className={cl.country}>{"user.location.country"}</div>
                            <div className={cl.city}>{"user.location.city"}</div>
                        </div>
                    </div>
                </div>
            </div>
}


export default User