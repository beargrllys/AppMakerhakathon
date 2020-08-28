import React, {Component} from 'react';
import './Rside.css'
import profileImages from './image/profileImage.png'
import abjustIcon from './image/adjust.png';
import Modal from './partContent/modalSection'


class Profile extends Component{

    shouldComponentUpdate(newProps, newState) {
      if (this.props.data === newProps.data) {
        return false;
      }
      return true;
    }

    modalSetting(){

    } 
    
    render(){
        var data = this.props.data;
        var abilityList = [];
        var contestedList = [];
        var i=0, j=0;
        while(i<data.ability.length){
          abilityList.push(
          <p className="fontMiddle">{data.ability[i]}</p>
          )
          i=i+1;
        }
        while(j<data.contested.length){
          contestedList.push(
          <p className="fontMiddle">{data.contested[j]}</p>
          )
          j=j+1;
        }
        return(
          <div className="sideCase">
            <div className="sideTitle"><p>포트폴리오</p></div>
            <div className="profileImageBox">
              <img src={profileImages} alt="profileImage" className="profileImage"></img>
            </div>
            <div className="profileName fontLarge">
              <p>{this.props.data.name}
              <button className="editButton"><img src={abjustIcon} alt="edit" className="editButton"></img></button>
              </p>
            </div>
            <div className="profileContent profileName">
              <p className="fontMiddle">이메일: {this.props.data.email}</p>
              <p className="fontMiddle">소속: {this.props.data.school}</p>
            </div>
            <div className="profileContent profileName">
              <p className="fontLarge">#능력
              <button className="editButton"><img src={abjustIcon} alt="edit" className="editButton"></img></button>
              </p>
              {abilityList}
            </div>
            <div className="profileContent profileName">
              <p className="fontLarge">#참가경력
              <button className="editButton"><img src={abjustIcon} alt="edit" className="editButton"></img></button>
              </p>
              {contestedList}
            </div>
          </div>
        );
    }
}

export default Profile;