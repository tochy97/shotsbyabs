import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom"
import { Button, Container, Form } from 'react-bootstrap';

function AddPack(props) {
    const [pack, setPack] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState(0.00);
    const [datatype, setDatatype] = useState("pack");
    
    const dispatch = useDispatch();

    function handleAddpost(e){
        const data = {
            pack:pack,
            desc:desc,
            price:price,
            type:datatype,
            createdDate: new Date(),
        }
        e.preventDefault();
    }

    return (
        <Container>
            <h1 className='text-center'>Log a sale</h1>
            <Form>
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
            </Form>
        </Container>
    );
}

export default AddPack;