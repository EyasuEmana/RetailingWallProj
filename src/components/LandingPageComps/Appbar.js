import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import logo from "../../static/logo.png";
import CustomButton from "../CustomButton";
import html2pdf from "html2pdf.js";
import BodyPart from "../../pages/LandingPage/BodyPart/index";
export default function Appbar({ content }) {
  const componentRef = React.useRef();
  const handleExportClick = () => {
    const targetComponent = document.getElementById("exportable");

    if (targetComponent) {
      const opt = {
        margin: 10,
        filename: "exported_component.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: [400, 400], orientation: "portrait" },
      };

      // html2pdf().from(targetComponent).set(opt).outputPdf();
      html2pdf().set(opt).from(targetComponent).save();
    }
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
            <CustomButton bgColor={"#171414"} textColor={"#FFF"} onClick={handleExportClick}>
              Dowloan Pdf
            </CustomButton>
          </Stack>
        </Stack>
      </AppBar>

      <div style={{ display: "none" }}>
        <div id="exportable">
          <BodyPart />
        </div>
      </div>
    </Box>
  );
}
