import React, { useState } from 'react';
import { Form, Button, Card, Container, Col, Row, Image } from "react-bootstrap";
import abby from "../../../pics/abby.jpg"
import instagram from "../../../pics/instagram.png"

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
                <p>Photograph by Kevin Fides.</p>
            </Col>
            <Col style={{width:"30vw"}} >
                <h1>About Shotsbyabs</h1>
                <br/>
                <br/>
                <p>Hello, my name is Abigail. I have been in the photography industry for 6 years now. Through photography, I have worked with a range of subjects such as newborns, senior sessions, maternity, weddings, and fashion editorial just to name a few.  I have been published multiple times by Voyage Magazine and Nu View Magazine. I absolutely love styling and curating the best setups for my clients!  I look forward to capturing beautiful memories for you and your loved one(s) soon.</p>
                <br/>
                <p>To inquirer about pricing and packages, feel free to contact me I will get back to you as soon as possible.</p>
                <Card className='p-4'>
                    Phone: (469) - 487 - 0159
                    <br/>
                    Email: shotsbyabs@gmail.com
                    <br/>
                    <a href="https://www.instagram.com/shotsbyabs/">
                    <Image src={instagram} className="mt-2" style={{width:"2rem"}} /> 
                    </a>
                </Card>
            </Col>
        </Container>
    );
}

export default Contact;