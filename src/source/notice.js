import React, { Component } from 'react';
import './table.css'
import { Button} from 'react-bootstrap';



class Notice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode:"list",
            title:"fgwegwgew",
            letter:"sdgdsdg아니라나ㅏㅡㅡ",
        }
    }

    shouldComponentUpdate(After, Before) {
        if (After === Before) {
            return false;
        }
        return true;
    }

    getContent(_num) {
        var data = this.props.data;
        var content = [];
        var i = 0;
        var start = _num * 10;
        while (i < Object.keys(data).length) {
            if (i < Object.keys(data).length) {
                content.push(<tr onClick={function (id, e) {
                    e.preventDefault();
                    this.setState({
                        title:data[id].noticeTitle,
                        letter:data[id].noticeContent,
                        mode:"read"
                    });
                }.bind(this,i)}><td>{i + 1}</td><td>{data[start + i].noticeTitle}</td><td>{data[start + i].noticeDate}</td></tr>);
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
        var content = [];
        content.push(
        <div className="tableBox">
            <div className="columnBox">
                <div className="tableTitle">
                    <p>#공지사항</p>
                </div>
                <div className="">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th className="tableContentWidth">제목</th>
                                <th>날짜</th>
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
                    <p>#공지사항</p>
                </div>
                <div className="contentTitle">
                    <p>제목: {this.state.title}</p>
                    <div className="form-group">
                        <textarea className="form-control letterBox" id="exampleFormControlTextarea1" rows="5" disabled="true" value={this.state.letter}
                        />
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
export default Notice;