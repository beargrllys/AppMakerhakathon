import React, {Component} from 'react';
import { Dropdown} from 'react-bootstrap';
import '../ect.css';


class LoginedSection extends Component{
    render(){
        return(
                <Dropdown>
                        <Dropdown.Toggle variant="scondary" id="dropdown-basic">
                            {this.props.userdata.name}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1" onClick={function (e) {
                                e.preventDefault();
                                this.props.logout();
                            }.bind(this)}>로그아웃</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
        );
    }
}
export default LoginedSection;