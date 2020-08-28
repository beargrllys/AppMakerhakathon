import React, {Component} from 'react';
import logo from './image/LOGO.png';
import './menu.css';
import { Nav } from 'react-bootstrap';



class MenuBar extends Component{


  shouldComponentUpdate(set) {
    if (set) {
        return false;
    }
    return true;
}

  getPortfolio(Logined){
    var content=null;
    if(Logined){//로그인되었음
      content = <div className="text_center menu_icon"onClick={function(){
        this.props.onChangeMain("portfolio");
      }.bind(this)}> 포트폴리오</div>
      return content;
    }
  }
    getMycontest(Logined){
      var content=null;
      if(Logined){//로그인되었음
        content = <div className="text_center menu_icon" onClick={function(){
          this.props.onChangeMain("myContest");
        }.bind(this)}> MY 대회</div>
        return content;
      }
    }
    getContestMenu(){
      var content=[];
      var ContestData = this.props.ContestData;
      if(this.props.Logined){
      content[0] = <div className="text_center menu_icon" onClick={function(){
        this.props.onChangeContest("teambuilding",ContestData[0].team);
      }.bind(this)}> 팀빌딩</div>
      }
      return content;
    }


    render(){
        return(
        <div className="side">
          <Nav justify variant="tabs">
            <a className="logo" href="/ ">
              <img src={logo} alt="logo_pic" className="image_size"/>
            </a>
            {this.getMycontest(this.props.Logined)}
            {this.getPortfolio(this.props.Logined)}
            {this.getContestMenu(this.props.Logined)}
          </Nav>

        </div>
        );
    }
}

export default MenuBar;