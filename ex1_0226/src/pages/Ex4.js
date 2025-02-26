import React, { useState } from "react";
import "../css/ex4.css";

function Ex4() {
    const [txt, setTxt] = useState('insert text...');
    function setValue(e) {
        setTxt(e.target.value);
    }
    return(
        <div>
            <br/>
            <input type="text" placeholder={txt} onChange={setValue}/>
            <br/>
            <p className="box" style={{color: "#fff"}}>{txt}</p>
        </div>
    );
}
export default Ex4;