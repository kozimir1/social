import {followAPI, usersAPI} from "../api/api";
import {updateObjectInArray} from "../components/common/objict-helper";

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
    totalItemsCount: 21,
    isFetching: false,
    followingOnProcess:[],
    portionSize:10,
    fake:11
}

const usersReducer = (state = initialState, action) => {
    // сюда переменные лучше не пихать в redusor (лишние операции)
    // попадаем каждый раз когда dispatchitся action даже если он нас не касается
    switch (action.type) {
        case `FAKE`: return {...state, fake: state.fake++}
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, `id`,{followed: true})
                // users: state.users.map(u => {
                //     if (u.id === action.id) {
                //         return {...u, followed: true}
                //     }
                //     return u // проверить
                // })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, `id`,{followed: false})
                // users: state.users.map(u => {
                //     if (u.id === action.id) {
                //         return {...u, followed: false}
                //     }
                //     return u // проверить
                // })
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
                ...state, totalItemsCount: action.totalCount
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
                    : state.followingOnProcess.filter(id=> id!= action.id)

            }
        default:
            return state
    }

}


// profile util
export const folow = (id) => ({type: FOLLOW, id: id})
export const unfollow = (id) => ({type: UNFOLLOW, id: id})
export const responseUsers = (users) => ({type: USERS, users: users})
export const pageNum = (pageNum) => ({type: PAGE_NUMBER, pageNum})
export const getTotalCount = (totalCount) => ({type: GET_TOTAL_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleONFollowing = (id, isFetching) => ({type: TOGGLE_FOLLOWING_PROCESS,id, isFetching})

export const getUsersThunkAC=(pageCount,pageNumber) => async (dispatch) => {
        dispatch(toggleIsFetching(true))
       const data =  await usersAPI.getUsers(pageCount, pageNumber)
            dispatch(responseUsers(data.items))
            dispatch(pageNum(pageNumber))
            dispatch(getTotalCount(data.totalCount))
            dispatch(toggleIsFetching(false))

}

 const  followUnfollowFlow = async (dispatch,id,apiMethod,actionCreator)=>{
    dispatch(toggleONFollowing(id,true))
    const data = await apiMethod(id)
    if (data.resultCode == 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleONFollowing(id,false))
}


export const followThunk=(id)=> async (dispatch)=>{
    const apiMethod = followAPI.fol.bind(followAPI)
    let actionCreator = folow
    // dispatch(toggleONFollowing(id,true))
    // const data = await apiMethod(id)
    //         if (data.resultCode == 0) {
    //             dispatch(actionCreator(id))
    //         }
    //         dispatch(toggleONFollowing(id,false))
    followUnfollowFlow(dispatch,id, apiMethod, actionCreator)
}
export const unfollowThunk=(id)=> async (dispatch)=>{
    const apiMethod = followAPI.unfol.bind(followAPI)
    const actionCreator = unfollow
    // dispatch(toggleONFollowing(id,true))
    // const data = await apiMethod(id)
    //         if (data.resultCode == 0) {
    //             dispatch(actionCreator(id))
    //         }
    //         dispatch(toggleONFollowing(id,false))
    followUnfollowFlow(dispatch,id,followAPI.unfol.bind(followAPI),unfollow)
}
export default usersReducer