import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import React from "react";

function CustomButton(props) {
  const { children, backgroundcolor, txtcolor, fontSize, radius,fontWeight } = props;
  const StyledBtn = styled(Button)((props) => ({
    ...props,
    fontFamily: "Poppins",
    fontStyle: "normal",
    backgroundColor: backgroundcolor,
    borderRadius: radius,
    textTransform: "capitalize",
    paddingY: 2,
    fontSize: fontSize,
    color: txtcolor,
    boxShadow: "none",
    fontWeight: fontWeight,
    "&:hover": {
      backgroundColor: backgroundcolor,
    },
    "&.Mui-disabled": {
      backgroundColor: backgroundcolor,
      color: txtcolor,
    },
  }));
  return (
    <Box>
      <StyledBtn variant="contained" {...props}>
        {children}
      </StyledBtn>
    </Box>
  );
}

export default CustomButton;
