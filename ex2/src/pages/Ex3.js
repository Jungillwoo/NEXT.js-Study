import React, { useState } from "react";
import "../css/ex3.css"

function Ex3() {
    const [vo, setVo] = useState({name:"", email:"", phone:""});
    function editVO(e) {
        //const {id, value} = e.target;
        //console.log(e.target.value);
        //console.log(e.target.id);
        // 지금 확인한 값이 무엇인지 알아내서 vo에 해당 변수에 대입
        let value = e.target.value;
        let id = e.target.id;

        setVo({
            ...vo, // 스프레드 속성 (vo를 하나 복사해 놓는 개념)
            [id]: value
        });
    }
    return (
        <div className="content">
            <h2>Third Page</h2>
            <div className="input-container">
                <label>이름:</label>
                <input type="text" name="name" id="name" onChange={editVO} className="input-box"/>
            </div>
            <div className="input-container">
                <label>이메일:</label>
                <input type="text" name="email" id="email" onChange={editVO} className="input-box"/>
            </div>
            <div className="input-container">
                <label>연락처:</label>
                <input type="text" name="phone" id="phone" onChange={editVO} className="input-box"/>
            </div>
            <hr/>
            <p>이름: {vo.name}</p>
            <p>이메일: {vo.email}</p>
            <p>연락처: {vo.phone}</p>
        </div>
    );
}
export default Ex3;