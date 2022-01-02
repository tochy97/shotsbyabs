import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { fetchPost } from "../../../redux/actionCreators/dataActionCreators"
import { checkUser } from "../../../redux/actionCreators/authActionCreators"
import { Carousel, Container, Nav } from 'react-bootstrap';

function Gallery() {
    const [group, setGroup] = useState("all");
    const { isLoading, posts, userID } = useSelector(
        (state) =>({
            isLoading:state.data.isLoading, 
            posts:state.data.posts,
            userID:state.auth.user_id,
        }), shallowEqual);
    const dispatch = useDispatch();
    console.log(group)
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
        <Nav variant="tabs" defaultActiveKey="all" className="justify-content-center" onSelect={(selectedKey) => setGroup(selectedKey)}>
            <Nav.Item>
                <Nav.Link eventKey="all">
                    All
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="couples">
                    Couples
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="weddings">
                    Weddings
                </Nav.Link>
            </Nav.Item>
        </Nav>
        {
            isLoading
            ?
            <></>
            :

            <Container style={{width:"75vw", marginTop:"1rem"}}>
                <Carousel>
                {
                    posts.map((pst, index) => (
                            <Carousel.Item key={index}>
                                <img style={{width:"75vw"}} src={pst.data.post} alt={pst.data.id}/>
                                <Carousel.Caption>
                                <h3>{pst.data.group}</h3>
                            </Carousel.Caption>
                            </Carousel.Item>
                    ))
                }
                </Carousel>
            </Container>
        }
        </>
    );
}

export default Gallery;