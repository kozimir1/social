const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const USERS = "USERS"

const initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    // сюда переменные лучше не пихать в redusor (лишние операции)
    // попадаем каждый раз когда dispatchitся action даже если он нас не касается
    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u // проверить
                })
            }
        case UNFOLLOW:
            return{
                ...state,
                users: state.users.map(u=>{
                    if (u.id===action.id){
                        return {...u, followed:false}
                    }
                    return u // проверить
                })
        }
        case USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}


// profile util
export const followAC = (id) => ({type: FOLLOW , id:id})
export const unFollowAC = (id) => ({type: UNFOLLOW, id:id})
export const usersAC = (users) => ({type: USERS, users: users})

export default usersReducer