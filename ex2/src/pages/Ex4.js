import React, { useState } from "react";
import "../css/ex4.css"

/*
const list = [
    {num:"1", email:"test@korea.com", name:"하니"},
    {num:"2", email:"abc123@korea.com", name:"혜린"},
    {num:"3", email:"aaa@korea.com", name:"혜인"},
    {num:"4", email:"bbb@korea.com", name:"다니엘"},
    {num:"5", email:"ccc@korea.com", name:"민지"},
];
*/

function Data({member}) {
    return(
        <tr>
            <td>{member.num}</td>
            <td>{member.name}</td>
            <td>{member.email}</td>
        </tr>
    );
}

function Ex4() {
    // useState를 사용하여 list를 상태 변수로 선언
    const [list, setList] = useState([
        {num:"1", email:"test@korea.com", name:"하니"},
        {num:"2", email:"abc123@korea.com", name:"혜린"},
        {num:"3", email:"aaa@korea.com", name:"혜인"},
        {num:"4", email:"bbb@korea.com", name:"다니엘"},
        {num:"5", email:"ccc@korea.com", name:"민지"},
    ]);
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>이메일</th>
                    </tr>
                </thead>
                <tbody>
                    {/*
                        list로부터 하나씩 가져와서 vo에 저장한 후 
                        "Data" 라는 함수 컴포넌트를 호출할 때 인자인 
                        member라는 변수에 vo를 담아 전달한다.
                    */}

                    {list.map(vo => <Data member={vo}/>)}
                </tbody>
            </table>
        </div>
    );
}
export default Ex4;