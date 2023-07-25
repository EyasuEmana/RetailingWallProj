import "./App.css";
import LangingPage from "./pages/LandingPage";
import { Box } from "@mui/material";
// import ThreeDTest from "./pages/ThreeDTest";
import { ThemeProvider } from "@mui/material";
import customThemeFunction from "./assets/theme";
function App() {
  return (
      <ThemeProvider theme={customThemeFunction}>
        <Box
          sx={{
            paddingTop: 15,
            height: "100%",
            marginBottom: 0,
          }}
        >
          <LangingPage />
        </Box>
      </ThemeProvider>
  );
}

export default App;
