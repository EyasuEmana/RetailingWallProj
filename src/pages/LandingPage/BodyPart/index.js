import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Right from "./Right/index";
import Left from "./Left/Form/index";
import LeftParent from "./Left"
function Index({ excelDate, setExcelData }) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box marginY={6}>
      <Grid
        container
        spacing={isMatch ? 0 : 20}
        justifyContent={"center"}
        alignItems={"flex-start"}
      >
        <Grid item lg={6} sm={10} xs={10}>
          <LeftParent excelDate={excelDate} setExcelData={setExcelData}/>
        </Grid>
        <Grid item lg={6} sm={10} xs={10}>
          <Right />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Index;
