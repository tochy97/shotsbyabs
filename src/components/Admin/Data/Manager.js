import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Card, Button, Row, Nav } from "react-bootstrap";
import { checkUser } from "../../../redux/actionCreators/authActionCreators"
import { fetchPost, removePost } from "../../../redux/actionCreators/dataActionCreators"

function Manager(props) {
    const [group, setGroup] = useState("pics");
    const dispatch = useDispatch();

    const { isLoading, posts, userID } = useSelector(
        (state) =>({
            isLoading:state.data.isLoading, 
            posts:state.data.posts,
            userID:state.auth.user_id,
    }), shallowEqual);

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
        <Card className="py-4" style={{border:0}}>
            {
                isLoading
                ?
                    <></>
                :
                    <Row className="px-5 my-6 gap-5">
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
                            <Nav.Item>
                                <Nav.Link eventKey="logs">
                                    Logs
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        { 

                            !posts
                            ? 
                                <Card className="py-4" style={{height:"70vh"}}>
                                    <span><h1>No photos have been uploaded</h1></span>
                                </Card>
                            : 
                                <>
                                {
                                    group === "pics"
                                    ?
                                        posts.map((pst, index) =>(
                                            <Card className="col-md-5 mx-auto px-0" key={index}>
                                                <Card.Body className='mb-5'>
                                                <Card.Img src={pst.data.post} alt={pst.data.title}/>
                                                </Card.Body>
                                                    <Card.Footer style={{padding:"1rem", bottom:0, position:"absolute", width:"100%"}} className="bg-white mt-2">
                                                        <Button variant="danger" onClick={()=>dispatch(removePost(pst.id,pst.data.post))} className="form-control my-1 mb-0">Delete Post</Button>
                                                    </Card.Footer>
                                            </Card>
                                        ))
                                    :
                                    group === "packs"
                                    ?
                                    <>Packages</>
                                    :
                                    <>Logs</>
                                
                                }
                                </>
                        }
                    </Row>
            }
        </Card>
    );
}

export default Manager;