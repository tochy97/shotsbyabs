import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom";
import { Divider } from '@mui/material';
import { Button, Container, Form, ProgressBar, Nav } from 'react-bootstrap';
import { storage, store } from "../../../config/firebase"
import { addPost } from "../../../redux/actionCreators/dataActionCreators"

function AddPost(props) {
    const [post,setPost] = useState("");
    const [group,setGroup] = useState("");
    const [progress,setProgress] = useState(0);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [total, setTotal] = useState(0.00);
    const [email, setEmail] = useState("");
    const [pack, setPack] = useState("");
    const [message, setMessage] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState(0.00);
    
    const dispatch = useDispatch();

    function handleAddpost(e){
        e.preventDefault();
        const dataType = "post";
        const data = {
            post:"",
            group:group,
            type:dataType,
            createdDate: new Date(),
        }
        store.collection("posts").add(data)
        .then(async res=>{
            const document = await res.get();
            const postData = {data: document.data(),id: document.id};
            const uploadRef = storage.ref(`posts/${data.group}/${document.id}`);
    
            uploadRef.put(post).on("state_change", (snapshot) =>{
                const progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes) *100);
                setProgress(progress);
            },(err) =>{
            },async () =>{
                const url = await uploadRef.getDownloadURL();
                store.collection("posts").doc(document.id).update({
                    post:url,
                })
                .then(()=>{
                    postData.data.post = url;
                    dispatch(addPost(postData));
                })
                .catch((err) =>{
                })
            });
        })
        .catch(err=>{
        })
    }

    function handleAddpack(e){
        e.preventDefault();
        const dataType = "pack";
        const data = {
            pack:pack,
            desc:desc,
            price:price,
            type:dataType,
            createdDate: new Date(),
        }
        store.collection("packs").add(data)
        .then(async res=>{
            setProgress(100)
        })
        .catch(err=>{
        })
    }

    function handleAddlog(e){
        e.preventDefault();
        const dataType = "log";
        const data = {
            firstname:firstname,
            lastname:lastname,
            total:total,
            email:email,
            pack:pack,
            type:dataType,
            message:message,
            createdDate: new Date(),
        }
        store.collection("logs").add(data)
        .then(async res=>{
            setProgress(100)
        })
        .catch(err=>{
        })
    }

    return (
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
        <Container>
            {
                progress > 0 && progress < 100
                ? 
                <> 
                    <Divider className="font-weight-bold text-center py-4"><h1>Uploading  {progress}% </h1></Divider>  <ProgressBar now={progress} max={100}/> 
                </> 
                : progress === 100 
                ? 
                <> 
                    <Divider className="font-weight-bold text-center py-4"><h1>Uploaded succcessfully</h1></Divider>
                </> 
                        :

                group === "packs"
                ?
                    <>
                    <h1 className='text-center mt-5'>Add a package</h1>
                    <Form onSubmit={handleAddpack}>
                        <Form.Floating id="pack">
                            <Form.Control type="text"value={pack} placeholder="Package Name" onChange={e=>setPack(e.target.value)} required></Form.Control>                            
                            <Form.Label>Package Name</Form.Label>
                        </Form.Floating>
                        <Form.Floating id="price"  style={{marginTop: "1rem", }} >
                            <Form.Control type="number" style={{marginTop: "1rem", paddingLeft:'1.5rem'}} step="0.01" value={price} onChange={e=>setPrice(e.target.value)} required></Form.Control>                    
                            <Form.Label>Price</Form.Label>
                            <Form.Label style={{marginTop:"1.24rem"}}>$</Form.Label>
                        </Form.Floating>
                        <Form.Floating id="desc" style={{marginTop: "1rem"}}>
                            <textarea className="form-control" value={desc} onChange={e=>setDesc(e.target.value)} style={{height: "105px", marginTop: "1rem"}} placeholder="Description" required/>
                            <Form.Label>Description</Form.Label>
                        </Form.Floating>
                        <Button className='form-control mt-5' variant='dark' type="submit">Add Pack</Button>
                    </Form>
                    </>
                :
                group === "logs"
                ?
                    <>
                    <h1 className='text-center mt-5'>Log a sale</h1>
                    <Form onSubmit={handleAddlog}>
                        <Form.Floating id="firstname">
                            <Form.Control type="text"value={firstname} placeholder="First Name" onChange={e=>setFirstname(e.target.value)} required></Form.Control>                            
                            <Form.Label>First Name</Form.Label>
                        </Form.Floating>
                        <Form.Floating id="lastname" style={{marginTop: "1rem"}}>
                            <Form.Control type="text"value={lastname} placeholder="Last Name" onChange={e=>setLastname(e.target.value)} required></Form.Control>                            
                            <Form.Label>Last Name</Form.Label>
                        </Form.Floating>
                        <Form.Floating id="total"  style={{marginTop: "1rem", }} >
                            <Form.Control type="number" style={{marginTop: "1rem", paddingLeft:'1.5rem'}} step="0.01" value={total} onChange={e=>setTotal(e.target.value)} required></Form.Control>                    
                            <Form.Label>Total</Form.Label>
                            <Form.Label style={{marginTop:"1.24rem"}}>$</Form.Label>
                        </Form.Floating>
                        <Form.Floating id="email"  style={{marginTop: "1rem"}} >
                            <Form.Control type="email" style={{marginTop: "1rem"}} placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required></Form.Control>                    
                            <Form.Label>Email</Form.Label>
                        </Form.Floating>
                        <Form.Floating id="pack" style={{marginTop: "1rem"}} >
                            <Form.Control type="text" style={{marginTop: "1rem"}} placeholder="Package" value={pack} onChange={e=>setPack(e.target.value)} required></Form.Control>                    
                            <Form.Label>Package</Form.Label>
                        </Form.Floating>
                        <Form.Floating id="message" style={{marginTop: "1rem"}} >
                            <Form.Control type="text" style={{marginTop: "1rem"}} placeholder="Message" value={message} onChange={e=>setMessage(e.target.value)} required></Form.Control>                    
                            <Form.Label>Message</Form.Label>
                        </Form.Floating>
                        <Button className='form-control mt-5' variant='dark' type="submit">Add Log</Button>
                    </Form>
                    </>
                :
                    <>
                    <h1 className='text-center mt-5'>Add a picture</h1>
                        <Form onSubmit={handleAddpost}>
                            <Form.Floating id="group"  style={{marginTop: "1rem"}} >
                                <Form.Control type="group" style={{marginTop: "1rem"}} placeholder="Group" value={group} onChange={e=>setGroup(e.target.value)} required></Form.Control>                    
                                <Form.Label>Group</Form.Label>
                            </Form.Floating>
                            <Form.Group id="post">
                                <Form.Control type="file" accept=".png, .jpg, .jpeg, .gif, .heic" onChange={e=>setPost(e.target.files[0])} style={{marginTop: "1rem"}}/>
                            </Form.Group>
                            <Button className='form-control mt-5' variant='dark' type="submit">Add Post</Button>
                        </Form>
                    </>
            }
        </Container>
        </>
    );
}

export default AddPost;