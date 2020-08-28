import React, { Component } from 'react';
import './ect.css'
import { Form, Button } from 'react-bootstrap';


class Loginform extends Component {
    render() {
        return (
            <div>
                <div className="sideTitle"><p>로그인</p></div>
                <Form className="formBox">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>이메일</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}
export default Loginform;