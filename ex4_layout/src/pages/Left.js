import { margin, padding } from "@mui/system";
import React from "react";

const styles = {
    background: "orange",
    width: "100%",
    height: "100vh", // (view height) 부모태그와 상관없이 꽉 채운다.
    margin: 0,
    padding: 0,
};

function Left() {
    return(
        <h1 style={styles}>
            정이루입니다
        </h1>
    );
}
export default Left;