import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom"
import { Button, Container, Form } from 'react-bootstrap';

function AddLog(props) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [total, setTotal] = useState(0.00);
    const [email, setEmail] = useState("");
    const [pack, setPack] = useState("");
    const [datatype, setDatatype] = useState("log");
    const [message, setMessage] = useState("");
    
    const dispatch = useDispatch();

    function handleAddpost(e){
        e.preventDefault();
        const data = {
            firstname:firstname,
            lastname:lastname,
            total:total,
            email:email,
            pack:pack,
            type:datatype,
            message:message,
            createdDate: new Date(),
        }
    }

    return (
        <Container>
            <h1 className='text-center'>Log a sale</h1>
            <Form>
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
            </Form>
        </Container>
    );
}

export default AddLog;