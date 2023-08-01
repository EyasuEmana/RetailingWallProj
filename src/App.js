import "./App.css";
import LangingPage from "./pages/LandingPage";
import { Box, Typography } from "@mui/material";
// import ThreeDTest from "./pages/ThreeDTest";
import { ThemeProvider } from "@mui/material";
import customThemeFunction from "./assets/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <ThemeProvider theme={customThemeFunction}>
      {/* <ThreeDTest /> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Box
                sx={{
                  paddingTop: 15,
                  height: "100%",
                  marginBottom: 0,
                }}
              >
                <LangingPage />
              </Box>
            }
          ></Route>
          <Route
            path={"*"}
            element={
              <Box>
                <Typography>No such path!</Typography>
              </Box>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
