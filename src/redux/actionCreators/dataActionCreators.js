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
        console.log(allPost)
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