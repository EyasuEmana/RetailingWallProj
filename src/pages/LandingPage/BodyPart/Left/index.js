import React from "react";
import { useSelector } from "react-redux";
import Left from "./Form";
import { Box } from "@mui/material";
function Index({ excelDate, setExcelData }) {
  const { model, starupDataLoading } = useSelector(
    (state) => state.uiReducer
  );
  return (
    <Box>
      {starupDataLoading ? (
        "loanding"
      ) : (
        <Left
          excelDate={excelDate}
          setExcelData={setExcelData}
          model={model}
        />
      )}
    </Box>
  );
}

export default Index;
