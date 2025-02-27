import React, { useState } from "react";
import "../css/ex5.css";
import Ex5_sub from "./Ex5_sub";

function Ex5(data) { // data는 Properties라고 하며, 인자라고 이해하면 된다.
                     // 이런 Properties는 이 컴포넌트 내에서 변경할 수 없다.
                     // data.year = 2000; 이런 것을 할 수 없다.
    const [title, setTitle] = useState(data.str);             
    const [year, setYear] = useState(data.year); 
    
    function change() {
        setTitle("정일우");
        setYear(1999);
    }

    return(
        <div className="content">
            <br/>
            <p>{title} ({year})</p>
            <br/>
            <Ex5_sub year={year}/>
            <br/>
            <hr/>
            <br/>
            <button type="button" onClick={() => {
                // 익명 함수 영역
                setTitle(title != '정일우'?'정일우':'');
                setYear(year+1);
            }}>change</button>
        </div>
    );
}
export default Ex5;