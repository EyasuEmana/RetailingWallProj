import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Appbar from "../../components/LandingPageComps/Appbar";
import BodyPart from "./BodyPart/index";
import Footer from "../../components/Footer";
import { getStarupData } from "../../store/actions/uiActions";
import { dispatch } from "../../store/index";
function LangingPage() {
  const [excelDate, setExcelData] = useState({});
  useEffect(() => {
    dispatch(getStarupData());
  }, [dispatch]);

  return (
    <Box>
      <Grid container justifyContent={"space-around"} spacing={4}>
        <Grid item sm={10} xs={10}>
          <Appbar excelDate={excelDate} setExcelData={setExcelData} />
        </Grid>
        <Grid item lg={10} xs={12}>
          <BodyPart excelDate={excelDate} setExcelData={setExcelData} />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
}

export default LangingPage;
