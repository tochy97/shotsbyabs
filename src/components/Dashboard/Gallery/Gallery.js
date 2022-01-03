import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { fetchPost, fetchPack } from "../../../redux/actionCreators/dataActionCreators"
import { checkUser } from "../../../redux/actionCreators/authActionCreators"
import { Carousel, Container, Nav, Card, Row } from 'react-bootstrap';

function Gallery() {
    const [group, setGroup] = useState("pics");
    const { isLoading, posts, packs, userID } = useSelector(
        (state) =>({
            isLoading:state.data.isLoading, 
            posts:state.data.posts,
            packs:state.data.packs,
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
            dispatch(fetchPack());
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
                    group === "pics" && posts 
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
                    group === "packs" && packs
                    ?
                    <Row className="px-5 my-6 gap-5">
                        {
                        packs.map((pck, index) => (
                            <Card className="col-md-5 mx-auto px-0" key={index}>
                                <Card.Title className='text-center pt-3'>{pck.data.pack}</Card.Title>
                                <Card.Body className='mb-5 p-5'>
                                    Cost: ${pck.data.price}
                                    <br/>
                                    Includes: {pck.data.desc}
                                </Card.Body>
                            </Card>
                        ))
                        }
                    </Row>
                    :
                    <>
                            <span><h1>Nothing to show</h1></span>
                    </>
                }
            </Container>
            </>
        }
        </div>
    );
}

export default Gallery;