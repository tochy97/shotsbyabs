import * as types from "../types/dataTypes";
import {storage, store} from "../../config/firebase";

const setLoading = data =>({
    type:types.SET_LOADING,
    payload:data,
})
const getPost = data =>({
    type:types.SET_POST,
    payload:data,
})
const deletePost = data =>({
    type:types.DELETE_POST,
    payload:data,
})

export const addPost = data =>({
    type:types.ADD_POST,
    payload:data,
})

export const fetchPost =() =>dispatch=>{
    dispatch(setLoading(true));
    store.collection("posts").get().then(posts=>{
        const allPost = [];

        posts.forEach(post => {
            const data = {data:post.data(),id:post.id};
            allPost.push(data);
        });
        dispatch(getPost(allPost));
        dispatch(setLoading(false));
    })
    .catch((err)=>{
    })
}

export const removePost = (postId,imgUrl) => (dispatch)=> {
    storage.refFromURL(imgUrl).delete()
    .then(()=>{
        store.collection("posts").doc(postId).delete()
        .then(()=>{
            dispatch(deletePost(postId));
        })
    })
    .catch((err)=>{
    })
}

const getLog = data =>({
    type:types.SET_LOG,
    payload:data,
})
const deleteLog = data =>({
    type:types.DELETE_LOG,
    payload:data,
})

export const addLog = data =>({
    type:types.ADD_LOG,
    payload:data,
})

export const fetchLog =() =>dispatch=>{
    dispatch(setLoading(true));
    store.collection("logs").get().then(logs=>{
        const allLog = [];

        logs.forEach(log => {
            const data = {data:log.data(),id:log.id};
            allLog.push(data);
        });
        dispatch(getLog(allLog));
        dispatch(setLoading(false));
    })
    .catch((err)=>{
    })
}

export const removeLog = (id) => (dispatch)=> {
    store.collection("logs").doc(id).delete()
    .then(()=>{
        dispatch(deleteLog(id));
    })
}

const getPack = data =>({
    type:types.SET_PACK,
    payload:data,
})
const deletePack = data =>({
    type:types.DELETE_PACK,
    payload:data,
})

export const addPack = data =>({
    type:types.ADD_PACK,
    payload:data,
})

export const fetchPack =() =>dispatch=>{
    dispatch(setLoading(true));
    store.collection("packs").get().then(packs=>{
        const allPack = [];

        packs.forEach(pack => {
            const data = {data:pack.data(),id:pack.id};
            allPack.push(data);
        });
        dispatch(getPack(allPack));
        dispatch(setLoading(false));
    })
    .catch((err)=>{
    })
}

export const removePack = (id) => (dispatch)=> {
    store.collection("packs").doc(id).delete()
    .then(()=>{
        dispatch(deletePack(id));
    })
}
