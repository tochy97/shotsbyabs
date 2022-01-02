import { SET_LOADING, ADD_POST, SET_POST, RESET_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from "../types/postTypes";

const initialState = {
    isLoading: true,
    posts: null,
}

const postReducer = (state=initialState, {type, payload})=>{
    switch(type){
        case SET_LOADING:
            state={ ...state,
                isLoading: payload,
                posts: null,
            }
            return state;
        case ADD_POST:
            state={ ...state,
                posts:[...state.posts,payload]
            }
            return state;
        case SET_POST:
            state={...state,posts:payload}
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

export default postReducer;