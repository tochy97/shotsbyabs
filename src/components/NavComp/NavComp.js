import React, { useState } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { Navbar, Container, Offcanvas, Form, Nav, Button, Image, Accordion } from "react-bootstrap";
import logo from "../../pics/logo.png";
import { loginUser, logoutUser } from '../../redux/actionCreators/authActionCreators';
import instagram from "../../pics/instagram.png";
import "./style.css"

function NavComp() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();

    const {isLoggedIn} = useSelector(
      (state) =>({
        isLoggedIn:state.auth.isLoggedIn, 
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

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [req, setReq] = useState("");

    function sendRequest(e){
        console.log("sending request");
        e.preventDefault();
    }

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    return (
      <>
    <Navbar expand={false} style={{color:"#fff"}}>
    <Container fluid>
      <Navbar.Brand onClick={handleShow} className='hovCurs'> <img src={logo} style={{width:"7em"}} alt="Shots by Abs" /></Navbar.Brand>
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
              <Offcanvas.Title id="offcanvasNavbarLabel">Hey Abby!</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link style={{color:"black"}} href="/admin/addpost">Add a post</Nav.Link>
                <Nav.Link style={{color:"black"}} href="/admin/managepost">Manage posts</Nav.Link>
                <Nav.Link style={{color:"black"}} href="/admin/addlog">Log a sale</Nav.Link>
                <Nav.Link style={{color:"black"}} href="/admin/managelog">Manage logs</Nav.Link>
                <Nav.Link style={{color:"black"}} href="/admin/addPack">Add a package</Nav.Link>
                <Nav.Link style={{color:"black"}} href="/admin/managePack">Manage packages</Nav.Link>
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


  <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title style={{color:"#039374"}}>Welcome to Shotsbyabs!!</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Container style={{float:"left",top:"1rem", position:"relative", height:"auto", width:"auto", display:"block"}}>
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
  </>
    );
}

export default NavComp;