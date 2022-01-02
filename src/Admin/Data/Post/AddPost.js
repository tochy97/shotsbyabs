import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom";
import { Divider } from '@mui/material';
import { Button, Container, Form, ProgressBar } from 'react-bootstrap';
import { storage, store } from "../../../config/firebase"
import { addPost } from "../../../redux/actionCreators/dataActionCreators"

function AddPost(props) {
    const [post,setPost] = useState("");
    const [group,setGroup] = useState("");
    const [progress,setProgress] = useState(0);
    const [datatype, setDatatype] = useState("post");
    
    const dispatch = useDispatch();

    function handleAddpost(e){
        e.preventDefault();
        const data = {
            post:"",
            group:group,
            type:datatype,
            createdDate: new Date(),
        }
        store.collection("posts").add(data).then(async res=>{
            const document = await res.get();
            const postData = {data: document.data(),id: document.id};
            const uploadRef = storage.ref(`posts/${data.group}/${document.id}`);
    
            uploadRef.put(post).on("state_change", (snapshot) =>{
                const progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes) *100)
                setProgress(progress);
            },(err) =>{
            },async () =>{
                const url = await uploadRef.getDownloadURL();
                store.collection("posts").doc(document.id).update({
                    post:url,
                })
                .then(()=>{
                    postData.data.post = url;
                    console.log(postData);
                    dispatch(addPost(postData));
                })
                .catch((err) =>{
                })
            });
        })
        .catch(err=>{
        })
    }

    return (
        <Container>
            <h1 className='text-center'>Add a picture</h1>
            {
                progress > 0 && progress < 100
                ? 
                    <> 
                        <Divider className="font-weight-bold text-center py-4"><h1>Uploading Post {progress} % </h1></Divider>  <ProgressBar now={progress} max={100}/> 
                    </> 
                : progress === 100 
                ? 
                    <> 
                        <Divider className="font-weight-bold text-center py-4"><h1>Post uploaded succcessfully</h1></Divider>
                    </> 
                :
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
            }
        </Container>
    );
}

export default AddPost;