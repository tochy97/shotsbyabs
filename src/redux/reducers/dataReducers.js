import { SET_LOADING, ADD_POST, SET_POST, DELETE_POST, ADD_LOG, SET_LOG, DELETE_LOG, ADD_PACK, SET_PACK, DELETE_PACK } from "../types/dataTypes";

const initialState = {
    isLoading: true,
    posts: null,
    logs: null,
    packs: null,
    filterPosts: null
}

const dataReducer = (state=initialState, {type, payload})=>{
    switch(type){
        case SET_LOADING:
            state={ ...state,
                isLoading: payload,
            }
            return state;
        case ADD_POST:
            state={ ...state,
                posts:[...state.posts,payload]
            }
            return state;
        case SET_POST:
            state={...state,
                posts:payload
            }
            return state;
        case DELETE_POST:
            const filteredPosts = state.posts.filter(pst=> pst.id !== payload);
            state={
                ...state,posts:filteredPosts,
            }
            return state;
        case ADD_LOG:
            state={ ...state,
                logs:[...state.logs,payload]
            }
            return state;
        case SET_LOG:
            state={...state,
                logs:payload
            }
            return state;
        case DELETE_LOG:
            const filteredLogs = state.logs.filter(lgs=> lgs.id !== payload);
            state={
                ...state,logs:filteredLogs,
            }
            return state;
        case ADD_PACK:
            state={ ...state,
                packs:[...state.packs,payload]
            }
            return state;
        case SET_PACK:
            state={...state,
                packs:payload
            }
            return state;
        case DELETE_PACK:
            const filteredPacks = state.packs.filter(pst=> pst.id !== payload);
            state={
                ...state,packs:filteredPacks,
            }
            return state;
        default:
            return state;
    }
}

export default dataReducer;