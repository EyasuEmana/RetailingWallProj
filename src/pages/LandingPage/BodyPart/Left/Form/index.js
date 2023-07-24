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
// import "./styleSvg.css";
const styleValueBox = {
  borderColor: "#D9D9D9",
  textTransform: "lowercase",
  whiteSpace: "nowrap",
  borderRadius: "12px",
  color: "#000",
  width: "100px",
};
function Index({ excelDate, setExcelData }) {
  const [stemHeight, setStemHeight] = useState(300);
  const [stemTop, setStemTop] = useState(10);
  const [bottom, setBottom] = useState(0);

  const [baseTotalLength, setBaseTotalLength] = useState(500);
  const [baseToeLength, setToeBaseLength] = useState(60);
  const [baseThickness, setBaseThickness] = useState(60);

  const [shareLength, setShareLength] = useState(173);
  const [shareDistance, setShareDistance] = useState(10);
  const [shareThickness, setShareThickness] = useState(69);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

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
    console.log("here");
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

  function calculateValue(value) {
    return 2 ** value;
  }
  // const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setStemTop(newValue);
  };

  return (
    <Box>
      <Stack direction={"column"} spacing={10}>
        <Stack direction={"row"} alignItems="center" spacing={3}>
          <Typography>LIVE MODEL</Typography>
          <hr style={{ width: 150, border: "1px solid #000" }} />
          {/* <TextField variant="standard" width={12}></TextField> */}
        </Stack>
        {isMatch && <Slogan />}
        <div className="svg-container">
          <center>
            <svg
              width="491"
              height="426"
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
        </div>
        <Box mt={1}>
          <Stack direction={"row"} justifyContent={"flex-end"}>
            <CustomButton textColor={"#FFF"} bgColor={"#47C5FB"}>
              AI Fix
            </CustomButton>
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
                      onChange={(event, newValue) =>
                        setBaseTotalLength(newValue)
                      }
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
                      onChange={(event, newValue) =>
                        setShareThickness(newValue)
                      }
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
    </Box>
  );
}

export default Index;
