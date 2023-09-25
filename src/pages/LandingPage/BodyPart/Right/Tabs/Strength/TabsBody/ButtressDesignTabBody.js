import { Box, Stack } from "@mui/material";
import React from "react";
import CustomTypo from "../../../../../../../components/CustomTypo";
import OutputComponent from "../../../../../../../components/OutputComponent";

function ButtressDesignTabBody({ tabData }) {
  return (
    <Box>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <CustomTypo>Horizontal Moment</CustomTypo>
        <CustomTypo fontsize={"12px"} fontweight={400}>
          DCR
        </CustomTypo>
      </Stack>
      <OutputComponent title={"Tension check"} value={tabData?.tension_check} sf={0.3} />
      
    </Box>
  );
}

export default ButtressDesignTabBody;
