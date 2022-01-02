import { auth, store } from "../../config/firebase"; 
import * as types from "../types/authTypes";

const setUser = (data) => ({
    type:types.SET_USER,
    payload:data
})
export const setError = (data) => ({
    type:types.SET_ERROR,
    payload:data
})
const resetUser = () => ({
    type:types.RESET_USER,
})

export const loginUser = (email, password) => dispatch => {
    auth.signInWithEmailAndPassword(email,password)
    .then(()=>{
        const user = auth.currentUser
        const data = {
            user: user.providerData[0],
            id: user.uid,
            }
            dispatch(setUser(data));
    })
    .catch(err=>{
        setError(dispatch(setError(err.message.split("(")[0])));
    });
}

export const logoutUser = () => dispatch => {
    dispatch(resetUser());
}