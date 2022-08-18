import {followAPI, usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const USERS = "USERS"
const PAGE_NUMBER = "PAGE_NUMBER"
const GET_TOTAL_COUNT = `GET_TOTAL_COUNT`
const TOGGLE_IS_FETCHING = `TOGGLE_IS_FETCHING`
const TOGGLE_FOLLOWING_PROCESS = `TOGGLE_FOLLOWING_PROCESS`

const initialState = {
    users: [],
    pageNumber: 1,
    pageCount: 4,
    totalCount: 21,
    isFetching: false,
    followingOnProcess:[]
}

const usersReducer = (state = initialState, action) => {
    // сюда переменные лучше не пихать в redusor (лишние операции)
    // попадаем каждый раз когда dispatchitся action даже если он нас не касается
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u // проверить
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u // проверить
                })
            }
        case USERS:
            return {
                ...state, users: [...action.users]
            }
        case PAGE_NUMBER:
            return {
                ...state, pageNumber: action.pageNum
            }
        case GET_TOTAL_COUNT:
            return {
                ...state, totalCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_PROCESS:
            return {
                ...state,
                followingOnProcess: action.isFetching
                    ? [...state.followingOnProcess,action.id]
                    : state.followingOnProcess.map(id=> id!= action.id)

            }
        default:
            return state
    }

}


// profile util
export const folow = (id) => ({type: FOLLOW, id: id})
export const unfollow = (id) => ({type: UNFOLLOW, id: id})
export const getUsers = (users) => ({type: USERS, users: users})
export const pageNum = (pageNum) => ({type: PAGE_NUMBER, pageNum})
export const getTotalCount = (totalCount) => ({type: GET_TOTAL_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleONFollowing = (id, isFetching) => ({type: TOGGLE_FOLLOWING_PROCESS,id, isFetching})

export const getUsersThunkAC=(pageCount,pageNumber) =>  (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(pageCount, pageNumber).then(data => {
            dispatch(getUsers(data.items))
            dispatch(pageNum(pageNumber))
            dispatch(getTotalCount(data.totalCount))
            dispatch(toggleIsFetching(false))
        })
}
export const followThunk=(id)=>(dispatch)=>{
    dispatch(toggleONFollowing(id,true))
    followAPI.fol(id)
        .then(data => {
            if (data.resultCode == 0) {
                dispatch(folow(id))
            }
            dispatch(toggleONFollowing(id,false))
        })
}
export const unfollowThunk=(id)=>(dispatch)=>{
    dispatch(toggleONFollowing(id,true))
    followAPI.unfol(id)
        .then(data => {
            if (data.resultCode == 0) {
                dispatch(unfollow(id))
            }
            dispatch(toggleONFollowing(id,false))
        })
}
export default usersReducer