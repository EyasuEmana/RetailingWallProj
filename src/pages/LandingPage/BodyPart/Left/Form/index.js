import styled from "@emotion/styled";
import {
  Box,
  Button,
  Grid,
  Slider,
  Typography,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import CustomSlider from "../../../../../components/CustomSlider";
import CustomButton from "../../../../../components/CustomButton";
import centerImg from "../../../../../static/centerImg.png";
function Index() {
  const [stemHeight, setStemHeight] = useState(300);
  const [stemTop, setStemTop] = useState(10);
  const [bottom, setBottom] = useState(0);

  const [baseTotalLength, setBaseTotalLength] = useState(500);
  const [baseToeLength, setToeBaseLength] = useState(60);
  const [baseThickness, setBaseThickness] = useState(60);

  const [shareLength, setShareLength] = useState(173);
  const [shareDistance, setShareDistance] = useState(10);
  const [shareThickness, setShareThickness] = useState(69);

  const StyledSlider = styled(Slider)((props) => ({
    ...props,
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
  }));
  function calculateValue(value) {
    return 2 ** value;
  }
  const HeightSliderComponent = ({ title, setter, value }) => {
    return (
      <Grid
        container
        alignItems={"center"}
        justifyContent={"space-between"}
        spacing={2}
        mb={0.5}
      >
        <Grid item lg={4} sm={12}>
          <Typography>{title}</Typography>
        </Grid>
        <Grid item lg={6} sm={12}>
          <Box>
            <Slider
              value={value}
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
          </Box>
        </Grid>
        <Grid item lg={2} sm={12}>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#888",
              color: "#888",
              textTransform: "lowercase",
            }}
          >
            {value} ft
          </Button>
        </Grid>
      </Grid>
    );
  };
  const SliderComponent = ({ title, setter, value, minimum, maximum }) => {
    return (
      <Grid
        container
        alignItems={"center"}
        justifyContent={"space-between"}
        spacing={2}
        mb={0.5}
      >
        <Grid item lg={4} sm={12}>
          <Typography>{title}</Typography>
        </Grid>
        <Grid item lg={6} sm={12}>
          <Box>
            <Slider
              value={value}
              min={minimum}
              max={maximum}
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
              onChange={(event, newValue) => setter(newValue)}
            />
          </Box>
        </Grid>
        <Grid item lg={2} sm={12}>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#888",
              color: "#888",
              textTransform: "lowercase",
            }}
          >
            {value} ft
          </Button>
        </Grid>
      </Grid>
    );
  };
  return (
    <Box>
      <Stack direction={"column"} spacing={10}>
        <Stack direction={"row"} alignItems="center" spacing={3}>
          <Typography>LIVE MODE</Typography>
          <TextField variant="standard" width={12}></TextField>
        </Stack>
        <div>
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
        </div>
        <Box mt={1}>
          <Stack direction={"row"} justifyContent={"flex-end"} mr={5}>
            <CustomButton textColor={"#FFF"} bgColor={"#47C5FB"}>
              AI Fix
            </CustomButton>
          </Stack>
          <Box>
            <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
              Stem
            </Typography>
            <Stack direction={"column"}>
              <HeightSliderComponent
                title={"Height"}
                minimum={0}
                maximum={300}
                setter={setStemHeight}
                value={stemHeight}
              />
              <SliderComponent
                title={"Top"}
                minimum={0}
                maximum={300}
                setter={setStemTop}
                value={stemTop}
              />
              <SliderComponent
                title={"Bottom"}
                minimum={0}
                maximum={300}
                setter={setBottom}
                value={bottom}
              />
            </Stack>
          </Box>

          <Box mt={1}>
            <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
              Base
            </Typography>
            <Stack direction={"column"}>
              <SliderComponent
                title={"Total length"}
                setter={setBaseTotalLength}
                minimum={0}
                maximum={450}
                value={baseTotalLength}
              />
              <SliderComponent
                title={"Toe length"}
                setter={setToeBaseLength}
                value={baseToeLength}
              />
              <SliderComponent
                title={"Thickness"}
                minimum={0}
                maximum={60}
                setter={setBaseThickness}
                value={baseThickness}
              />
            </Stack>
          </Box>

          <Box mt={1}>
            <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
              Share Key
            </Typography>
            <Stack direction={"column"}>
              <SliderComponent
                title={"Length"}
                minimum={0}
                maximum={173}
                setter={setShareLength}
                value={shareLength}
              />
              <SliderComponent
                title={"Toe Distance"}
                setter={setShareDistance}
                value={shareDistance}
              />
              <SliderComponent
                title={"Thickness"}
                minimum={0}
                maximum={69}
                setter={setShareThickness}
                value={shareThickness}
              />
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default Index;
