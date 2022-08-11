import React from "react";
import cl from "./Users.module.css";
import * as axios from "axios";
import image from "../../../img/empty.png"



const Users = (props) => {
    if (props.users.length === 0) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(response=> {
            props.getUsers(response.data.items)})
    }
    return ( //Проверить Обертку
        <div className={cl.container}>
            <h2>Users</h2>
            {props.users.map(u => <div key={u.id} className={cl.items}>
                    <div className={cl.collumn}>
                        <div className={cl.image}>
                            <img src={ u.photos.small!=null ? u.photos.small : image }/>
                        </div>
                        <div className={cl.follow}>
                            {/*определяем переменную в зависимотсти от условия*/}
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)} className={cl.button}>unfollow</button>
                                : <button onClick={() => props.folow(u.id)} className={cl.button}>follow</button>}
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
    )
}
export default Users