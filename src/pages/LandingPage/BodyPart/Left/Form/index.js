import {
  Box,
  Button,
  Grid,
  Slider,
  Typography,
  Stack,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomButton from "../../../../../components/CustomButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slogan from "../../../../../components/Slogan";
import { dispatch } from "../../../../../store";
import { setModel } from "../../../../../store/reducers/uiReducer";
import { getRightFormData } from "../../../../../store/actions/uiActions";
import { useSelector } from "react-redux";
const styleValueBox = {
  borderColor: "#D9D9D9",
  textTransform: "lowercase",
  whiteSpace: "nowrap",
  borderRadius: "12px",
  color: "#000",
  width: "100px",
};
function Index() {
  const { model } = useSelector((state) => state.uiReducer);

  const stemApiData = model?.dim?.stem;
  const baseApiData = model?.dim?.base;
  const soilApiData = model?.soil_data;
  const materialApiData = model?.materials;
  const shearKeyApiData = model?.dim?.shear_key;

  const stemHeightInitialValue = stemApiData?.height;
  const stemTopInitialValue = stemApiData?.top;
  const stemBottomInitialValue = stemApiData?.bottom;

  const baseTotalLengthInitialValue = baseApiData?.total_length;
  const baseToeLengthInitialValue = baseApiData?.toe_length;
  const baseThicknessInitialValue = baseApiData?.thickness;

  const shareLengthInitialValue = shearKeyApiData?.length;
  const shareDistanceInitialValue = shearKeyApiData?.toe_distance;
  const shareThicknessInitialValue = shearKeyApiData?.height;

  const rightSoilInitValue = soilApiData?.right_el;
  const waterInitValue = soilApiData?.water_el;
  const fcInitValue = model?.materials?.fc_concrete;
  const activeInitValue = soilApiData?.active;
  const steelFyInitValue = materialApiData?.fy_steel;
  const soilUnitWeightInitValue = materialApiData?.soil_unit_weight;
  const pgaInitValue = soilApiData?.pga;
  const leftSoilInitValue = soilApiData?.left_el;
  const passiveInitValue = soilApiData?.passive;
  const seisPressInitValue = soilApiData?.seismic;

  const [isRotated, setIsRotated] = useState(true);

  // const stemHeightInitialValue = 12;
  // const stemTopInitialValue = 1;
  // const stemBottomInitialValue = 2;
  // const baseTotalLengthInitialValue = 8;
  // const baseToeLengthInitialValue = 238;
  // const baseThicknessInitialValue = 1.5;
  // const shareLengthInitialValue = 2;
  // const shareDistanceInitialValue = 119;
  // const shareThicknessInitialValue = 1;
  const [stemHeight, setStemHeight] = useState(stemHeightInitialValue);
  const [stemTop, setStemTop] = useState(stemTopInitialValue);
  const [stemBottom, setStemBottom] = useState(stemBottomInitialValue);

  const [baseTotalLength, setBaseTotalLength] = useState(
    baseTotalLengthInitialValue
  );
  const [baseToeLength, setToeBaseLength] = useState(baseToeLengthInitialValue);
  const [baseThickness, setBaseThickness] = useState(baseThicknessInitialValue);

  const [shareLength, setShareLength] = useState(shareLengthInitialValue);
  const [shareDistance, setShareDistance] = useState(shareDistanceInitialValue);
  const [shareThickness, setShareThickness] = useState(
    shareThicknessInitialValue
  );

  const [activePressure, setActivePressure] = useState(activeInitValue);
  const [steelFy, setSteelFy] = useState(steelFyInitValue);
  const [passivePressure, setPassivePressure] = useState(passiveInitValue);
  const [seismicPressure, setSeismicPressure] = useState(seisPressInitValue);
  const [leftEl, setleftEl] = useState(leftSoilInitValue);
  const [rightEl, setRightEl] = useState(rightSoilInitValue);
  const [waterElevation, setWaterElevation] = useState(waterInitValue);
  const [soilUnit, setSoilUnit] = useState(soilUnitWeightInitValue);

  const [pga, setPga] = useState(pgaInitValue);
  const [steelFc, setSteelFc] = useState(fcInitValue);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  useEffect(() => {
    var newModel = {
      dim: {
        base: {
          thickness: baseThickness,
          toe_length: baseToeLength,
          total_length: baseTotalLength,
        },
        shear_key: {
          height: shareThickness,
          length: shareLength,
          toe_distance: shareDistance,
        },
        stem: {
          bottom: stemBottom,
          height: stemHeight,
          top: stemTop,
        },
      },
      materials: {
        fc_concrete: steelFc,
        fy_steel: steelFy,
        soil_unit_weight: soilUnit,
      },
      soil_data: {
        active: activePressure,
        left_el: leftEl,
        passive: passivePressure,
        pga: pga,
        right_el: rightEl,
        seismic: seismicPressure,
        water_el: waterElevation,
      },
      info: model.info,
    };
    // dispatch(setModel(newModel));
    dispatch(getRightFormData(newModel));
  }, [
    stemHeight,
    stemTop,
    stemBottom,
    baseTotalLength,
    baseToeLength,
    baseThickness,
    shareLength,
    shareDistance,
    shareThickness,
    activePressure,
    steelFy,
    passivePressure,
    seismicPressure,
    leftEl,
    rightEl,
    waterElevation,
    soilUnit,
    pga,
    steelFc,
  ]);

  function calculateValue(value) {
    return 0.1 ** value;
  }
  // const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setStemTop(newValue);
  };
  const aiFixHandler = () => {
    setStemHeight(stemHeightInitialValue);
    setStemTop(stemTopInitialValue);
    setStemBottom(stemBottomInitialValue);
    setBaseTotalLength(baseTotalLengthInitialValue);
    setToeBaseLength(baseToeLengthInitialValue);
    setBaseThickness(baseThicknessInitialValue);
    setShareLength(shareLengthInitialValue);
    setShareDistance(shareDistanceInitialValue);
    setShareThickness(shareThicknessInitialValue);
  };
  return (
    <Stack direction={"column"} spacing={10}>
      <Stack direction={"row"} alignItems="center" spacing={3}>
        <Typography>LIVE MODEL</Typography>
        <hr style={{ width: 150, border: "1px solid #000" }} />
        {/* <TextField variant="standard" width={12}></TextField> */}
      </Stack>
      {isMatch && <Slogan />}

      <center>
        <svg
          width="85%"
          height="80%"
          viewBox="0 0 491 426"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={`M176 ${300 - stemHeight * 12.5}H${stemTop * 70 + 175}L${
              stemBottom * 50 + 175
            } ${300}H175L1380Z`}
            fill="#D9D9D9"
          />
          <rect
            x={58.5 * baseToeLength}
            y="298"
            width={baseTotalLength * 28.25}
            height={baseThickness * 20}
            fill="#D9D9D9"
          />
          <rect
            x={29.33 * shareDistance}
            y="357"
            width={shareLength * 35}
            height={shareThickness * 40}
            fill="#D9D9D9"
          />
        </svg>
      </center>
      <Box mt={1}>
        <Stack direction={"row"} justifyContent={"flex-end"}>
          <Box onClick={() => aiFixHandler()}>
            <CustomButton txtColor={"#FFF"} bgColor={"#47C5FB"}>
              Fix with AI
            </CustomButton>
          </Box>
        </Stack>
        <Box>
          <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
            Stem
          </Typography>
          <Stack direction={"column"}>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <Typography>Height</Typography>
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={stemHeight}
                    min={0}
                    max={24}
                    sx={{
                      "& .MuiSlider-track": {
                        background: "#47C5FB",
                        borderColor: "#47C5FB",
                      },
                      "& .MuiSlider-rail": {
                        background: "#CCC",
                      },
                      "& .MuiSlider-thumb": {
                        backgroundColor: "#47C5FB",
                      },
                    }}
                    valueLabelDisplay="auto"
                    scale={calculateValue}
                    onChange={(event, newValue) => {
                      // setStemTop(24 - newValue);
                      // setStemTop((prev) => newValue * 12.5);
                      setStemHeight(newValue);
                    }}
                  />
                  {/* <Box>

                    </Box> */}
                  <Button variant="outlined" sx={styleValueBox}>
                    {stemHeight} ft
                  </Button>
                </Stack>
              </Grid>
            </Grid>
            {/*stem  Top */}
            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <Typography>{"Top"}</Typography>
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    value={stemTop}
                    min={0}
                    max={2}
                    step={0.1}
                    sx={{
                      "& .MuiSlider-track": {
                        background: "#47C5FB",
                        borderColor: "#47C5FB",
                      },
                      "& .MuiSlider-rail": {
                        background: "#CCC",
                      },
                      "& .MuiSlider-thumb": {
                        backgroundColor: "#47C5FB",
                      },
                    }}
                    valueLabelDisplay="auto"
                    scale={calculateValue}
                    onChange={handleChange}
                  />
                  <Button variant="outlined" sx={styleValueBox}>
                    {stemTop} ft
                  </Button>
                </Stack>
              </Grid>
            </Grid>

            {/* stem Bottom */}
            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <Typography>{"Bottom"}</Typography>
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={stemBottom}
                    min={0}
                    max={4}
                    sx={{
                      "& .MuiSlider-track": {
                        background: "#47C5FB",
                        borderColor: "#47C5FB",
                      },
                      "& .MuiSlider-rail": {
                        background: "#CCC",
                      },
                      "& .MuiSlider-thumb": {
                        backgroundColor: "#47C5FB",
                      },
                    }}
                    valueLabelDisplay="auto"
                    scale={calculateValue}
                    onChange={(event, newValue) => setStemBottom(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox}>
                    {stemBottom} ft
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Box>

        <Box mt={1}>
          <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
            Base
          </Typography>
          <Stack direction={"column"}>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} xs={12}>
                <Typography>{"Total Length"}</Typography>
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    value={baseTotalLength}
                    min={0}
                    max={16}
                    sx={{
                      "& .MuiSlider-track": {
                        background: "#47C5FB",
                        borderColor: "#47C5FB",
                      },
                      "& .MuiSlider-rail": {
                        background: "#CCC",
                      },
                      "& .MuiSlider-thumb": {
                        backgroundColor: "#47C5FB",
                      },
                    }}
                    step={0.1}
                    valueLabelDisplay="auto"
                    scale={calculateValue}
                    onChange={(event, newValue) => setBaseTotalLength(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox}>
                    {baseTotalLength} ft
                  </Button>
                </Stack>
              </Grid>
            </Grid>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <Typography>{"Toe length"}</Typography>
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    value={baseToeLength}
                    min={0}
                    max={3}
                    sx={{
                      "& .MuiSlider-track": {
                        background: "#47C5FB",
                        borderColor: "#47C5FB",
                      },
                      "& .MuiSlider-rail": {
                        background: "#CCC",
                      },
                      "& .MuiSlider-thumb": {
                        backgroundColor: "#47C5FB",
                      },
                    }}
                    step={0.1}
                    valueLabelDisplay="auto"
                    scale={calculateValue}
                    onChange={(event, newValue) => setToeBaseLength(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox}>
                    {baseToeLength} ft
                  </Button>
                </Stack>
              </Grid>
            </Grid>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <Typography>{"Thickness"}</Typography>
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    value={baseThickness}
                    min={0}
                    max={3}
                    step={0.1}
                    sx={{
                      "& .MuiSlider-track": {
                        background: "#47C5FB",
                        borderColor: "#47C5FB",
                      },
                      "& .MuiSlider-rail": {
                        background: "#CCC",
                      },
                      "& .MuiSlider-thumb": {
                        backgroundColor: "#47C5FB",
                      },
                    }}
                    valueLabelDisplay="auto"
                    scale={calculateValue}
                    onChange={(event, newValue) => setBaseThickness(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox}>
                    {baseThickness} ft
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Box>

        <Box mt={1}>
          <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
            Shear Key
          </Typography>
          <Stack direction={"column"}>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <Typography>{"Length"}</Typography>
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={shareLength}
                    min={0}
                    max={4}
                    sx={{
                      "& .MuiSlider-track": {
                        background: "#47C5FB",
                        borderColor: "#47C5FB",
                      },
                      "& .MuiSlider-rail": {
                        background: "#CCC",
                      },
                      "& .MuiSlider-thumb": {
                        backgroundColor: "#47C5FB",
                      },
                    }}
                    valueLabelDisplay="auto"
                    scale={calculateValue}
                    onChange={(event, newValue) => setShareLength(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox}>
                    {shareLength} ft
                  </Button>
                </Stack>
              </Grid>
            </Grid>

            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <Typography>{"Toe Distance"}</Typography>
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={shareDistance}
                    min={0}
                    max={6}
                    sx={{
                      "& .MuiSlider-track": {
                        background: "#47C5FB",
                        borderColor: "#47C5FB",
                      },
                      "& .MuiSlider-rail": {
                        background: "#CCC",
                      },
                      "& .MuiSlider-thumb": {
                        backgroundColor: "#47C5FB",
                      },
                    }}
                    valueLabelDisplay="auto"
                    scale={calculateValue}
                    onChange={(event, newValue) => setShareDistance(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox}>
                    {shareDistance} ft
                  </Button>
                </Stack>
              </Grid>
            </Grid>

            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <Typography>{"Thickness"}</Typography>
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={shareThickness}
                    min={0}
                    max={2}
                    sx={{
                      "& .MuiSlider-track": {
                        background: "#47C5FB",
                        borderColor: "#47C5FB",
                      },
                      "& .MuiSlider-rail": {
                        background: "#CCC",
                      },
                      "& .MuiSlider-thumb": {
                        backgroundColor: "#47C5FB",
                      },
                    }}
                    valueLabelDisplay="auto"
                    scale={calculateValue}
                    onChange={(event, newValue) => setShareThickness(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox}>
                    {shareThickness} ft
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Box>
        <Stack
          direction={"row"}
          spacing={1}
          alignItems={"center"}
          onClick={() => {
            setIsRotated((prev) => !prev);
          }}
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
            Advanced
          </Typography>
          <IconButton aria-label="Example">
            <ExpandMoreIcon
              sx={{
                color: "#47C5FB",
                transform: isRotated ? "rotate(-90deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease-in-out",
              }}
            />
          </IconButton>
        </Stack>
        <Box mt={1} sx={{ display: isRotated && "none" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
            Soil
          </Typography>
          <Stack direction={"column"}>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <Typography>{"Active Pressure"}</Typography>
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={activePressure}
                    min={0}
                    max={activeInitValue * 2}
                    sx={{
                      "& .MuiSlider-track": {
                        background: "#47C5FB",
                        borderColor: "#47C5FB",
                      },
                      "& .MuiSlider-rail": {
                        background: "#CCC",
                      },
                      "& .MuiSlider-thumb": {
                        backgroundColor: "#47C5FB",
                      },
                    }}
                    valueLabelDisplay="auto"
                    scale={calculateValue}
                    onChange={(event, newValue) => setActivePressure(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox}>
                    {activePressure} psf
                  </Button>
                </Stack>
              </Grid>
            </Grid>

            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <Typography>{"Passive Pressure"}</Typography>
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={passivePressure}
                    min={0}
                    max={passiveInitValue * 2}
                    sx={{
                      "& .MuiSlider-track": {
                        background: "#47C5FB",
                        borderColor: "#47C5FB",
                      },
                      "& .MuiSlider-rail": {
                        background: "#CCC",
                      },
                      "& .MuiSlider-thumb": {
                        backgroundColor: "#47C5FB",
                      },
                    }}
                    valueLabelDisplay="auto"
                    scale={calculateValue}
                    onChange={(event, newValue) => setPassivePressure(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox}>
                    {passivePressure} psf
                  </Button>
                </Stack>
              </Grid>
            </Grid>

            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <Typography>{"Seismic Pressure"}</Typography>
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={seismicPressure}
                    min={0}
                    max={seisPressInitValue * 2}
                    sx={{
                      "& .MuiSlider-track": {
                        background: "#47C5FB",
                        borderColor: "#47C5FB",
                      },
                      "& .MuiSlider-rail": {
                        background: "#CCC",
                      },
                      "& .MuiSlider-thumb": {
                        backgroundColor: "#47C5FB",
                      },
                    }}
                    valueLabelDisplay="auto"
                    scale={calculateValue}
                    onChange={(event, newValue) => setSeismicPressure(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox}>
                    {seismicPressure} psf
                  </Button>
                </Stack>
              </Grid>
            </Grid>

            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <Typography>{"Left soil level"}</Typography>
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={leftEl}
                    min={0}
                    max={leftSoilInitValue * 2}
                    sx={{
                      "& .MuiSlider-track": {
                        background: "#47C5FB",
                        borderColor: "#47C5FB",
                      },
                      "& .MuiSlider-rail": {
                        background: "#CCC",
                      },
                      "& .MuiSlider-thumb": {
                        backgroundColor: "#47C5FB",
                      },
                    }}
                    valueLabelDisplay="auto"
                    scale={calculateValue}
                    onChange={(event, newValue) => setleftEl(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox}>
                    {leftEl} ft
                  </Button>
                </Stack>
              </Grid>
            </Grid>

            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <Typography>{"Right soil level"}</Typography>
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={rightEl}
                    min={0}
                    max={rightSoilInitValue * 2}
                    sx={{
                      "& .MuiSlider-track": {
                        background: "#47C5FB",
                        borderColor: "#47C5FB",
                      },
                      "& .MuiSlider-rail": {
                        background: "#CCC",
                      },
                      "& .MuiSlider-thumb": {
                        backgroundColor: "#47C5FB",
                      },
                    }}
                    valueLabelDisplay="auto"
                    scale={calculateValue}
                    onChange={(event, newValue) => setRightEl(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox}>
                    {rightEl} ft
                  </Button>
                </Stack>
              </Grid>
            </Grid>

            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <Typography>{"Water elevation"}</Typography>
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={waterElevation}
                    min={0}
                    max={waterInitValue * 2}
                    sx={{
                      "& .MuiSlider-track": {
                        background: "#47C5FB",
                        borderColor: "#47C5FB",
                      },
                      "& .MuiSlider-rail": {
                        background: "#CCC",
                      },
                      "& .MuiSlider-thumb": {
                        backgroundColor: "#47C5FB",
                      },
                    }}
                    valueLabelDisplay="auto"
                    scale={calculateValue}
                    onChange={(event, newValue) => setWaterElevation(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox}>
                    {waterElevation} ft
                  </Button>
                </Stack>
              </Grid>
            </Grid>

            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <Typography>{"PGA"}</Typography>
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={pga}
                    min={0}
                    max={pgaInitValue * 2}
                    sx={{
                      "& .MuiSlider-track": {
                        background: "#47C5FB",
                        borderColor: "#47C5FB",
                      },
                      "& .MuiSlider-rail": {
                        background: "#CCC",
                      },
                      "& .MuiSlider-thumb": {
                        backgroundColor: "#47C5FB",
                      },
                    }}
                    valueLabelDisplay="auto"
                    scale={calculateValue}
                    onChange={(event, newValue) => setPga(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox}>
                    {pga}
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Box>

        <Box mt={1} sx={{ display: isRotated && "none" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
            Materials
          </Typography>
          <Stack direction={"column"}>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <Typography>{"Concrete f'c"}</Typography>
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={steelFc}
                    min={0}
                    max={fcInitValue * 2}
                    sx={{
                      "& .MuiSlider-track": {
                        background: "#47C5FB",
                        borderColor: "#47C5FB",
                      },
                      "& .MuiSlider-rail": {
                        background: "#CCC",
                      },
                      "& .MuiSlider-thumb": {
                        backgroundColor: "#47C5FB",
                      },
                    }}
                    valueLabelDisplay="auto"
                    scale={calculateValue}
                    onChange={(event, newValue) => setSteelFc(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox}>
                    {steelFc} psi
                  </Button>
                </Stack>
              </Grid>
            </Grid>

            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <Typography>{"Steel fy"}</Typography>
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={steelFy}
                    min={0}
                    max={steelFyInitValue * 2}
                    sx={{
                      "& .MuiSlider-track": {
                        background: "#47C5FB",
                        borderColor: "#47C5FB",
                      },
                      "& .MuiSlider-rail": {
                        background: "#CCC",
                      },
                      "& .MuiSlider-thumb": {
                        backgroundColor: "#47C5FB",
                      },
                    }}
                    valueLabelDisplay="auto"
                    scale={calculateValue}
                    onChange={(event, newValue) => setSteelFy(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox}>
                    {steelFy} ksi
                  </Button>
                </Stack>
              </Grid>
            </Grid>

            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <Typography>{"Soil unit weight"}</Typography>
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={soilUnit}
                    min={0}
                    max={soilUnitWeightInitValue * 2}
                    sx={{
                      "& .MuiSlider-track": {
                        background: "#47C5FB",
                        borderColor: "#47C5FB",
                      },
                      "& .MuiSlider-rail": {
                        background: "#CCC",
                      },
                      "& .MuiSlider-thumb": {
                        backgroundColor: "#47C5FB",
                      },
                    }}
                    valueLabelDisplay="auto"
                    // scale={calculateValue}
                    onChange={(event, newValue) => setSoilUnit(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox}>
                    {soilUnit} pcf
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
}

export default Index;
