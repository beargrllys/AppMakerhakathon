import React, { Component } from 'react';
import './table.css'
import { Button} from 'react-bootstrap';



class Submit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode:"list",
            title:"fgwegwgew",
            file:"sdgdsdg아니라나ㅏㅡㅡ",
        }
    }

    shouldComponentUpdate(After, Before) {
        if (After === Before) {
            return false;
        }
        return true;
    }

    peopleFounder(_personCode){
        var memberInfo = this.props.memberInfo;
        var index;
        index = memberInfo.findIndex(x => x.id === _personCode);
        return memberInfo[index]
    }

    teamFounder(_personCode){
        var memberInfo = this.props.memberInfo;
        var contestInfo = this.props.contestData;
        var Name,index;
        var dataSet = {name:"", role:""};
        Name = memberInfo.find(x => x.id === _personCode).name;
        for(var i=0; i<Object.keys(contestInfo[0].team.teammateList).keys; i++){
            index = contestInfo[0].team.teammateList[i].findIndex(x => x.memberCode === _personCode);
            dataSet.name = index.memberName;
            dataSet.role = index.memberrole;
        }
        return dataSet
    }

    getContent(_num) {
        var data = this.props.data;
        var content = [];
        var i = 0;
        var start = _num * 10;
        while (i < Object.keys(data.submissionData).length) {
            if (i < Object.keys(data.submissionData).length) {
                content.push(<tr onClick={function (id, e) {
                    e.preventDefault();
                    this.setState({
                        title: data.submissionData[id].submissionTeam +" / "+ data.submissionData[id].submissioner+" / "+  "제출입니다.",
                        letter:data.submissionData[id].submissionURL,
                        mode:"read"
                    });
                }.bind(this,i)}><td>{i + 1}</td><td>{ data.submissionData[start + i].submissionTeam +" / "+  data.submissionData[start + i].submissioner+" / "+  "제출입니다."}</td><td>{data.submissionData[start + i].submissionDate}</td></tr>);
            }
            i = i + 1;
        }
        return content;
    }

    getNumberBar() {
        var data = this.props.data;
        var content = [];
        var listcontent = this.getContent(0);
        var contentsObject = { page: [], list: [] };
        var i = 0;
        var page_num;
        while (i < (Object.keys(data).length / 10)) {
            content.push(<li className="page-item"><a className="page-link" >{i + 1}</a></li>);
            i = i + 1;
        }
        contentsObject.list = listcontent;
        contentsObject.page = content;
        return contentsObject;
    }

    getmainContent() {//list read
        var data = this.props.data;
        var content = [];

        content.push(
        <div className="tableBox">
            <div className="columnBox">
                <div className="tableTitle">
                    <p>#{data.submissionName}</p>
                </div>
                <div className="">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>제출자</th>
                                <th className="tableContentWidth">제출자료</th>
                                <th>제출일</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.getNumberBar().list}
                        </tbody>
                    </table>

                    <div className="text-center">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="/">Previous</a></li>
                            {this.getNumberBar().page}
                            <li className="page-item"><a className="page-link" href="/">Next</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>);
        content.push(
            <div>
                <div className="tableTitle">
                    <p>#{data.submissionName}</p>
                </div>
                <div className="contentTitle">
                    <p>제목: {this.state.title}</p>
                    <div className="form-group">
                        <a href = {this.state.letter}><textarea className="form-control letterBox" id="exampleFormControlTextarea1" rows="5" disabled="true" value={this.state.letter}
                        /></a>
                    </div>
                    <Button variant="dark" className="backbutton" onClick={function(){
                        this.setState({
                            mode:"list",
                            title:"",
                            letter:"",
                        });
                    }.bind(this)}>뒤로가기</Button>
                </div>
            </div>
        )
        if(this.state.mode === "list"){
            return content[0];
        }
        else if(this.state.mode === "read"){
            return content[1];
        }
    }

    render() {
        return (
            <div>{this.getmainContent()}</div>
        );
    }
}
export default Submit;