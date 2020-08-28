import React, { Component } from 'react';
import './Rside.css'
import '../App.css';
import { Button } from 'react-bootstrap';
import UnloginedScetion from './partContent/unloginedSection'
import LoginedScetion from './partContent/loginedSection'


class Login extends Component {



    shouldComponentUpdate(After, Before) {
        if (After === Before) {
            return false;
        }
        return true;
    }

    friendUI(_mode) {
        var content = null;
        var before;
        this.shouldComponentUpdate(_mode,before)
        if (this.props.data && this.props.userdata.admin === "on") {
            if(_mode === 1){
                content = <Button variant="light" className="TopMenuBox">사용자 모드 켜기</Button>
            }
            else if (_mode === -1){
                content = <Button variant="light" className="TopMenuBox" >관리자 모드 켜기</Button>
            }
            before = _mode;
        }
        return content;
    }

    adminUI() {
        var content = null;
        if (this.props.data) {
            content = <Button variant="outline-info" className="friendBox">친구창 열기</Button>
        }
        return content;
    }

    LoginedUI() {
        var content = null;
        if (this.props.data) {
            content = <LoginedScetion
                memberList={this.props.memberList}
                data={this.props.data}
                userdata={this.props.userdata}
                onChangeMode={function (_mode) {
                    this.props.onChangeMode(_mode);
                }.bind(this)}
                signupMode={function (_mode) {
                    this.props.signupMode(_mode);
                }.bind(this)}
                logout={function () {
                    this.props.logout();
                }.bind(this)}
            ></LoginedScetion>
        }
        else {
            content = <UnloginedScetion
                memberList={this.props.memberList}
                data={this.props.data}
                onChangeMode={function (_mode) {
                    this.props.onChangeMode(_mode);
                }.bind(this)}
                signupMode={function (_mode) {
                    this.props.signupMode(_mode);
                }.bind(this)}
                logout={function () {
                    this.props.logout();
                }.bind(this)}
            ></UnloginedScetion>
        }
        return content;
    }

    render() {
        return (
            <div className="loginSecBox">
                <div className="btn-group loginMargin">
                    {this.LoginedUI()}
                </div>
            </div>
        );
    }
}
export default Login;