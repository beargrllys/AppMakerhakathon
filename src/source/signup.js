import React, { Component } from 'react';
import './ect.css'
import { Form, Button } from 'react-bootstrap';
import * as icon from 'react-bootstrap-icons';
import fs from 'fs';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.passwordConf = false;
        this.state = {
            abilityCount: 1
        }
    }
    shouldComponentUpdate(newProps, newState) {
        if (this.props.data === newProps.data) {
          return false;
        }
        return true;
      }

    render() {
        var loadData = this.props.memberList;
        console.log(loadData);
        var i = 1;
        var abilityList = [];
        var memberInfo = {
            id: "",
            email: "",
            password: "",
            name: "",
            phoneNumber: "",
            school: "",
            job: "",
            ability: "",
            admin: ""
        };
        while (i <= this.state.abilityCount) {
            abilityList.push(
                <Form.Control type="ability" name={`ability${i}`} placeholder="능력" />
            )
            i = i + 1;
        }
        return (
            <div className="signupBox">
                <div className="sideTitle"><p>회원가입</p></div>
                <Form className="formBox" onSubmit={function (e) {
                    var ability = [];
                    var temp = 1;
                    e.preventDefault();
                    while (temp <= i) {
                        ability[temp - 1] = e.target.ability - temp.value;
                        temp = temp + 1;
                    }
                    if (e.target.password.value === e.target.passwordConfirm.value) {

                        this.passwordConf = true;
                    }
                    else {
                        alert("비밀번호가 일치하지 않습니다.");

                    }
                    if (this.passwordConf) {
                        this.props.onSubmit(
                            memberInfo.id = Object.keys(loadData).length + 1,
                            memberInfo.email = e.target.email.value,
                            memberInfo.password = e.target.password.value,
                            memberInfo.name = e.target.name.value,
                            memberInfo.phoneNumber = e.target.phoneNumber.value,
                            memberInfo.school = e.target.affiliation.value,
                            memberInfo.job = e.target.job.value,
                            memberInfo.ability = ability,
                            memberInfo.admin = e.target.admin.value,
                            memberInfo.todoList = [],
                            memberInfo.contesting = [],
                            memberInfo.contested = []
                        );
                        loadData.push(memberInfo);
                        this.props.onSubmit(loadData);
                        alert("회원가입이 완료되었습니다.");
                        this.setState({
                            passwordConf: false
                        });
                    }
                }.bind(this)}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>이메일</Form.Label>
                        <Form.Control type="email" name="email" placeholder="이메일" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control type="password" name="password" placeholder="비밀번호" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPasswordConf">
                        <Form.Label>비밀번호  확인</Form.Label>
                        <Form.Control type="passwordConfirm" name="passwordConfirm" placeholder="비밀번호 확인" />
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>이름</Form.Label>
                        <Form.Control type="name" name="name" placeholder="이름" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPhone">
                        <Form.Label>연락처</Form.Label>
                        <Form.Control type="phoneNumber" name="phoneNumber" placeholder="연락처" />
                        <Form.Text className="text-muted">
                            행사 진행간 연락할수 있는 연락처
                    </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>소속</Form.Label>
                        <Form.Control type="affiliation" name="affiliation" placeholder="소속" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea2">
                        <Form.Label>직군</Form.Label>
                        <Form.Control type="job" name="job" placeholder="직군" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea3">
                        <Form.Label>능력</Form.Label>
                        {abilityList}
                        <icon.FilePlus className="Plusicon" onClick={function () {
                            var Count = this.state.abilityCount + 1;
                            this.setState({
                                abilityCount: Count
                            });
                        }.bind(this)} />
                    </Form.Group>
                    <Form.Check
                        type={'checkbox'}
                        id={`default-checkbox`}
                        label={`관리자계정입니다.`}
                        name="admin"
                    />
                    <Button variant="dark" type="submit" className="submitButton">
                        회원가입
                    </Button>
                </Form>

            </div>
        );
    }
}
export default Signup;