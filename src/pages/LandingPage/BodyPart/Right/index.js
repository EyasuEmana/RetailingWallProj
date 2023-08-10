import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomButton from "../../../../components/CustomButton";
import Slogan from "../../../../components/Slogan";
import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";
import LinearProgress from "@mui/material/LinearProgress";
function Index() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("lg"));
  const isMatchXS = useMediaQuery(theme.breakpoints.down("sm"));
  const { modelRight } = useSelector((state) => state.uiReducer);
  const [stabilityOpen, setStabilityOpen] = useState(true);
  const [strengthOpen, setStrengthOpen] = useState(false);
  const { seismic, pmf } = modelRight;
  const statics = modelRight?.static;
  const handleTabClick = (caller) => {
    switch (caller) {
      case "stability":
        setStabilityOpen(true);
        setStrengthOpen(false);
        break;
      case "strength":
        setStabilityOpen(false);
        setStrengthOpen(true);
        break;
      default:
        setStabilityOpen(true);
        setStrengthOpen(false);
        break;
    }
  };
  const OutputComponent = ({ title, value, sf }) => {
    return (
      <Grid
        container
        alignItems={"center"}
        justifyContent={"space-between"}
        spacing={isMatchXS ? 0 : 2}
        mb={"6px"}
      >
        <Grid item sm={4} xs={12}>
          <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
            {title}
          </Typography>
        </Grid>
        <Grid item sm={6} xs={9}>
          <Box>
            <LinearProgress
              variant="determinate"
              sx={{
                borderColor: "#D9D9D9",
                borderRadius: "12px",
                backgroundColor: "#D9D9D9",
                "& .MuiLinearProgress-bar": {
                  background:
                    parseFloat(value) < parseFloat(sf) ? "#FF6060" : "#94D263",
                },
                transition: "background 0.3s ease-in-out",
              }}
              value={value * 50}
            />
          </Box>
        </Grid>
        <Grid item sm={2} xs={3}>
          <Typography
            sx={{ fontSize: "12px", fontWeight: 400, marginBottom: "6px" }}
          >
            {value}
          </Typography>
        </Grid>
      </Grid>
    );
  };

  return (
    <Stack spacing={"40px"}>
      {isMatch && <Slogan />}

      <Stack
        direction={"column"}
        justifyContent={"center"}
        spacing={"76px"}
        sx={{
          backgroundColor: "rgba(236, 236, 236, 0.25)",
          paddingY: 10,
          borderRadius: 5,
          paddingX:2
        }}
      >
        <Stack
          direction={isMatchXS ? "column" : "row"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={3}
        >
          <Box onClick={() => handleTabClick("stability")}>
            <CustomButton
              radius={"12px"}
              fontWeight={700}
              fontSize={16}
              backgroundcolor={stabilityOpen ? "#171414" : "#D9D9D9"}
              txtcolor={stabilityOpen ? "#FFF" : "#000"}
              sx={{ paddingX: isMatchXS ? 12 : 6, width: "100%" }}
            >
              Stability
            </CustomButton>
          </Box>
          <Box onClick={() => handleTabClick("strength")}>
            <CustomButton
              radius={"12px"}
              fontSize={16}
              fontWeight={700}
              backgroundcolor={strengthOpen ? "#171414" : "#D9D9D9"}
              txtcolor={strengthOpen ? "#FFF" : "#000"}
              sx={{ paddingX: isMatchXS ? 12 : 6, width: "100%" }}
            >
              Strength
            </CustomButton>
          </Box>
        </Stack>
        {/* output space */}
        <Stack
          direction={"column"}
        >
          <Box mb={4}>
            <Typography
              sx={{ fontWeight: 700, fontSize: 14, marginBottom: "10px" }}
            >
              Static
            </Typography>
            <OutputComponent
              title={"Overturning"}
              value={statics?.overturning}
              sf={statics?.sf_overturning}
            />
            <OutputComponent
              title={"Compression"}
              value={statics?.compression}
              sf={statics?.sf_compression}
            />
            <OutputComponent
              title={"Bearing"}
              value={statics?.bearing}
              sf={statics?.sf_bearing}
            />
            <OutputComponent
              title={"Sliding"}
              value={statics?.sliding}
              sf={statics?.sf_sliding}
            />
            <OutputComponent
              title={"Flotation"}
              value={statics?.flotation}
              sf={statics?.sf_flotation}
            />
          </Box>
          <Box mb={4}>
            <Typography
              sx={{ fontWeight: 700, fontSize: 14, marginBottom: "10px" }}
            >
              Seismic
            </Typography>
            <OutputComponent
              title={"Overturning"}
              value={seismic?.overturning}
              sf={seismic?.sf_overturning}
            />
            <OutputComponent
              title={"Compression"}
              value={seismic?.compression}
              sf={seismic?.sf_compression}
            />
            <OutputComponent
              title={"Bearing"}
              value={seismic?.bearing}
              sf={seismic?.sf_bearing}
            />
            <OutputComponent
              title={"Sliding"}
              value={seismic?.sliding}
              sf={seismic?.sf_sliding}
            />
            <OutputComponent
              title={"Flotation"}
              value={seismic?.flotation}
              sf={seismic?.sf_flotation}
            />
            <Stack direction={"column"}></Stack>
          </Box>
          <Box mb={4}>
            <Typography
              sx={{ fontWeight: 700, fontSize: 14, marginBottom: "10px" }}
            >
              Peak Maximum Flow (PMF)
            </Typography>
            <OutputComponent
              title={"Overturning"}
              value={pmf?.overturning}
              sf={pmf?.sf_overturning}
            />
            <OutputComponent
              title={"Compression"}
              value={pmf?.compression}
              sf={pmf?.sf_compression}
            />
            <OutputComponent
              title={"Bearing"}
              value={pmf?.bearing}
              sf={pmf?.sf_bearing}
            />
            <OutputComponent
              title={"Sliding"}
              value={pmf?.sliding}
              sf={pmf?.sf_sliding}
            />
            <OutputComponent
              title={"Flotation"}
              value={pmf?.flotation}
              sf={pmf?.sf_flotation}
            />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Index;
