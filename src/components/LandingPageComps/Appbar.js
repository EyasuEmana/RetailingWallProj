import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../static/logo.png";
import CustomButton from "../CustomButton";
import html2pdf from "html2pdf.js";
import BodyPart from "../../pages/LandingPage/BodyPart/index";
import * as XLSX from "xlsx";
export default function Appbar({ excelDate, setExcelData }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
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
  const date = new Date();
  const fileName =
    date.getFullYear() +
    "-" +
    date.getMonth() +
    "-" +
    date.getDate() +
    "-" +
    date.getHours() +
    "-" +
    date.getSeconds() +
    "-" +
    date.getMilliseconds();

  const handleExcelExport = () => {
    const worksheet = XLSX.utils.json_to_sheet([excelDate]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "EXCEL_" + fileName + ".xlsx");
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
              sx={{
                fontWeight: "bold",
                color: "#000",
                fontSize: isMatch ? "18px" : "25px",
              }}
            >
              Retaining Wall
            </Typography>
            <Typography
              sx={{ color: "#000", fontSize: isMatch ? "15px" : "20px" }}
            >
              Beta
            </Typography>
          </Stack>
          {isMatch ? (
            <>
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </>
          ) : (
            <>
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <div onClick={handleExcelExport}>
                  <CustomButton bgColor={"#D9D9D9"} txtColor={"#000"}>
                    Excel
                  </CustomButton>
                </div>
                <div onClick={handleExportClick}>
                  <CustomButton bgColor={"#171414"} txtColor={"#FFF"}>
                    Download PDF
                  </CustomButton>
                </div>
              </Stack>
            </>
          )}
        </Stack>
      </AppBar>

      <div style={{ display: "none" }}>
        <div id="exportable">
          <BodyPart excelDate={excelDate} setExcelData={setExcelData} />
        </div>
      </div>
      {/* drawer */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List>
          <ListItem>
            <ListItemButton onClick={handleExcelExport}>
              <CustomButton bgColor={"#D9D9D9"} txtColor={"#000"}>
                Excel
              </CustomButton>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={handleExportClick}>
              <CustomButton bgColor={"#171414"} txtColor={"#FFF"}>
                Download PDF
              </CustomButton>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
