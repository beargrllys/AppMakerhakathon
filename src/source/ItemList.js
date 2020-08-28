import React, {Component} from 'react';


class ItemList extends Component{
    render(){
        return(
        <div className="choice_list">
          <h2 className="info_title">
            #참가중인 대회
          </h2>
          <div className="flex_container">
            <div className="flex-item"><p>A_contest</p></div>
            <div className="flex-item"><p>B_contest</p></div>
            <div className="flex-item"><p>C_contest</p></div>
            <div className="flex-item"><p>D_contest</p></div>
            <div className="flex-item"><p>E_contest</p></div>
            <div className="add-contest">
              <svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-plus-square addIcon" fill="currentColor">
                  <path fillRule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                  <path fillRule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
                  <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
              </svg>
            </div>
          </div>
        </div>
        );
    }
}

export default ItemList;