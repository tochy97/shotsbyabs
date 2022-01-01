import { SET_USER, SET_ERROR, RESET_USER } from "../types/authTypes";

const initialState = {
    isLoggedIn: false,
    username: null,
    id: null,
    status: null,
    error: null,
}

const authReducer = (state=initialState, {type, payload})=>{
    switch(type){
        case SET_USER:
            state={ ...state,
                isLoggedIn:true,
                username:payload.username,
                id:payload.id,
                error: null,
                status:payload.status
            }
            return state;
        case SET_ERROR:
            state={ ...state,
                error:payload.error,
                status:payload.status
            }
            return state;
        case RESET_USER:
            state=initialState;
            return state;
        default:
            return state;
    }
}

export default authReducer;