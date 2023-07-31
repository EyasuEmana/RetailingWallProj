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
import { useSelector } from "react-redux";
const styleValueBox = {
  borderColor: "#D9D9D9",
  textTransform: "lowercase",
  whiteSpace: "nowrap",
  borderRadius: "12px",
  color: "#000",
  width: "100px",
};
function Index({ excelDate, setExcelData }) {
  const { starupData, starupDataLoading } = useSelector(
    (state) => state.uiReducer
  );
  const stemHeightInitialValue = 300;
  const stemTopInitialValue = 20;
  const bottomInitialValue = 0;
  const baseTotalLengthInitialValue = 450;
  const baseToeLengthInitialValue = 238;
  const baseThicknessInitialValue = 60;
  const shareLengthInitialValue = 173;
  const shareDistanceInitialValue = 119;
  const shareThicknessInitialValue = 69;
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
  useEffect(() => {
    console.log(starupData);
  }, [starupData]);

  function calculateValue(value) {
    return 2 ** value;
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
        <svg
          width="85%"
          height="80%"
          viewBox="0 0 491 426"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={`M176 ${stemTop}H243L302.5 ${300 - bottom}H176V0Z`}
            fill="#D9D9D9"
          />
          <rect
            y="298"
            width={baseTotalLength}
            height={baseThickness}
            fill="#D9D9D9"
          />
          <rect
            x="176"
            y="357"
            width={shareLength}
            height={shareThickness}
            fill="#D9D9D9"
          />
        </svg>
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
                    value={stemHeight}
                    min={0}
                    max={300}
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
                      setStemTop((prev) => 300 - newValue);
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
                    max={100}
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
                    value={bottom}
                    min={0}
                    max={300}
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
                    max={450}
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
                    max={450}
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
                    max={60}
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
                    value={shareLength}
                    min={0}
                    max={173}
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
                    value={shareDistance}
                    min={0}
                    max={173}
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
                    value={shareThickness}
                    min={0}
                    max={69}
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
