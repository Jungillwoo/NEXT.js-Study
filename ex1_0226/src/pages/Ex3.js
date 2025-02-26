import React from "react";
import ferrariImage from "../images/icon_apple.svg";

function Ex3() {
    let myFont = { fontSize: "30px", color: "#fff" };
    let imgSize = { width: "500px", height: "400px" };
    return (
        <div>
            <br/>
            <h1 style={myFont}>Third Page</h1>
            <img src={ferrariImage} alt="Ferrari" style={imgSize}/>
        </div>
    );
}
export default Ex3;