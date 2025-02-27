import React from "react";  

function Ex5_sub({year}) { // 전달되는 속성들 중 year만 받을 때는 반드시
                           // 중괄호를 써야한다.
    return(
        <h1>연도 : {year}</h1>
    );
}
export default Ex5_sub;