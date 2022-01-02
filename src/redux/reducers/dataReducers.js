import { SET_LOADING, ADD_POST, SET_POST, RESET_POST, DELETE_POST } from "../types/dataTypes";

const initialState = {
    isLoading: true,
    posts: null,
    logs: null,
    packs: null
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
        case RESET_POST:
            state=initialState;
            return state;
        case DELETE_POST:
            const filteredPosts = state.posts.filter(pst=> pst.id !== payload);
            state={
                ...state,posts:filteredPosts,
            }
            return state;
        default:
            return state;
    }
}

export default dataReducer;