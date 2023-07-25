import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import React from "react";

function CustomButton(props) {
  const { children, bgColor, txtColor } = props;
  const StyledBtn = styled(Button)((props) => ({
    ...props,
    fontFamily: "Poppins",
    fontStyle: "normal",
    backgroundColor: bgColor,
    borderRadius: 15,
    textTransform: "capitalize",
    paddingY: 2,
    fontSize: 16,
    color: txtColor,
    boxShadow: "none",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: bgColor,
    },
  }));
  return (
    <Box>
      <StyledBtn variant="contained" >
        {children}
      </StyledBtn>
    </Box>
  );
}

export default CustomButton;
