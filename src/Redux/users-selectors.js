import {createSelector} from "reselect";

const getUsersReselect=(state)=>{
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersReselect,(users)=> {
    return users.filter(u=> true)})

export const getPageSize=(state)=>{
    return state.usersPage.pageNumber
}
export const getUsersCount=(state)=>{
    return state.usersPage.pageCount
}
export const getTotalUsersCount=(state)=>{
    return state.usersPage.totalItemsCount
}
export const getIsFetching=(state)=>{
    return state.usersPage.isFetching
}
export const getFollowingOnProcess=(state)=>{
    return state.usersPage.followingOnProcess
}
export const getPortionSize=(state)=>{
    return state.usersPage.portionSize
}