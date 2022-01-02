import React, { useState, useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { getAuth } from "firebase/auth";
import { Navbar, Container, Offcanvas, Form, Nav, Button } from "react-bootstrap";
import { auth } from '../config/firebase';
import logo from "../pics/logo.png";
import { loginUser, logoutUser } from '../redux/actionCreators/authActionCreators';

function NavComp() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();

    const {isLoggedIn, id} = useSelector(
      (state) =>({
        isLoggedIn:state.auth.isLoggedIn, 
        id:state.auth.id,
      }), shallowEqual
    );

    function handleLogin(e){
      e.preventDefault();
      dispatch(loginUser(email,password));
    }

    function handleLogout(e){
      e.preventDefault();
      dispatch(logoutUser());
    }
    
    return (
    <Navbar expand={false} style={{color:"#fff"}}>
    <Container fluid>
      <Navbar.Brand href="/"><img src={logo} style={{width:"10rem"}} alt="Shots by Abs" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="offcanvasNavbar" 
        style={{marginRight:"2rem", border:0, color:"#039374"}}>Admin</Navbar.Toggle> 
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
      >
        {
          isLoggedIn
          ?
            <>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Hello Abby!</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link style={{color:"black"}} href="#">Home</Nav.Link>
                <Nav.Link style={{color:"black"}} href="#">Link</Nav.Link>
                <Button className='mt-5' variant='dark' onClick={handleLogout}>Logout</Button>
              </Nav>
            </Offcanvas.Body>
            </>
          :
          <>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Login</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form className="d-block" onSubmit={handleLogin}>
              <Form.Floating id="email">
                  <Form.Control type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required></Form.Control>
                  <Form.Label>Email</Form.Label>
              </Form.Floating>
              <Form.Floating id="password" style={{marginTop: "1rem"}} >
                  <Form.Control type="password" placeholder="Password" rvalue={password} onChange={e=>setPassword(e.target.value)} required></Form.Control>
                  <Form.Label>Password</Form.Label>
              </Form.Floating>
              <Button variant="dark" className='form-control mt-3' type="submit">Login</Button>
            </Form>
          </Offcanvas.Body>
          </>
        }
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
    );
}

export default NavComp;