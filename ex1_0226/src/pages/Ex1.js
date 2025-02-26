import React from "react";

const Ex1 = () => { // function Ex1() {  와 같은 의미
    let myFont = { fontSize: "30px", color: "#fff" };
    return(
        <div>
            <br/>
            <h1 style={myFont}>First Page</h1>
        </div>
    );
}
export default Ex1;