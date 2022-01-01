import React from 'react';
import { Container, Form } from 'react-bootstrap';

function Login(props) {
    return (
        <Container>
            <Form>
                <Form.Control type="text" placeholder='username'/>
            </Form>
        </Container>
    );
}

export default Login;