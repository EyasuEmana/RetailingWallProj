import { Stack, Typography } from "@mui/material";
import React from "react";

function Slogan() {
  return (
    <Stack direction={"column"} spacing={3}>
      <Typography sx={{ fontSize: 31, textAlign: "left", lineHeight: "1.1" }}>
        Unlock <b>efficiency</b> with <b>intelligent automation </b>
        for stability and strength design
      </Typography>
      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <Typography sx={{ fontSize: 18 }}>INSTANT ANALYSIS</Typography>
        <hr style={{ width: 150, border: "1px solid #000" }} />
      </Stack>
    </Stack>
  );
}

export default Slogan;
