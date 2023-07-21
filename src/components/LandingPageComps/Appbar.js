import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/material";
import logo from "../../static/logo.png";
import CustomButton from "../CustomButton";
import html2pdf from 'html2pdf.js';
export default function Appbar({ content  }) {

  const handleExportPDF = () => {
    const element = React.createElement(content);
    const opt = {
      margin: 10,
      filename: 'your_file_name.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#FFF", boxShadow: 0 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <img src={logo} alt="logo" />
            <Typography
              sx={{ fontWeight: "bold", color: "#000", fontSize: "20px" }}
            >
              Retaining Wall
            </Typography>
            <Typography sx={{ color: "#000", fontSize: "16px" }}>
              Beta
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <CustomButton bgColor={"#D9D9D9"} textColor={"#000"}>
              Excel
            </CustomButton>
            {/* <Button onClick={handleExportPDF}>pdr</Button> */}
            <CustomButton
              bgColor={"#171414"}
              textColor={"#FFF"}
              onClick={handleExportPDF}
            >
              Dowloan Pdf
            </CustomButton>
          </Stack>
        </Stack>
      </AppBar>
    </Box>
  );
}
