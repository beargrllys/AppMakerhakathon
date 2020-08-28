import React, {Component} from 'react';
import './Rside.css'
import friendPic from './image/profileImage.png'


class Chatting extends Component{
    render(){
        return(
            <div className="sideCase">
                <div className="sideTitle"><p>친구/팀원 소통</p></div>
                <div className="profileContent">
                    <div className="friendListContent">
                        <div className="friendPicBox"><img src={friendPic} alt="friend" className="friendPic"></img></div>
                        <div className="friendText">
                            <p className="friendName">김철수</p>
                            <p className="friendExplain">3회 아이디어톤 같이 하는 중!</p>
                        </div>
                        <div className="friendButtonBox">
                            <button type="button" className="btn btn-secondary friendButton">프로필 보기</button>
                            <button type="button" className="btn btn-secondary friendButton">쪽지 보내기</button>
                        </div>
                    </div>

                    <div className="friendListContent">
                        <div className="friendPicBox"><img src={friendPic} alt="friend" className="friendPic"></img></div>
                        <div className="friendText">
                            <p className="friendName">김철수</p>
                            <p className="friendExplain">3회 아이디어톤 같이 하는 중!</p>
                        </div>
                        <div className="friendButtonBox">
                            <button type="button" className="btn btn-secondary friendButton">프로필 보기</button>
                            <button type="button" className="btn btn-secondary friendButton">쪽지 보내기</button>
                        </div>
                    </div>

                    <div className="friendListContent">
                        <div className="friendPicBox"><img src={friendPic} alt="friend" className="friendPic"></img></div>
                        <div className="friendText">
                            <p className="friendName">김철수</p>
                            <p className="friendExplain">3회 아이디어톤 같이 하는 중!</p>
                        </div>
                        <div className="friendButtonBox">
                            <button type="button" className="btn btn-secondary friendButton">프로필 보기</button>
                            <button type="button" className="btn btn-secondary friendButton">쪽지 보내기</button>
                        </div>
                    </div>

                    <div className="friendListContent">
                        <div className="friendPicBox"><img src={friendPic} alt="friend" className="friendPic"></img></div>
                        <div className="friendText">
                            <p className="friendName">김철수</p>
                            <p className="friendExplain">3회 아이디어톤 같이 하는 중!</p>
                        </div>
                        <div className="friendButtonBox">
                            <button type="button" className="btn btn-secondary friendButton">프로필 보기</button>
                            <button type="button" className="btn btn-secondary friendButton">쪽지 보내기</button>
                        </div>
                    </div>
                    <div className="iconBox">
                        <button className="iconPlus">
                        <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-plus-square iconPlus" fill="currentColor">
                            <path fillRule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                            <path fillRule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
                            <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chatting;