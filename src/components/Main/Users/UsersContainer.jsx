import React from "react";
import {connect} from "react-redux";
import {followThunk, getUsersThunkAC, unfollowThunk} from "../../../Redux/users-reduser";
import Users from "./Users ";
import Preloader from "../../common/Preloader";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getFollowingOnProcess,
    getIsFetching,
    getPageSize, getPortionSize,
    getTotalUsersCount, getUsers,
    getUsersCount,
} from "../../../Redux/users-selectors";

class UsersContApi extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        alert(`я отрисовалась в dom дереве`)
        const {pageCount,pageNumber}=this.props
        this.props.getUsersThunkAC(pageCount, pageNumber)
    }

    componentWillUnmount() {
        alert(`компонента размонтирована`)
    }

    onPageNumber = (page) => {
        const {pageCount}=this.props
        this.props.getUsersThunkAC(pageCount, page)
        // this.props.toggleIsFetching(true)
        // this.props.pageNum(page)
        // usersAPI.getUsers(this.props.pageCount, page).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.getUsers(data.items)
        // })

    }

    render() {
        console.log(`RUS`)
        return <>  {this.props.isFetching ? <Preloader/>:null }
            <Users totalItemsCount={this.props.totalCount} pageCount={this.props.pageCount}
                   onPageNumber={this.onPageNumber} pageNumber={this.props.pageNumber}
                   users={this.props.users} unfollow={this.props.unfollow} folow={this.props.folow}
                   toggleONFollowing={this.props.toggleONFollowing} followingOnProcess={this.props.followingOnProcess}
                   followThunk={this.props.followThunk} unfollowThunk={this.props.unfollowThunk}
                   portionSize={this.props.portionSize}
            />
        </>
    }

}

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageNumber: state.usersPage.pageNumber,
//         pageCount: state.usersPage.pageCount,
//         totalCount: state.usersPage.totalCount,
//         isFetching: state.usersPage.isFetching,
//         followingOnProcess: state.usersPage.followingOnProcess
//     }
// }
const mapStateToProps = (state) => {
    console.log(`mapStateToProps  users`)
    return {
        users: getUsers(state),
        pageNumber: getPageSize(state),
        pageCount: getUsersCount(state),
        totalCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state),
        followingOnProcess: getFollowingOnProcess(state),
        portionSize: getPortionSize(state)
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


