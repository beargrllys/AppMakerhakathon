import React, {Component} from 'react';
import './main.css'
import * as icon from 'react-bootstrap-icons';



class MyContest extends Component{
    shouldComponentUpdate(newProps, newState) {
        if (this.props.data === newProps.data) {
          return false;
        }
        return true;
      }

    render(){
        var data = this.props.userInfo;
        var lists = [];
        var nowContestLists = [];
        var lastContestLists = [];
        var i=0,j=0,k = 0;
        console.log(data.todoList.length);
        while (i < data.todoList.length) {
          lists.push(<div className="Todo-item" key={i}>
            <div className="Todo-title">
              <p>{data.todoList[i]}</p>
            </div>
          </div>)
          i = i + 1;
        }
        while (j < data.contesting.length) {
            nowContestLists.push(<div className="Info_item" key={j}>
              <div className="Info_title marginSetting">
                <p>{data.contesting[j]}</p>
              </div>
            </div>)
            j = j + 1;
          }
          nowContestLists.push(<div className="Info_item" key={j}>
              <div className="Info_title">
              <icon.Plus className="myContestIcon"/>
              </div>
            </div>)
        while (k < data.contested.length) {
            lastContestLists.push(<div className="Info_item" key={k}>
                <div className="Info_title marginSetting">
                <p>{data.contested[k]}</p>
                </div>
            </div>)
            k = k + 1;
          }
        return (
          <div>
            <div className="Todo_choice_list">
              <h2 className="Todo_title">
                팀관리
              </h2>
              <div className="Todo_container">
                {lists}
              </div>
            </div>
            <div className="Info_choice_list">
              <h2 className="Info_title">
                #참가한 대회
              </h2>
              <div className="Info_container">
                {lastContestLists}
              </div>
            </div>
          </div>
        );
    }
}
export default MyContest;