import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { fetchPost } from "../../../redux/actionCreators/dataActionCreators"
import { checkUser } from "../../../redux/actionCreators/authActionCreators"
import { Carousel, Container, Nav } from 'react-bootstrap';
import { motion } from "framer-motion"

function Gallery() {
    const [group, setGroup] = useState("pics");
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
        <div style={{marginTop:"2rem"}}>
        {
            isLoading
            ?
            <Container style={{width:"75vw", marginTop:"1rem",}}>
                <span><h1 className='text-center'>Loading....</h1></span>
            </Container>
            :
            <>
            <Nav variant="tabs" defaultActiveKey="pics" className="justify-content-center" onSelect={(selectedKey) => setGroup(selectedKey)}>
                <Nav.Item>
                    <Nav.Link eventKey="pics">
                        Photos
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="packs">
                        Packages
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <Container style={{width:"75vw", marginTop:"1rem"}}>
                {
                    group === "pics"
                    ?
                    <Carousel>
                    {
                        posts.map((pst, index) => (
                            <Carousel.Item key={index}>
                                <img style={{width:"75vw"}} src={pst.data.post} alt="picture"/>
                            </Carousel.Item>
                        ))
                    }
                    </Carousel>
                    :
                    <span><h1 className='text-center'>Coming Soon....</h1></span>
                }
            </Container>
            </>
        }
        </div>
    );
}

export default Gallery;