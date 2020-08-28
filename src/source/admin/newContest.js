import React, { Component } from 'react';
import './admin.css'
import { Form, Button, FormGroup } from 'react-bootstrap';



class NewContest extends Component {
    render() {
        return (
            <div>
                <div className="sideTitle"><p>새로운 해커톤 개최하기</p></div>
                <Form className="formBox">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>해커톤 이름</Form.Label>
                        <Form.Control type="name" placeholder="Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>해커톤 기간</Form.Label>
                        <Form.Row>
                            <Form.Row className="dateMargin">
                                <Form.Control type="date" placeholder="행사 시작일" className="dateHalf" />
                                <Form.Text className="text-muted">
                                    부터
                        </Form.Text>
                            </Form.Row>
                            <Form.Row className="dateMargin">
                                <Form.Control type="date" placeholder="행사 종료일" className="dateHalf" />
                                <Form.Text className="text-muted">
                                    까지
                        </Form.Text>
                            </Form.Row>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>해커톤 참여인원</Form.Label>
                        <Form.Control type="number" placeholder="숫자" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>팀 당 인원수</Form.Label>
                        <Form.Control type="number" placeholder="숫자" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>해커톤 소개</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Button variant="dark" type="submit" className="bigButton">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}
export default NewContest;