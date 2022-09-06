import React from "react";
import cl from "./Users.module.css";
import Paginator from "../../common/Paginator ";
import User from "./User";

const Users = ({totalItemsCount, pageCount,onPageNumber,pageNumber,portionSize,...props}) => {
    // const pageAmount = Math.ceil(props.totalCount / props.pageCount)
    // const page = []
    // for (let i = 1; i <= pageAmount; i++) {
    //     page.push(i)
    // }
    return <div className={cl.container}>
        {/*<div className={cl.spanBox}>{page.map(p => <span onClick={() => props.onPageNumber(p)}*/}
        {/*                                                 className={props.pageNumber === p ? cl.selected : undefined}>{p}</span>)}*/}
        {/*</div>*/}
        <Paginator totalItemsCount={totalItemsCount} pageCount={pageCount} onPageNumber={onPageNumber} pageNumber={pageNumber}
                   portionSize={portionSize}/>
        <h2>Users</h2>
        {props.users.map(u => <User key={u.id} user={u}
                                    followingOnProcess={props.followingOnProcess}
                                    unfollowThunk={props.unfollowThunk}
                                    followThunk={props.followThunk}/>
        )}
    </div>
}


export default Users