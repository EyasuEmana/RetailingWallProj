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
const styleValueBox = {
  borderColor: "#D9D9D9",
  textTransform: "lowercase",
  whiteSpace: "nowrap",
  borderRadius: "12px",
  color: "#000",
  width: "100px",
};
function Index({ excelDate, setExcelData, model }) {
  console.log(model);
  const stemApiData = model?.dim?.stem;
  const baseApiData = model?.dim?.base;
  const shearKeyApiData = model?.dim?.shear_key;
  const stemHeightInitialValue = stemApiData?.height;
  const stemTopInitialValue = stemApiData?.top;
  const bottomInitialValue = stemApiData?.bottom;
  const baseTotalLengthInitialValue = baseApiData?.total_length;
  const baseToeLengthInitialValue = baseApiData?.toe_length;
  const baseThicknessInitialValue = baseApiData?.thickness;
  const shareLengthInitialValue = shearKeyApiData?.length;
  const shareDistanceInitialValue = shearKeyApiData?.toe_distance;
  const shareThicknessInitialValue = shearKeyApiData?.height;

  // const stemHeightInitialValue = 12;
  // const stemTopInitialValue = 1;
  // const bottomInitialValue = 2;
  // const baseTotalLengthInitialValue = 8;
  // const baseToeLengthInitialValue = 238;
  // const baseThicknessInitialValue = 1.5;
  // const shareLengthInitialValue = 2;
  // const shareDistanceInitialValue = 119;
  // const shareThicknessInitialValue = 1;
  const [stemHeight, setStemHeight] = useState(stemHeightInitialValue);
  const [stemTop, setStemTop] = useState(stemTopInitialValue);
  const [bottom, setBottom] = useState(bottomInitialValue);

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

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  useEffect(() => {
    setExcelData({
      stemHeight,
      stemTop,
      bottom,
      baseTotalLength,
      baseToeLength,
      baseThickness,
      shareLength,
      shareDistance,
      shareThickness,
    });
  }, [
    stemHeight,
    stemTop,
    bottom,
    baseTotalLength,
    baseToeLength,
    setExcelData,
    baseThickness,
    shareLength,
    shareDistance,
    shareThickness,
  ]);

  // const { height } = useSelector((state) => state.uiReducer);
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
    setBottom(bottomInitialValue);
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
        {/* <svg
          width="85%"
          height="80%"
          viewBox="0 0 491 426"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={`M176 ${stemTop * 150}H243L302.5 ${300 - bottom * 75}H176V0Z`}
            fill="#D9D9D9"
          />
          <rect
            y="298"
            width={baseTotalLength * 28.125}
            height={baseThickness * 20}
            fill="#D9D9D9"
          />
          <rect
            x="176"
            y="357"
            width={shareLength * 45.25}
            height={shareThickness * 34.5}
            fill="#D9D9D9"
          />
        </svg> */}
        <svg
          width="85%"
          height="80%"
          viewBox="0 0 491 426"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={`M176 ${300 - stemHeight * 12.5}H${stemTop * 70 + 175}L${
              bottom * 50 + 175
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
            width={shareLength * 43.25}
            height={shareThickness * 17.25}
            fill="#D9D9D9"
          />
        </svg>

        {/* <svg
          width="424"
          height="447"
          viewBox="0 0 424 447"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M138 0H199L259 253H138V0Z" fill="#D9D9D9" />
          <rect y="253" width="424" height="63" fill="#D9D9D9" />
          <rect x="138" y="306" width="169" height="61" fill="#D9D9D9" />
          <path d="M178 435H179L180 447H178V435Z" fill="#D9D9D9" />
          <rect y="143" width="138" height="110" fill="white" />
        </svg> */}

        {/* <svg
          width="424"
          height="447"
          viewBox="0 0 424 447"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M138 0H199L259 253H135L138 0Z" fill="#D9D9D9" />
          <rect y="253" width="424" height="63" fill="#D9D9D9" />
          <rect x="138" y="306" width="169" height="61" fill="#D9D9D9" />
          <path d="M178 435H179L180 447H178V435Z" fill="#D9D9D9" />
        </svg> */}
      </center>
      <Box mt={1}>
        <Stack direction={"row"} justifyContent={"flex-end"}>
          <Box onClick={() => aiFixHandler()}>
            <CustomButton txtColor={"#FFF"} bgColor={"#47C5FB"}>
              AI Fix
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
                    value={bottom}
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
                    onChange={(event, newValue) => setBottom(newValue)}
                  />
                  <Button variant="outlined" sx={styleValueBox}>
                    {bottom} ft
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
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
            Advanced
          </Typography>
          <IconButton aria-label="Example">
            {" "}
            <ExpandMoreIcon sx={{ color: "#47C5FB" }} />
          </IconButton>
        </Stack>
      </Box>
    </Stack>
  );
}

export default Index;
