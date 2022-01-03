import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Divider from '@mui/material/Divider';

const Footer = () => {
    return (
        <div style={{marginTop:"2rem"}}>
            <Divider light/>
            <Row style={{marginTop:"1rem", padding:"1rem", bottom:0, left:0, width:"full"}}>
                <Col style={{marginLeft:"3rem"}}>
                    <p>Website by: <a href='https://tochyegeonu.com/'>Tochukwu Egeonu</a></p>
                </Col>
            </Row>
        </div>
    )
}

export default Footer