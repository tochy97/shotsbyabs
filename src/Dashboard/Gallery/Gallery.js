import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { fetchPost } from "../../redux/actionCreators/dataActionCreators"
import { checkUser } from "../../redux/actionCreators/authActionCreators"
import { Container } from 'react-bootstrap';

function Gallery() {
    const { isLoading, posts, userID } = useSelector(
        (state) =>({
            isLoading:state.data.isLoading, 
            posts:state.data.posts,
            userID:state.auth.user_id,
        }), shallowEqual);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(!userID){
            dispatch(checkUser());
        }
    }, [userID,dispatch]);
    
    useEffect(() => {
        if(isLoading){
            dispatch(fetchPost());
        }
    }, [isLoading,dispatch]);

    return (
        <>
        {
            isLoading
            ?
            <></>
            :
            <>
            {
                posts.map((pst, index) => (
                    <Container className="col-md-5 mx-auto px-0" key={index}>
                        <img src={pst.data.post} alt={pst.data.id}/>
                    </Container>
                ))
            }
            </>
        }
        </>
    );
}

export default Gallery;