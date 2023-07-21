import { Box, Stack } from "@mui/material";
import React, { useRef } from "react";
import Appbar from "../../components/LandingPageComps/Appbar";
import BodyPart from "./BodyPart/index";
function LangingPage() {
  const componentRef = useRef();
  return (
    <Box>
      <Stack direction={"column"}>
        <Appbar content={BodyPart}/>
        <BodyPart  />
      </Stack>
    </Box>
  );
}

export default LangingPage;
