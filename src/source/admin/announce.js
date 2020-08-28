import React, { Component } from 'react';
import './admin.css'
import { Dropdown } from 'react-bootstrap';


class Announce extends Component {
    render() {
        return (
            <div>
                <div className="tableBox">
                    <div className="columnBox">
                        <div className="tableTitle">
                            <p># 공지사항</p>
                        </div>
                        <div className="">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th className="tableContentWidth">제목</th>
                                        <th>작성자</th>
                                        <th>날짜</th>
                                        <th>조회수</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>죄송합니다</td>
                                        <td>관리자</td>
                                        <td>8-27</td>
                                        <td>12</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>안녕하세요</td>
                                        <td>운영자</td>
                                        <td>8-28</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>안녕히계세요</td>
                                        <td>코큰자</td>
                                        <td>8-29</td>
                                        <td>24</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>감사합니다.</td>
                                        <td>감사한자</td>
                                        <td>8-30</td>
                                        <td>53</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>저리 가세요</td>
                                        <td>참모총장</td>
                                        <td>8-31</td>
                                        <td>24</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="text-center">
                                <ul className="pagination">
                                    <li className="page-item"><a className="page-link" href="/">Previous</a></li>
                                    <li className="page-item"><a className="page-link" href="/">1</a></li>
                                    <li className="page-item"><a className="page-link" href="/">2</a></li>
                                    <li className="page-item"><a className="page-link" href="/">3</a></li>
                                    <li className="page-item"><a className="page-link" href="/">Next</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Announce;