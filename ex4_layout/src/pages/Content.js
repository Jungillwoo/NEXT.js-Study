import { Box, Button } from "@mui/material";
import { display, fontSize, fontWeight, margin, padding } from "@mui/system";
import React from "react";

const styles = {
    background: "lightblue",
    width: "100%",
    height: "100vh", // (view height) 부모태그와 상관없이 꽉 채운다.
    margin: 0,
    padding: 0,
    paddingTop: "20px",
};

function Content() {
    const navItems = ['Home', 'About', 'Products', 'Board']
    return(
        <div style={styles}>
            <Box sx={{display: {xs:'none', sm:'block'}}}>
                { navItems.map((menu)=>(
                    <Button sx={{color:'#000', fontSize:'15px', fontWeight:'bold' }}>
                        {menu}
                    </Button>
                )) }
            </Box>
        </div>
    );
}
export default Content;
