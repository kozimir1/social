// noinspection LanguageDetectionInspection

import {authThunk} from "./auth-reduser";

const SET_INITIALIZE ='social/app/SET_INITIALIZE';


const initialState = {
    initialize: false,
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZE:
            return {
             ...state,
                initialize: true,
            }
        default:
            return state
    }
}


// profile util
export const initializeSuccess = () => ({type: SET_INITIALIZE})

export const initialize = ()=>(dispatch)=>{
    // возвращаем promise
   const promise = dispatch(authThunk())
    Promise.all([promise]).then(()=> dispatch(initializeSuccess()))
}

export default appReducer