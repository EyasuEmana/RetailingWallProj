import { Box, Stack } from "@mui/material";
import React, { useRef, useState } from "react";
import Appbar from "../../components/LandingPageComps/Appbar";
import BodyPart from "./BodyPart/index";
function LangingPage() {
  const [excelDate, setExcelData] = useState({});
  return (
    <Box>
      <Stack direction={"column"}>
        <Appbar  excelDate={excelDate} setExcelData={setExcelData} />
        <BodyPart excelDate={excelDate} setExcelData={setExcelData} />
      </Stack>
    </Box>
  );
}

export default LangingPage;
