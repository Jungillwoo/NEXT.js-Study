import { Container, Grid2 } from "@mui/material";
import React from "react";
import Left from "./Left";
import Content from "./Content";

function Ex1() {
    return(
      <Container maxWidth={false}>
        <Grid2 container>
          <Grid2 item={true} size={3}><Left/></Grid2>
          <Grid2 item={true} size={9}><Content/></Grid2>
        </Grid2>
      </Container>
    );
}
export default Ex1;