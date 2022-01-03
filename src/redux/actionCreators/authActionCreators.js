import { auth, store } from "../../config/firebase"; 
import { getAuth } from "firebase/auth";
import * as types from "../types/authTypes";

export const setUser = (data) => ({
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
    const info= {
        error:"",
        status:""
    }
    dispatch(setError(info))
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
        console.log(err)
        const info= {
            error:"Invalid username or password",
            status:401
        }
        dispatch(setError(info))
    });
}
export const checkUser = () => dispatch=>{
    const { currentUser } = getAuth();
    if(currentUser){
        const data = {
            id:currentUser.uid,
        }
        dispatch(setUser(data));
    }
}
export const logoutUser = () => dispatch => {
    auth.signOut();
    dispatch(resetUser());
}
