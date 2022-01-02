import { combineReducers } from "redux";
import authReducer from "./authReducers";
import postReducer from "./postReducers";

const rootReducer = combineReducers({
    auth:authReducer,
    post:postReducer,
});

export default rootReducer;