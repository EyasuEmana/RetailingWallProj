import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Right from "./Right/index";
import Left from "./Left/Form/index";
function Index({ excelDate, setExcelData }) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box marginY={6} marginX={12}>
      <Grid container spacing={isMatch ? 0 : 20}>
        <Grid item lg={6} sm={12}>
          <Left excelDate={excelDate} setExcelData={setExcelData} />
        </Grid>
        <Grid item lg={6} sm={12}>
          <Right />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Index;
