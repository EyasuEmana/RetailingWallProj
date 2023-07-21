import logo from "./logo.svg";
import "./App.css";
import LangingPage from "./pages/LandingPage";
import { Box } from "@mui/material";
import Footer from "./components/Footer";
import ImageComponent from "./pages/LandingPage/BodyPart/Left/ImageComponent";

function App() {
  return (
    <Box sx={{ paddingX: 20, paddingY: 15 }}>
      <LangingPage />
      <Footer />
    </Box>
  );
}

export default App;
