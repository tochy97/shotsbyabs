import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Card, Button, Row, Nav } from "react-bootstrap";
import { checkUser } from "../../../redux/actionCreators/authActionCreators"
import { fetchLog, fetchPack, fetchPost, removePost } from "../../../redux/actionCreators/dataActionCreators"

function Manager(props) {
    const [group, setGroup] = useState("pics");
    const dispatch = useDispatch();

    const { isLoading, posts, packs, logs, userID } = useSelector(
        (state) =>({
            isLoading:state.data.isLoading, 
            posts:state.data.posts,
            packs:state.data.packs,
            logs:state.data.logs,
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
            dispatch(fetchLog());
            dispatch(fetchPack());
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
                        </Nav>
                                <>
                                {
                                    group === "pics" && posts 
                                    ?
                                        posts.map((pst, index) => (
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
                                    group === "packs" && packs
                                    ?
                                        packs.map((pck, index) => (
                                            <Card className="col-md-5 mx-auto px-0" key={index}>
                                                <Card.Title className='text-center pt-3'>{pck.data.pack}</Card.Title>
                                                <Card.Body className='mb-5 p-5'>
                                                    Cost: ${pck.data.price}
                                                    <br/>
                                                    Includes: {pck.data.desc}
                                                </Card.Body>
                                                <Card.Footer style={{padding:"1rem", bottom:0, position:"absolute", width:"100%"}} className="bg-white mt-2">
                                                    <Button variant="danger" onClick={()=>dispatch(removePost(pck.id))} className="form-control my-1 mb-0">Delete Package</Button>
                                                </Card.Footer>
                                            </Card>
                                        ))
                                    :
                                    group === "logs" && logs
                                    ?
                                        logs.map((lg, index) => (
                                            <Card className="col-md-5 mx-auto px-0" key={index}>
                                                <Card.Title></Card.Title>
                                                <Card.Body className='mb-5'>
                                                <Card.Img src={lg.data.post} alt={lg.data.title}/>
                                                </Card.Body>
                                                    <Card.Footer style={{padding:"1rem", bottom:0, position:"absolute", width:"100%"}} className="bg-white mt-2">
                                                        <Button variant="danger" onClick={()=>dispatch(removePost(lg.id))} className="form-control my-1 mb-0">Delete Log</Button>
                                                    </Card.Footer>
                                            </Card>
                                        ))
                                    :
                                    <>
                                            <span><h1>Nothing to show</h1></span>
                                    </>
                                
                                }
                                </>
                    </Row>
            }
        </Card>
    );
}

export default Manager;