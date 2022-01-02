import { combineReducers } from "redux";
import authReducer from "./authReducers";
import dataReducer from "./dataReducers";

const rootReducer = combineReducers({
    auth:authReducer,
    data:dataReducer,
});

export default rootReducer;