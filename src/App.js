import React, { Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import membetList from './source/Data/member';
import contest from './source/Data/contestInfo';
import MenuBar from './source/menuBar';
import TopMenu from './source/topMenu';
import Default from './source/default';
import Profile from './source/profile';
import Chatting from './source/chatting';
import FooterBlock from './source/footer';
import Notice from './source/notice';
import Submit from './source/submit';
import LoginSec from './source/login';
import Mycontest from './source/myContest';
import Signup from './source/signup';
import Admin from './source/admin/admin';
import Announ from './source/admin/announce';
import Newcontest from './source/admin/newContest';
import TeamBuilding from './source/teambuilding'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contestCount: 5,
      adminMode: -1,//사용자모드:-1 관리자모드: 1
      mode: 'teambuilding',
      nowLogined: {
        "id": 5,
        "email": "js_7744@naver.com",
        "password": "7744",
        "name": "박나리2",
        "phoneNumber": "010-3454-0511",
        "school": "한양대학교",
        "job": "개발자",
        "ability": ["Unity", "Game", "우웩"],
        "admin": "on",
        "todoList": ["김성은", "김현수", "박나리", "최민현", "백사림"],
        "contesting": ["AContest", "BContest", "CContest"],
        "contested": ["DContest", "EContest","AContest","BContest","CContest"]
      },
      Logined: true,
      mainData:{},
      members: JSON.parse(JSON.stringify(membetList)),
      contests: JSON.parse(JSON.stringify(contest)),
    }
  }

  getChangeUserInfo() {
    var content;
    content = <Profile data={this.state.nowLogined} changeProfile={function (changeInfoType, changeInfo) {
      var id = this.state.nowLogined.id;
      var id_pos = id - 1;
      var firstData = this.state.members;
      var nowLoginUser = this.state.nowLogined;
      if (changeInfoType === "name") {
        firstData[id_pos].name = changeInfo;
        nowLoginUser.name = changeInfo;
      }
      else if (changeInfoType === "ability") {
        firstData[id_pos].ability = changeInfo;
        nowLoginUser.ability = changeInfo;
      }
      else if (changeInfoType === "contested") {
        firstData[id_pos].contested = changeInfo;
        nowLoginUser.contested = changeInfo;
      }
      this.setState({
        members: firstData,
        nowLogined: nowLoginUser
      });
    }.bind(this)}></Profile>;
    return content;
  }


  getmianContent() {
    var content = null;
    if (this.state.mode === 'default') {
      content = <Default data={this.state.contestCount} contestList={this.state.contests}></Default>;
    }
    else if (this.state.mode === 'portfolio') {
      content = <div>{this.getChangeUserInfo()}</div>
    }
    else if (this.state.mode === 'notice') {
      content = <Notice data = {this.state.mainData}></Notice>;
    }
    else if (this.state.mode === 'teambuilding') {
      content = <TeamBuilding data = {this.state.contests[0].team} contestData={this.props.contests} userData = {this.state.nowLogined} member={this.state.members} teamEdit={function(teamNumber,editMode){
        if(editMode){//참가하기
        }
        else{//저장하기
          

        }
      }.bind(this)}></TeamBuilding>;
    }
    else if (this.state.mode === 'submit') {
      content = <Submit data = {this.state.mainData} memberInfo = {this.state.members} contestData = {this.state.contests}></Submit>;
    }
    else if (this.state.mode === 'myContest') {
      content = <Mycontest userInfo={this.state.nowLogined}></Mycontest>;
    }
    else if (this.state.mode === 'newContest') {
      content = <Newcontest></Newcontest>;
    }
    else if (this.state.mode === 'Signup') {
      content = <Signup onSubmit={function (newList) {
        this.setState({
          members: newList,
          mode: "default"
        });
      }.bind(this)}
        memberList={this.state.members}></Signup>;
    }
    return content;
  }

  render() {
    return (
      <div className="containers">
        <div className="topMenu">
          <TopMenu className="TopMenuBox"></TopMenu>
        </div>
        <div className="login_section">
          <LoginSec onChangeMode={function (_userInfo) {
            var temp = _userInfo;
            this.setState({
              mode: "default",
              nowLogined: temp,
              Logined: true
            })
          }.bind(this)}
            memberList={this.state.members}
            signupMode={function (_mode) {
              this.setState({
                mode: "Signup"
              })
            }.bind(this)}
            data={this.state.Logined}
            userdata={this.state.nowLogined}
            logout={function () {
              this.setState({
                mode: "default",
                nowLogined: {},
                Logined: false
              })
            }.bind(this)}
            adminMode={this.state.adminMode}
            changeAdminMode={function () {
              var temp = this.state.adminMode;
              temp = temp * (-1);
              this.setState({
                adminMode: temp
              })
            }.bind(this)}
          ></LoginSec>
        </div>
        <MenuBar
          Logined={this.state.Logined}
          onChangeMain={function (_mode) {
            this.setState({
              mode: _mode
            })
          }.bind(this)}
          onChangeContest={function(_clickMode, _contestData){
            var _mode;
            var modeSave={};
            if(_clickMode === "notice"){
              _mode = "notice";
              modeSave=_contestData;
            }
            else if(_clickMode === "teambuilding"){
              _mode = "teambuilding";
              modeSave=_contestData;
            }
            else{
              _mode = "submit";
              modeSave=_contestData;
            }
            this.setState({
              mode:_mode,
              mainData:modeSave
            })
          }.bind(this)}
          ContestData = {this.state.contests}
          > </MenuBar>

        <div className="main">
          {this.getmianContent()}
        </div>
        <FooterBlock></FooterBlock>
      </div>
    );
  }
}

export default App;
