import { Box, Grid, Stack } from "@mui/material";
import React, { useRef, useState } from "react";
import Appbar from "../../components/LandingPageComps/Appbar";
import BodyPart from "./BodyPart/index";
import Footer from "../../components/Footer";
function LangingPage() {
  const [excelDate, setExcelData] = useState({});
  return (
    <Box>
      <Grid container justifyContent={"space-around"} spacing={4}>
        <Grid item lg={10}>
          <Appbar excelDate={excelDate} setExcelData={setExcelData} />
        </Grid>
        <Grid item lg={10}>
          <BodyPart excelDate={excelDate} setExcelData={setExcelData} />
        </Grid>
        <Grid item xs={12}>
          <Footer/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LangingPage;
