import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import React from "react";

function CustomButton(props) {
  const { children, bgColor, txtColor, fontSize, radius,fontWeight } = props;
  const StyledBtn = styled(Button)((props) => ({
    ...props,
    fontFamily: "Poppins",
    fontStyle: "normal",
    backgroundColor: bgColor,
    borderRadius: radius,
    textTransform: "capitalize",
    paddingY: 2,
    fontSize: fontSize,
    color: txtColor,
    boxShadow: "none",
    fontWeight: fontWeight,
    "&:hover": {
      backgroundColor: bgColor,
    },
    "&.Mui-disabled": {
      backgroundColor: bgColor,
      color: txtColor,
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
