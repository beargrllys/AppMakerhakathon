import React, {Component} from 'react';
import './ect.css'
import { Button, Form, Col, Row} from 'react-bootstrap';



class TeamBuilding extends Component{
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            mode:"list",//list, edit,new
            data: this.props.data[0],
            teamset:{},
            teamNumber:0,
        }
    }

    getTeamList(){
        console.log(this.state.data);
        var content=[];
            content.push(
                <div className="tableBox">
                <div className="tableTitle teamnameBox">
                    <div className="teamname">
                        <p>#팀구성</p>
                    </div>
                    <div className="role">
                        <Button variant="outline-dark">새로운 팀 만들기</Button>
                    </div>
                </div>
                {this.getTeamContent()}
            </div>

            )
        return content
    }

    getPersonBox(_num){
        var data = this.props.data;
        var teammateList = [];
        var cap;
        var i=0;
        while(i < Object.keys(data[_num].teammateList).length){
            if(data[_num].captain === data[_num].teammateList[i].memberName){
                cap="(팀장)";
            }
            else{ cap="";}
            teammateList.push(
                    <div className="personBox">
                        <div className="name" >
                            <p>이름: {data[_num].teammateList[i].memberName}{cap}</p>
                        </div>
                        <div className="role" >
                            <p>직군: {data[_num].teammateList[i].memberrole}</p>
                        </div>
                    </div>

            );
            i=i+1;
        }
        return teammateList;
    }

    getTeamContent(){
        var data = this.props.data;
        var userdata = this.props.userData;
        var content=[];
        var buttonLetter =""
        var j=0;
        content.push()
        while(j< data.length){
            if(data[j].captain === userdata.name){
                buttonLetter = "편집하기";
            }
            else{
                buttonLetter = "상세보기";
            }
            content.push(
                <div className="teamBox">
                    <div className="tableTitle teamnameBox">
                        <div className="teamname">
                            <p>팀명: {data[j].teamName}</p>
                        </div>
                        <div className="editButton">
                            <Button variant="outline-dark"onClick={function(j,e){
                                e.preventDefault();
                                var already;
                                already = data[j].teammateList.find(x => parseInt(x.memberCode) === userdata.id);
                                if(already === undefined){
                                    this.setState({
                                        data:data[j],
                                        mode:"edit",
                                        editMode:true,
                                        teamNumber:j
                                    });
                                }
                                else{
                                    this.setState({
                                        data:data[j],
                                        mode:"edit",
                                        editMode:false,
                                        teamNumber:j
                                    });
                                }
                            }.bind(this,j)}>{buttonLetter}
                            </Button>
                        </div>
                    </div>
                    <div className="flex-container">
                    {this.getPersonBox(j)}
                    </div>
                </div>
            );
            j=j+1;
        }
        return content;
    }

    onChange = (e) =>{
        var copy = this.state.data;
        var member = this.props.member;
        copy.teamName = e.target.teamName.value;
        for(var i=0; i<Object.keys(copy.teammateList).length; i++){
            copy.teammateList[i].memberName = e.target.teamMate[i].value;
            copy.teammateList[i].memberrole = e.target.memberrole[i].value;
            let obj = member.find(x => x.name === e.target.teamMate[i].value);
            let index = member.indexOf(obj)
            copy.teammateList[i].memberCode = String(member[index].id);
        }
        this.setState({
            data:copy
        });
    };

    teamEditMateList(){
        var list = [];
        var i =0 ;
        while(i < 5){
            list.push(
                <Form.Group as={Row} controlId="formPlaintextPassword" className="titleMargin editSite">
                    <Form.Label column sm="2">
                    팀원:
                    </Form.Label>
                    <Col sm="4">
                    <Form.Control className="letterBox" type="teamMate" name="teamMate" value={this.state.data.teammateList[i].memberName} readOnly={this.state.editMode}/>
                    </Col>
                    <Form.Label column sm="2">
                    직군:
                    </Form.Label>
                    <Col sm="4">
                    <Form.Control className="letterBox" type="teamRole" name="teamRole" value={this.state.data.teammateList[i].memberrole} readOnly={this.state.editMode}/>
                    </Col>
                </Form.Group>
            );
            i=i+1;
        }
        return list;
    }

    handleSubmit = (e) => {
        var firstData = this.props.data;
        e.preventDefault();
        var member = this.props.member;
        var listSize = firstData.length;
        var i=0;
        if(this.state.editMode){
            ;
        }
        else{
            firstData[this.state.teamNumber].teamname= e.target.teamName.value;
            while(i<listSize){
                firstData[this.state.teamNumber].teammateList[i].memberName=e.target.teamMate[i].value
                firstData[this.state.teamNumber].teammateList[i].memberrole=e.target.teamRole[i].value
                let obj = member.find(x => x.name === e.target.teamMate[i].value);
                let index = member.indexOf(obj)
                firstData[this.state.teamNumber].teammateList[i].memberCode = String(member[index].id);
                i=i+1;
            }
            firstData[this.state.teamNumber].captain= e.target.teamName.value;
        }
        this.setState({
            data:firstData,
            mode:"list",
            editMode:false
        });
        console.log("root: ",this.state.data, firstData);
    }

    teamBuildingEdit(){
        var content=[];
        var buttonLetter;
        if(this.state.editMode){
            buttonLetter="참가 하기";
        }
        else{
            buttonLetter="저장 하기";
        }
        content.push(
            <div className="teamEditBox">
                <div className="boxTitle">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2" className="editSite">
                        팀명:
                        </Form.Label>
                        <Col sm="5">
                        <Form.Control className="letterBox" type="text" name="teamName" value={this.state.data.teamName} readOnly={this.state.editMode}/>
                        </Col>
                    </Form.Group>
                    {this.teamEditMateList()}
                    <Button variant="info" className="buttonMargin" type="submit" value="Submit">{buttonLetter}</Button>
                    <Button variant="warning" className="buttonMargin" onClick={function(){
                        this.setState({
                            mode:"list",
                            editMode:false
                        });
                    }.bind(this)}>뒤로가기</Button>
                </Form>
                </div>
            </div>
        );

        return content;
    }

    teamPageContorol(){
        var content=[];
        content.push(//list
            <div>{this.getTeamList()}</div>
        )
        content.push(
            <div>{this.teamBuildingEdit()}</div>
        )
        if(this.state.mode === "edit"){
            return content[1];
        }
        else if(this.state.mode === "list"){
            return content[0];
        }
    } 
    render(){
        return(
            <div>{this.teamPageContorol()}</div>
        );
    }
}
export default TeamBuilding;