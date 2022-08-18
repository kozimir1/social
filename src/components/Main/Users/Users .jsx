import React from "react";
import cl from "./Users.module.css";
import image from "../../../img/empty.png"
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {followAPI} from "../../../api/api";
import {followThunk, toggleONFollowing, unfollowThunk} from "../../../Redux/users-reduser";

const Users = (props) => {
    const pageAmount = Math.ceil(props.totalCount / props.pageCount)
    const page = []
    for (let i = 1; i <= pageAmount; i++) {
        page.push(i)
    }
    return <div className={cl.container}>
        <div className={cl.spanBox}>{page.map(p => <span onClick={() => props.onPageNumber(p)}
                                                         className={props.pageNumber === p ? cl.selected : undefined}>{p}</span>)}
        </div>
        <h2>Users</h2>
        {props.users.map(u => <div key={u.id} className={cl.items}>
                <div className={cl.collumn}>
                    <div className={cl.image}>
                        <NavLink to={"/profile/" + u.id}><img
                            src={u.photos.small != null ? u.photos.small : image}/></NavLink>
                    </div>
                    <div className={cl.follow}>
                        {/*определяем переменную в зависимотсти от условия*/}
                        {u.followed
                            ? <button disabled={props.followingOnProcess.some(id=>id===u.id)} onClick={() => {
                                props.unfollowThunk(u.id)
                                // props.toggleONFollowing(u.id, true)
                                // followAPI.unfol(u.id)
                                //     .then(data => {
                                //         if (data.resultCode == 0) {
                                //             props.unfollow(u.id)
                                //         }
                                //         props.toggleONFollowing(u.id,false)
                                //     })
                            }}
                                      className={cl.button}>unfollow</button>
                            : <button disabled={props.followingOnProcess.some(id=>id===u.id)} onClick={() =>
                            {props.followThunk(u.id)}}
                                      className={cl.button}>follow</button>}
                    </div>
                </div>
                <div className={cl.collumn}>
                    <div className={cl.border}>
                        <div className={cl.item}>
                            <div className={cl.name}>{u.name}</div>
                            <div className={cl.status}>{u.status}</div>
                        </div>
                        <div className={cl.item}>
                            <div className={cl.country}>{"u.location.country"}</div>
                            <div className={cl.city}>{"u.location.city"}</div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
}


export default Users