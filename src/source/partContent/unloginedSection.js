import React, {Component} from 'react';
import { Dropdown, Form, Button } from 'react-bootstrap';



class UnloginedSection extends Component{
    render(){
        return(
            <Dropdown>
            <Dropdown.Toggle variant="scondary" id="dropdown-basic">
                Login
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Form className="LoginBox" onSubmit={function (e) {
                    e.preventDefault();
                    var memberList = this.props.memberList;
                    var loginSuccess = false;
                    for (var i = 0; i < Object.keys(memberList).length; i++) {
                        if (memberList[i].email === e.target.enterEmail.value) {
                            console.log(memberList[i].password === e.target.enterPW.value);
                            if (memberList[i].password === e.target.enterPW.value) {
                                this.props.onChangeMode(memberList[i]);
                                alert(memberList[i].name + "님 환영합니다.");
                                loginSuccess=true;
                                break;
                            }
                        }
                    }
                    if(!loginSuccess){
                        alert("아이디 혹은 비밀번호를 다시 확인해주세요.")
                    }

                }.bind(this)}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>이메일</Form.Label>
                        <Form.Control type="text" placeholder="Enter Email" name="enterEmail" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="enterPW" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        로그인
                        </Button>
                    <Button variant="primary" type="button" className="divRight" onClick={function (e) {
                        e.preventDefault();
                        this.props.signupMode("Signup");
                    }.bind(this)}>
                        회원가입
                        </Button>
                </Form>
            </Dropdown.Menu>
        </Dropdown>
        );
    }
}
export default UnloginedSection;