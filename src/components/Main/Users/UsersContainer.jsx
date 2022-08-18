import React from "react";
import {connect} from "react-redux";
import {
    followThunk,
    getUsersThunkAC,
    unfollowThunk
} from "../../../Redux/users-reduser";
import Users from "./Users ";
import Preloader from "../../common/Preloader";
import {usersAPI} from "../../../api/api";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContApi extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        alert(`я отрисовалась в dom деревк`)
        this.props.getUsersThunkAC(this.props.pageCount, this.props.pageNumber)
    }

    componentWillUnmount() {
        alert(`я скоро сдохну`)
    }

    onPageNumber = (page) => {
        this.props.getUsersThunkAC(this.props.pageCount, page)
        // this.props.toggleIsFetching(true)
        // this.props.pageNum(page)
        // usersAPI.getUsers(this.props.pageCount, page).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.getUsers(data.items)
        // })

    }

    render() {
        return <> <Preloader isFetching={this.props.isFetching}/>
            <Users totalCount={this.props.totalCount} pageCount={this.props.pageCount}
                   onPageNumber={this.onPageNumber} pageNumber={this.props.pageNumber}
                   users={this.props.users} unfollow={this.props.unfollow} folow={this.props.folow}
                   toggleONFollowing={this.props.toggleONFollowing} followingOnProcess={this.props.followingOnProcess}
                   followThunk={this.props.followThunk} unfollowThunk={this.props.unfollowThunk}
            />
        </>
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageNumber: state.usersPage.pageNumber,
        pageCount: state.usersPage.pageCount,
        totalCount: state.usersPage.totalCount,
        isFetching: state.usersPage.isFetching,
        followingOnProcess: state.usersPage.followingOnProcess
    }
}
/*const mapDispatchToProps = (dispatch) => {
    return {
        folow: (id) => {
            dispatch(followAC(id))
        },
        unfollow: (id) => {
            dispatch(unFollowAC(id))
        },
        getUsers: (users) => {
            dispatch(usersAC(users))
        },
        pageNum:(pageNum)=>{
            dispatch(pageNumberAC(pageNum))
        },
        getTotalCount:(totalCount)=>{
            dispatch(getTotalCountAC(totalCount))
        },
        toggleIsFetching:(boolean)=>{
            dispatch(toggleIsFetchingAC(boolean))
        }

    }
}*/
// let AuthRedirect = withAuthRedirect(UsersContApi)
// равнозначны
// const UsersContainer = withAuthRedirect(connect(mapStateToProps, {
//     getUsersThunkAC,followThunk,unfollowThunk})(UsersContApi))


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
    getUsersThunkAC,followThunk,unfollowThunk})
)(UsersContApi)


