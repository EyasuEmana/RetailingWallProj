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
  OutlinedInput,
  styled,
  TextField,
  InputAdornment,
  FormControl,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CustomButton from "../../../../../components/CustomButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slogan from "../../../../../components/Slogan";
import { dispatch } from "../../../../../store";
import { getRightFormData } from "../../../../../store/actions/uiActions";
import "./inputStyle.css";
import { useSelector } from "react-redux";
const styleValueBox = {
  borderColor: "#D9D9D9",
  textTransform: "lowercase",
  whiteSpace: "nowrap",
  borderRadius: "12px",
  color: "#000",
  width: "100px",
  "&.Mui-disabled": {
    borderColor: "#D9D9D9",
    textTransform: "lowercase",
    whiteSpace: "nowrap",
    borderRadius: "12px",
    color: "#000",
    width: "100px",
  },
};
const StyledInputBase = styled(OutlinedInput)(() => ({
  borderRadius: "12px",
  color: "#000",
  ".MuiOutlinedInput-input": {
    padding: "7px 8px",
    width: 50,
    borderRadius: "40px",
  },
}));
const sliderStyle = {
  borderRadius: "12px",
  "& .MuiSlider-track": {
    background: "#47C5FB",
    borderColor: "#47C5FB",
    height: "2px",
  },
  "& .MuiSlider-rail": {
    background: "#CCC",
    height: "2px",
  },
  "& .MuiSlider-thumb": {
    backgroundColor: "#47C5FB",
    width: "10px",
    height: "10px",
  },
};
function Index() {
  const { model } = useSelector((state) => state.uiReducer);
  const [displayInputField, setDisplayInputField] = useState(false);
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
  const downSMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const inputRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setDisplayInputField(false);
    }
  };
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
  const CustomSliderTitle = ({ title }) => {
    return (
      <Typography id="" sx={{ fontSize: "12px", fontWeight: "400" }}>
        {title}
      </Typography>
    );
  };
  const inputStyle = {
    border: "1px solid #D9D9D9",
    textTransform: "lowercase",
    borderRadius: "12px",
    color: "#000",
    padding: 5,
    width: 65,
    height: 20,
  };
  return (
    <Stack
      direction={"column"}
      spacing={12}
      sx={{ width: "100%" }}
      onClick={handleOutsideClick}
    >
      <Stack direction={"row"} alignItems="center" spacing={3}>
        <Typography>LIVE MODEL</Typography>
        <hr style={{ width: 150, border: "1px solid #000" }} />
        {/* <TextField variant="standard" width={12}></TextField> */}
      </Stack>
      {isMatch && <Slogan />}
      <center>
        <div
          style={{
            width: downSMatch ? "271px" : "471px",
            height: downSMatch ? "207px" : "407px",
            // resize: "both",
            overflow: "auto",
          }}
        >
          <svg
            width={"85%"}
            height={"80%"}
            viewBox="0 0 510 450"
            // viewBox="0 0 491 426"
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
              y={baseTotalLength == 0 ? 299 : 297 + baseThickness * 20}
              width={shareLength * 35}
              height={shareThickness * 40}
              fill="#D9D9D9"
            />
          </svg>
        </div>
      </center>
      <Box>
        <Stack direction={"row"} justifyContent={"flex-end"}>
          {/* <Box onClick={() => aiFixHandler()}> */}
          <CustomButton
            txtcolor={"#FFF"}
            backgroundcolor={"#47C5FB"}
            fontSize={12}
            radius={"4px"}
            fontWeight={500}
            // disabled
          >
            Fix with AI
          </CustomButton>
          {/* </Box> */}
        </Stack>
        <Box>
          <Typography sx={{ fontWeight: 700, fontSize: 14 }}>Stem</Typography>
          <Stack direction={"column"}>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <CustomSliderTitle title={"Height"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={stemHeight}
                    min={0}
                    max={24}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => {
                      setStemHeight(newValue);
                    }}
                  />
                  {/* <Box>

                    </Box> */}
                  <Button variant="outlined" disabled sx={styleValueBox}>
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
                <CustomSliderTitle title={"Top"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    value={stemTop}
                    min={0}
                    max={2}
                    step={0.1}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={handleChange}
                  />
                  <Button variant="outlined" sx={styleValueBox} disabled>
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
                <CustomSliderTitle title={"Bottom"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={stemBottom}
                    min={0}
                    max={4}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setStemBottom(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox} disabled>
                    {stemBottom} ft
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Box>

        <Box mt={1}>
          <Typography sx={{ fontWeight: 700, fontSize: 14 }}>Base</Typography>
          <Stack direction={"column"}>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} xs={12}>
                <CustomSliderTitle title={"Total Length"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    value={baseTotalLength}
                    min={0}
                    max={16}
                    sx={sliderStyle}
                    step={0.1}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setBaseTotalLength(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox} disabled>
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
                <CustomSliderTitle title={"Toe Length"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    value={baseToeLength}
                    min={0}
                    max={3}
                    sx={sliderStyle}
                    step={0.1}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setToeBaseLength(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox} disabled>
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
                <CustomSliderTitle title={"Thickness"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    value={baseThickness}
                    min={0}
                    max={3}
                    step={0.1}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setBaseThickness(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox} disabled>
                    {baseThickness} ft
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Box>

        <Box mt={1}>
          <Typography sx={{ fontWeight: 700, fontSize: 14 }}>
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
                <CustomSliderTitle title={"Length"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={shareLength}
                    min={0}
                    max={4}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setShareLength(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox} disabled>
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
                <CustomSliderTitle title={"Toe Distance"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={shareDistance}
                    min={0}
                    max={6}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setShareDistance(newValue)}
                  />
                  {/* {true ? (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid #D9D9D9",
                        borderRadius: "12px",
                        width: "100px",
                        paddingY: 1,
                        paddingX: 1,
                      }}
                    >
                      <input
                        ref={inputRef}
                        className="style-input"
                        value={shareDistance}
                        onChange={(event, newValue) =>
                          setShareDistance(newValue)
                        }
                        // onFocus={() => setDisplayInputField(true)}
                      />
                      ft
                    </Box>
                  ) : (
                    <Button
                      variant="outlined"
                      sx={styleValueBox}
                      // disabled
                      onClick={() => setDisplayInputField(true)}
                    >
                      {shareDistance} ft
                    </Button>
                  )} */}
                  <Button
                      variant="outlined"
                      sx={styleValueBox}
                      // disabled
                      onClick={() => setDisplayInputField(true)}
                    >
                      {shareDistance} ft
                    </Button>
                  {/* <FormControl sx={{ m: 1, width: 100 }} variant="outlined">
                    <StyledInputBase
                      id="outlined-adornment-weight"
                      endAdornment={
                        <InputAdornment position="end">ft</InputAdornment>
                      }
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        "aria-label": "weight",
                      }}
                    />
                  </FormControl> */}
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
                <CustomSliderTitle title={"Thickness"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={shareThickness}
                    min={0}
                    max={2}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setShareThickness(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox} disabled>
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
          <Typography sx={{ fontWeight: 700, fontSize: 14 }}>
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
          <Typography sx={{ fontWeight: 700, fontSize: 14 }}>Soil</Typography>
          <Stack direction={"column"}>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <CustomSliderTitle title={"Active Pressure"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={activePressure}
                    min={0}
                    max={activeInitValue * 2}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setActivePressure(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox} disabled>
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
                <CustomSliderTitle title={"Passive Pressure"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={passivePressure}
                    min={0}
                    max={passiveInitValue * 2}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setPassivePressure(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox} disabled>
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
                <CustomSliderTitle title={"Seismic Pressure"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={seismicPressure}
                    min={0}
                    max={seisPressInitValue * 2}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setSeismicPressure(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox} disabled>
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
                <CustomSliderTitle title={"Left soil level"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={leftEl}
                    min={0}
                    max={leftSoilInitValue * 2}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setleftEl(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox} disabled>
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
                <CustomSliderTitle title={"Right soil level"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={rightEl}
                    min={0}
                    max={rightSoilInitValue * 2}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setRightEl(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox} disabled>
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
                <CustomSliderTitle title={"Water elevation"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={waterElevation}
                    min={0}
                    max={waterInitValue * 2}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setWaterElevation(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox} disabled>
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
                <CustomSliderTitle title={"PGA"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={pga}
                    min={0}
                    max={pgaInitValue * 2}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setPga(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox} disabled>
                    {pga}
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Box>

        <Box mt={1} sx={{ display: isRotated && "none" }}>
          <Typography sx={{ fontWeight: 700, fontSize: 14 }}>
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
                <CustomSliderTitle title={"Concrete f'c"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={steelFc}
                    min={0}
                    max={fcInitValue * 2}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setSteelFc(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox} disabled>
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
                <CustomSliderTitle title={"Steel fy"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={steelFy}
                    min={0}
                    max={steelFyInitValue * 2}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setSteelFy(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox} disabled>
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
                <CustomSliderTitle title={"Soil unit weight"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={soilUnit}
                    min={0}
                    max={soilUnitWeightInitValue * 2}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    //
                    onChange={(event, newValue) => setSoilUnit(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox} disabled>
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
