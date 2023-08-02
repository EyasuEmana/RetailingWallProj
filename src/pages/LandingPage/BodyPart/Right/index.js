import {
  Box,
  Grid,
  Slider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomButton from "../../../../components/CustomButton";
import Slogan from "../../../../components/Slogan";
import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";
import { dispatch } from "../../../../store";
import { getRightFormData } from "../../../../store/actions/uiActions";
import { setRightModel } from "../../../../store/reducers/uiReducer";

function Index() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("lg"));
  const isMatchXS = useMediaQuery(theme.breakpoints.down("sm"));
  const { model, modelRight } = useSelector((state) => state.uiReducer);
  const { seismic, pmf } = modelRight;
  const statics = modelRight?.static;
  const [statOverturn, setStatOverturn] = useState(
    model?.static?.overturning ? model?.static?.overturning : 0
  );
  const [statFlotation, setStatFlotation] = useState(
    model?.static?.flotation ? model?.static?.flotation : 0
  );
  const [statCompression, setStatCompression] = useState(
    model?.static?.compression ? model?.static?.compression : 0
  );
  const [statSliding, setStatSliding] = useState(
    model?.static?.sliding ? model?.static?.sliding : 0
  );
  const [statBearing, setStatBearing] = useState(
    model?.static?.bearing ? model?.static?.bearing : 0
  );
  const [seisOverturn, setSeisOverturn] = useState(
    model?.seismic?.overturning ? model?.seismic?.overturning : 0
  );
  const [seisBearing, setSeisBearing] = useState(
    model?.seismic?.bearing ? model?.seismic?.bearing : 0
  );
  const [seisCompression, setSeisCompression] = useState(
    model?.seismic?.compression ? model?.seismic?.compression : 0
  );
  const [seisFlotation, setSeisFlotation] = useState(
    model?.seismic?.flotation ? model?.seismic?.flotation : 0
  );
  const [seisSliding, setSeisSliding] = useState(
    model?.seismic?.sliding ? model?.seismic?.sliding : 0
  );
  const [pmfOverturn, setPmfOverturn] = useState(
    model?.pmf?.overturning ? model?.pmf?.overturning : 0
  );
  const [pmfBearing, setPmfBearing] = useState(
    model?.pmf?.bearing ? model?.pmf?.bearing : 0
  );
  const [pmfFlotation, setPmfFlotation] = useState(
    model?.pmf?.flotation ? model?.pmf?.flotation : 0
  );
  const [pmfCompression, setPmfCompression] = useState(
    model?.pmf?.compression ? model?.pmf?.compression : 0
  );
  const [pmfSliding, setPmfSliding] = useState(
    model?.pmf?.sliding ? model?.pmf?.sliding : 0
  );

  useEffect(() => {
    setStatOverturn(modelRight?.static?.overturning);
    setStatFlotation(modelRight?.static?.flotation);
    setStatCompression(modelRight?.static?.compression);
    setStatSliding(modelRight?.static?.sliding);
    setStatBearing(modelRight?.static?.bearing);
    setSeisOverturn(modelRight?.seismic?.overturning);
    setSeisBearing(modelRight?.seismic?.bearing);
    setSeisCompression(modelRight?.seismic?.compression);
    setSeisFlotation(modelRight?.seismic?.flotation);
    setSeisSliding(modelRight?.seismic?.sliding);
    setPmfOverturn(modelRight?.pmf?.overturning);
    setPmfBearing(modelRight?.pmf?.bearing);
    setPmfFlotation(modelRight?.pmf?.flotation);
    setPmfCompression(modelRight?.pmf?.compression);
    setPmfSliding(modelRight?.pmf?.sliding);
  }, [modelRight]);
  const sliderStyle = {
    "& .MuiSlider-track": {
      background: "#CCC",
      borderColor: "#CCC",
    },
    "& .MuiSlider-rail": {
      background: "#CCC",
    },
    "& .MuiSlider-thumb": {
      backgroundColor: "#CCC",
      width: "0px",
      height: "0px",
    },
  };

  const handleSliderChange = (newValue, key) => {
    const updatedModel = {
      ...modelRight,
      static: {
        ...modelRight.static,
        compression:
          key == "statCompression"
            ? newValue.toString()
            : modelRight?.static?.compression,
        overturning:
          key == "statOverturing"
            ? newValue.toString()
            : modelRight?.static?.overturning,
        bearing:
          key == "statBearing"
            ? newValue.toString()
            : modelRight?.static?.bearing,
        sliding:
          key == "statSliding"
            ? newValue.toString()
            : modelRight?.static?.sliding,
        flotation:
          key == "statFlotation"
            ? newValue.toString()
            : modelRight?.static?.flotation,
      },
      seismic: {
        ...modelRight.seismic,
        compression:
          key == "seisCompression"
            ? newValue.toString()
            : modelRight?.seismic?.compression,
        overturning:
          key == "seisOverturning"
            ? newValue.toString()
            : modelRight?.seismic?.overturning,
        bearing:
          key == "seisBearing"
            ? newValue.toString()
            : modelRight?.seismic?.bearing,
        sliding:
          key == "seisSliding"
            ? newValue.toString()
            : modelRight?.seismic?.sliding,
        flotation:
          key == "seisFlotation"
            ? newValue.toString()
            : modelRight?.seismic?.flotation,
      },
      pmf: {
        ...modelRight.pmf,
        compression:
          key == "pmfCompression"
            ? newValue.toString()
            : modelRight?.pmf?.compression,
        overturning:
          key == "pmfOverturning"
            ? newValue.toString()
            : modelRight?.pmf?.overturning,
        bearing:
          key == "pmfBearing" ? newValue.toString() : modelRight?.pmf?.bearing,
        sliding:
          key == "pmfSliding" ? newValue.toString() : modelRight?.pmf?.sliding,
        flotation:
          key == "pmfFlotation"
            ? newValue.toString()
            : modelRight?.pmf?.flotation,
      },
    };
    dispatch(setRightModel(updatedModel));
  };

  return (
    <Box>
      <Stack spacing={10}>
        {isMatch && <Slogan />}
        <Stack
          direction={"column"}
          spacing={6}
          sx={{
            backgroundColor: "rgba(236, 236, 236, 0.25)",
            paddingX: 5,
            paddingY: 10,
            borderRadius: 5,
          }}
        >
          <Stack
            direction={isMatchXS ? "column" : "row"}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={3}
          >
            <CustomButton
              bgColor={"#171414"}
              txtColor={"#FFF"}
              sx={{ paddingX: isMatchXS ? 12 : 6 }}
            >
              Stability
            </CustomButton>
            <CustomButton
              bgColor={"#D9D9D9"}
              txtColor={"#000"}
              sx={{ paddingX: isMatchXS ? 12 : 6 }}
            >
              Strength
            </CustomButton>
          </Stack>
          {/* output space */}
          <Stack direction={"column"}>
            <Box mb={4}>
              <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
                Static
              </Typography>

              <Grid
                container
                alignItems={"center"}
                justifyContent={"space-between"}
                spacing={isMatchXS ? 0 : 2}
                mb={0.5}
              >
                <Grid item sm={4} xs={12}>
                  <Typography>Overturning</Typography>
                </Grid>
                <Grid item sm={6} xs={9}>
                  <Box>
                    <Slider
                      step={0.1}
                      value={statOverturn}
                      min={0}
                      max={2}
                      sx={sliderStyle}
                      onChange={(event, newValue) => {
                        handleSliderChange(newValue, "statOverturing");
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item sm={2} xs={3}>
                  <Typography>{modelRight?.static?.overturning}</Typography>
                </Grid>
              </Grid>

              <Grid
                container
                alignItems={"center"}
                justifyContent={"space-between"}
                spacing={isMatchXS ? 0 : 2}
                mb={0.5}
              >
                <Grid item sm={4} xs={12}>
                  <Typography>Compression</Typography>
                </Grid>
                <Grid item sm={6} xs={9}>
                  <Box>
                    <Slider
                      step={0.1}
                      value={statCompression}
                      min={0}
                      max={2}
                      sx={sliderStyle}
                      valueLabelDisplay="auto"
                      onChange={(event, newValue) => {
                        handleSliderChange(newValue, "statCompression");
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item sm={2} xs={3}>
                  <Typography>{modelRight?.static?.compression}</Typography>
                </Grid>
              </Grid>

              <Grid
                container
                alignItems={"center"}
                justifyContent={"space-between"}
                spacing={isMatchXS ? 0 : 2}
                mb={0.5}
              >
                <Grid item sm={4} xs={12}>
                  <Typography>Bearing</Typography>
                </Grid>
                <Grid item sm={6} xs={9}>
                  <Box>
                    <Slider
                      step={0.1}
                      value={statBearing}
                      min={0}
                      max={2}
                      sx={sliderStyle}
                      valueLabelDisplay="auto"
                      onChange={(event, newValue) => {
                        handleSliderChange(newValue, "statBearing");
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item sm={2} xs={3}>
                  <Typography>{modelRight?.static?.bearing}</Typography>
                </Grid>
              </Grid>

              <Grid
                container
                alignItems={"center"}
                justifyContent={"space-between"}
                spacing={isMatchXS ? 0 : 2}
                mb={0.5}
              >
                <Grid item sm={4} xs={12}>
                  <Typography>Sliding</Typography>
                </Grid>
                <Grid item sm={6} xs={9}>
                  <Box>
                    <Slider
                      step={0.1}
                      value={statSliding}
                      min={0}
                      max={2}
                      sx={sliderStyle}
                      valueLabelDisplay="auto"
                      onChange={(event, newValue) => {
                        handleSliderChange(newValue, "statSliding");
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item sm={2} xs={3}>
                  <Typography>{modelRight?.static?.sliding}</Typography>
                </Grid>
              </Grid>

              <Grid
                container
                alignItems={"center"}
                justifyContent={"space-between"}
                spacing={isMatchXS ? 0 : 2}
                mb={0.5}
              >
                <Grid item sm={4} xs={12}>
                  <Typography>Flotation</Typography>
                </Grid>
                <Grid item sm={6} xs={9}>
                  <Box>
                    <Slider
                      step={0.1}
                      value={statFlotation}
                      min={0}
                      max={2}
                      sx={sliderStyle}
                      valueLabelDisplay="auto"
                      onChange={(event, newValue) => {
                        handleSliderChange(newValue, "statFlotation");
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item sm={2} xs={3}>
                  <Typography>{modelRight?.static?.flotation}</Typography>
                </Grid>
              </Grid>
              <Stack direction={"column"}></Stack>
            </Box>
            <Box mb={4}>
              <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
                Seismic
              </Typography>

              <Grid
                container
                alignItems={"center"}
                justifyContent={"space-between"}
                spacing={isMatchXS ? 0 : 2}
                mb={0.5}
              >
                <Grid item sm={4} xs={12}>
                  <Typography>Overturning</Typography>
                </Grid>
                <Grid item sm={6} xs={9}>
                  <Box>
                    <Slider
                      step={0.1}
                      value={seisOverturn}
                      min={0}
                      max={2}
                      sx={sliderStyle}
                      valueLabelDisplay="auto"
                      onChange={(event, newValue) => {
                        handleSliderChange(newValue, "seisOverturning");
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item sm={2} xs={3}>
                  <Typography>{modelRight?.seismic?.overturning}</Typography>
                </Grid>
              </Grid>

              <Grid
                container
                alignItems={"center"}
                justifyContent={"space-between"}
                spacing={isMatchXS ? 0 : 2}
                mb={0.5}
              >
                <Grid item sm={4} xs={12}>
                  <Typography>Compression</Typography>
                </Grid>
                <Grid item sm={6} xs={9}>
                  <Box>
                    <Slider
                      step={0.1}
                      value={seisCompression}
                      min={0}
                      max={2}
                      sx={sliderStyle}
                      valueLabelDisplay="auto"
                      onChange={(event, newValue) => {
                        handleSliderChange(newValue, "seisCompression");
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item sm={2} xs={3}>
                  <Typography>{modelRight?.seismic?.compression}</Typography>
                </Grid>
              </Grid>

              <Grid
                container
                alignItems={"center"}
                justifyContent={"space-between"}
                spacing={isMatchXS ? 0 : 2}
                mb={0.5}
              >
                <Grid item sm={4} xs={12}>
                  <Typography>Bearing</Typography>
                </Grid>
                <Grid item sm={6} xs={9}>
                  <Box>
                    <Slider
                      step={0.1}
                      value={seisBearing}
                      min={0}
                      max={2}
                      sx={sliderStyle}
                      valueLabelDisplay="auto"
                      onChange={(event, newValue) => {
                        handleSliderChange(newValue, "seisBearing");
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item sm={2} xs={3}>
                  <Typography>{modelRight?.seismic?.bearing}</Typography>
                </Grid>
              </Grid>

              <Grid
                container
                alignItems={"center"}
                justifyContent={"space-between"}
                spacing={isMatchXS ? 0 : 2}
                mb={0.5}
              >
                <Grid item sm={4} xs={12}>
                  <Typography>Sliding</Typography>
                </Grid>
                <Grid item sm={6} xs={9}>
                  <Box>
                    <Slider
                      step={0.1}
                      value={seisSliding}
                      min={0}
                      max={2}
                      sx={sliderStyle}
                      valueLabelDisplay="auto"
                      onChange={(event, newValue) => {
                        handleSliderChange(newValue, "seisSliding");
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item sm={2} xs={3}>
                  <Typography>{modelRight?.seismic?.sliding}</Typography>
                </Grid>
              </Grid>

              <Grid
                container
                alignItems={"center"}
                justifyContent={"space-between"}
                spacing={isMatchXS ? 0 : 2}
                mb={0.5}
              >
                <Grid item sm={4} xs={12}>
                  <Typography>Flotation</Typography>
                </Grid>
                <Grid item sm={6} xs={9}>
                  <Box>
                    <Slider
                      step={0.1}
                      value={seisFlotation}
                      min={0}
                      max={2}
                      sx={sliderStyle}
                      valueLabelDisplay="auto"
                      onChange={(event, newValue) => {
                        handleSliderChange(newValue, "seisFlotation");
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item sm={2} xs={3}>
                  <Typography>{modelRight?.seismic?.flotation}</Typography>
                </Grid>
              </Grid>

              <Stack direction={"column"}></Stack>
            </Box>
            <Box mb={4}>
              <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
                Peak Maximum Flow (PMF)
              </Typography>

              <Grid
                container
                alignItems={"center"}
                justifyContent={"space-between"}
                spacing={isMatchXS ? 0 : 2}
                mb={0.5}
              >
                <Grid item sm={4} xs={12}>
                  <Typography>Overturning</Typography>
                </Grid>
                <Grid item sm={6} xs={9}>
                  <Box>
                    <Slider
                      step={0.1}
                      value={pmfOverturn}
                      min={0}
                      max={2}
                      sx={sliderStyle}
                      valueLabelDisplay="auto"
                      onChange={(event, newValue) => {
                        handleSliderChange(newValue, "pmfOverturning");
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item sm={2} xs={3}>
                  <Typography>{modelRight?.pmf?.overturning}</Typography>
                </Grid>
              </Grid>

              <Grid
                container
                alignItems={"center"}
                justifyContent={"space-between"}
                spacing={isMatchXS ? 0 : 2}
                mb={0.5}
              >
                <Grid item sm={4} xs={12}>
                  <Typography>Compression</Typography>
                </Grid>
                <Grid item sm={6} xs={9}>
                  <Box>
                    <Slider
                      step={0.1}
                      value={pmfCompression}
                      min={0}
                      max={2}
                      sx={sliderStyle}
                      valueLabelDisplay="auto"
                      onChange={(event, newValue) => {
                        handleSliderChange(newValue, "pmfCompression");
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item sm={2} xs={3}>
                  <Typography>{modelRight?.pmf?.compression}</Typography>
                </Grid>
              </Grid>

              <Grid
                container
                alignItems={"center"}
                justifyContent={"space-between"}
                spacing={isMatchXS ? 0 : 2}
                mb={0.5}
              >
                <Grid item sm={4} xs={12}>
                  <Typography>Bearing</Typography>
                </Grid>
                <Grid item sm={6} xs={9}>
                  <Box>
                    <Slider
                      step={0.1}
                      value={pmfBearing}
                      min={0}
                      max={2}
                      sx={sliderStyle}
                      valueLabelDisplay="auto"
                      onChange={(event, newValue) => {
                        handleSliderChange(newValue, "pmfBearing");
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item sm={2} xs={3}>
                  <Typography>{modelRight?.pmf?.bearing}</Typography>
                </Grid>
              </Grid>

              <Grid
                container
                alignItems={"center"}
                justifyContent={"space-between"}
                spacing={isMatchXS ? 0 : 2}
                mb={0.5}
              >
                <Grid item sm={4} xs={12}>
                  <Typography>Sliding</Typography>
                </Grid>
                <Grid item sm={6} xs={9}>
                  <Box>
                    <Slider
                      step={0.1}
                      value={pmfSliding}
                      min={0}
                      max={2}
                      sx={sliderStyle}
                      valueLabelDisplay="auto"
                      onChange={(event, newValue) => {
                        handleSliderChange(newValue, "pmfSliding");
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item sm={2} xs={3}>
                  <Typography>{modelRight?.pmf?.sliding}</Typography>
                </Grid>
              </Grid>

              <Grid
                container
                alignItems={"center"}
                justifyContent={"space-between"}
                spacing={isMatchXS ? 0 : 2}
                mb={0.5}
              >
                <Grid item sm={4} xs={12}>
                  <Typography>Flotation</Typography>
                </Grid>
                <Grid item sm={6} xs={9}>
                  <Box>
                    <Slider
                      step={0.1}
                      value={pmfFlotation}
                      min={0}
                      max={2}
                      sx={sliderStyle}
                      valueLabelDisplay="auto"
                      onChange={(event, newValue) => {
                        handleSliderChange(newValue, "pmfFlotation");
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item sm={2} xs={3}>
                  <Typography>{modelRight?.pmf?.flotation}</Typography>
                </Grid>
              </Grid>
              <Stack direction={"column"}></Stack>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Index;
