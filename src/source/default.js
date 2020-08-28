import React, { Component } from 'react';
import './main.css'

class Default extends Component {

  shouldComponentUpdate(newProps, newState) {
    if (this.props.data === newProps.data) {
      return false;
    }
    return true;
  }

  render() {
    var data = this.props.data;
    var contestList = this.props.contestList;
    var lists = [];
    var i = 0;
    while (i < data) {
      lists.push(<div className="Info-item" key={contestList[i].key}>
        <img src={contestList[i].contestImage} rounded="true" ></img>
        <div className="Info-title">
          <p>{contestList[i].name}</p>
        </div>
      </div>)
      i = i + 1;
    }
    return (
      <div>
        <div className="choice_list">
          <h2 className="info_title">
            #참가한 대회
          </h2>
          <div className="Info_container">
            {lists}
          </div>
        </div>
      </div>
    );
  }
}

export default Default;