import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import Right from "./Right/index";
import Left from "./Left/Form/index"
function index() {
  return (
    
    <Box marginY={6} marginX={12}>
      <Grid container spacing={3}>
        <Grid item lg={6} sm={12}>
          <Left/>
        </Grid>
        <Grid item lg={6} sm={12}>
          <Right />
        </Grid>
      </Grid>
    </Box>
  );
}

export default index;
