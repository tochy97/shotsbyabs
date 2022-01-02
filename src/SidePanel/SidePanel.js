import React from 'react';
import { Link } from "react-router-dom"
import { Container, Button, Image } from 'react-bootstrap';
import instagram from "../pics/instagram.png";


function SidePanel(props) {
    return (
        <Container style={{float:"left",top:"1rem", position:"relative", height:"100vh", width:"auto", display:"block"}}>
            <Button className='m-2' style={{color:"#000", backgroundColor:"#fff", border:0}}>Couples & Wedding</Button>
            <br/>
            <Button className='m-2' style={{color:"#000", backgroundColor:"#fff", border:0}}>Contact</Button>
            <br/>
            <Link to="https://github.com/Joeyryanbridges">
            <Image src={instagram} className="m-3" style={{width:"2rem"}} />
            </Link>
        </Container>
    );
}

export default SidePanel;