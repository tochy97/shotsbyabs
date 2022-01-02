import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { Container, Button, Image, Offcanvas, Form, Accordion } from 'react-bootstrap';
import instagram from "../pics/instagram.png";


function SidePanel() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [req, setReq] = useState("");

    function sendRequest(e){
        console.log("sending request");
        e.preventDefault();
    }

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container style={{width:"auto", position:"static", float:"left"}}>
            <Button style={{color:"#039374", backgroundColor:"white", border:0, padding:"1rem", margin:"1rem"}} onClick={handleShow}>
            <h5>More</h5>
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title style={{color:"#039374"}}>Welcome to Shotsbyabs!!</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Container style={{float:"left",top:"1rem", position:"relative", height:"auto", width:"auto", display:"block"}}>
                    <Button className='m-2' style={{color:"#000", backgroundColor:"#fff", border:0}}>Couples</Button>
                    <br/>
                    <Button className='m-2' style={{color:"#000", backgroundColor:"#fff", border:0}}>Weddings</Button>
                    <br/>
                    <a href="https://www.instagram.com/shotsbyabs/">
                    <Image src={instagram} className="m-3" style={{width:"2rem"}} />
                    </a>
                    <Container>
                        <Accordion defaultActiveKey="1">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Contact Me</Accordion.Header>
                                <Accordion.Body>
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
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Container>
                </Container>
            </Offcanvas.Body>
            </Offcanvas>
        </Container>
    );
}

export default SidePanel;