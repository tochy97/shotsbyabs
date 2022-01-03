import React, { useState } from 'react';
import { Form, Button, Card, Container, Col, Row } from "react-bootstrap";
import abby from "../../../pics/abby.jpg"

function Contact(props) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [req, setReq] = useState("");

    function sendRequest(e){
        console.log("sending request");
        e.preventDefault();
    }

    return (
        <Container style={{display:"flex"}}>
            <Col>
                <img src={abby} style={{width:"30vw"}} alt="My Photo"/>
            </Col>
            <Col style={{width:"30vw"}} >
                <h1>About Shotsbyabs</h1>
                <br/>
                <p>Photograph by Kevin Fides.</p>
                <br/>
                <p>Hello, my name is Abigail. I have been in the photography industry for 6 years now. Through photography, I have worked with a range of subjects such as newborns, senior sessions, maternity, weddings, and fashion editorial just to name a few.  I have been published multiple times by Voyage Magazine and Nu View Magazine. I absolutely love styling and curating the best setups for my clients!  I look forward to capturing beautiful memories for you and your loved one(s) soon.</p>
                <br/>
                <p>To inquirer about pricing and packages, feel free to fill out the form below and I will get back to you as soon as possible.</p>
                <Form onSubmit={sendRequest}>
                    <Form.Floating id="firstname">
                        <Form.Control type="text"value={firstname} placeholder="First Name" onChange={e=>setFirstname(e.target.value)} required></Form.Control>                            
                        <Form.Label>First Name</Form.Label>
                    </Form.Floating>
                    <Form.Floating id="lastname" style={{marginTop: "1rem"}}>
                        <Form.Control type="text"value={lastname} placeholder="Last Name" onChange={e=>setLastname(e.target.value)} required></Form.Control>                            
                        <Form.Label>Last Name</Form.Label>
                    </Form.Floating>
                    <Form.Floating id="email"  style={{marginTop: "1rem"}} >
                        <Form.Control type="email" style={{marginTop: "1rem"}} placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required></Form.Control>                    
                        <Form.Label>Email</Form.Label>
                    </Form.Floating>
                    <Form.Floating id="desc" style={{marginTop: "1rem"}} >
                        <textarea className="form-control" value={req} onChange={e=>setReq(e.target.value)} style={{height: "105px", marginTop: "1rem"}} placeholder="Enter your messages" required/>
                        <Form.Label>Enter your message</Form.Label>
                    </Form.Floating>
                    <Button type="submit" variant="dark" style={{marginTop:"1rem"}} className="form-control">Send</Button>
                </Form>
            </Col>
        </Container>
    );
}

export default Contact;