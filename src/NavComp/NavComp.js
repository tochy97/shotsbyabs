import React, { useState } from 'react';
import { Navbar, Container, Offcanvas, Form, FormControl, Button } from "react-bootstrap";
import logo from "../logo.png";

function NavComp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    return (
    <Navbar expand={false} style={{color:"#fff"}}>
    <Container fluid>
      <Navbar.Brand href="#"><img src={logo} style={{width:"10rem"}} alt="Shots by Abs" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="offcanvasNavbar" 
        style={{marginRight:"2rem", border:0}}>Admin</Navbar.Toggle> 
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">Login</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form className="d-block">
            <Form.Floating id="username">
                <Form.Control type="username" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} required></Form.Control>
                <Form.Label>Username</Form.Label>
            </Form.Floating>
            <Form.Floating id="password" style={{marginTop: "1rem"}} >
                <Form.Control type="password" placeholder="Password" rvalue={password} onChange={e=>setPassword(e.target.value)} required></Form.Control>
                <Form.Label>Password</Form.Label>
            </Form.Floating>
            <Button variant="dark" className='form-control mt-3'>Login</Button>
          </Form>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
    );
}

export default NavComp;