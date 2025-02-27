import React, { useState } from "react";

function test0() {
    //alert({str}); // str 은 지역변수이기 때문에 여기서 {str}을 사용할 수 없다.
}

function Ex2() {
    let myFont = { fontSize: "30px", color: "#fff" };
    const [str, setStr] = useState("");
    function test(n) {
        let msg = 0;
        switch(n) {
            case 1: 
                msg = 100;
                break;
            case 2:
                msg = 200;
                break;
            case 3: 
                msg = 300;
                break;
            default:
                msg = 0;
                break;         
        }
        setStr(msg); // str 변수에 "안녕하세요"를 저장한다.
    }
    return (
        <>
            <br/>
            <h2 style={myFont}>Second Page:{str}</h2>
            <br/>
            <button type="button" onClick={() => test(1)}>change1</button>
            <br/>
            <br/>
            <button type="button" onClick={() => test(2)}>change2</button>
            <br/>
            <br/>
            <button type="button" onClick={() => test(3)}>change3</button>
        </>
    );
}
export default Ex2;