import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, unFollowAC, usersAC,} from "../../../Redux/users-reduser";

const mapStateToProps = (state) => {
    return {users: state.usersPage.users}
}
const mapDispatchToProps = (dispatch) => {
    return {
        folow: (id) => {
            dispatch(followAC(id))
        },
        unfollow: (id) => {
            dispatch(unFollowAC(id))
        },
        getUsers: (users) => {
            dispatch(usersAC(users))
        }

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer