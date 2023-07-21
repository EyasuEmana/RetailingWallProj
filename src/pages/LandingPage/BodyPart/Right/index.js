import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import CustomButton from "../../../../components/CustomButton";

function index() {
  const CustomOutputProgress = () => {
    return (
      <Box sx={{ height: 6, width: "100%", backgroundColor: "#CCC" }}>
        {/* <Box sx={{ height: 6, width: "90%", backgroundColor: "#999" }}></Box> */}
      </Box>
    );
  };

  const OutputComponent = ({ title, value }) => {
    return (
      <Grid
        container
        alignItems={"center"}
        justifyContent={"space-between"}
        spacing={2}
        mb={0.5}
      >
        <Grid item lg={4}>
          <Typography>{title}</Typography>
        </Grid>
        <Grid item lg={6}>
          <Box>
            <CustomOutputProgress />
          </Box>
        </Grid>
        <Grid item lg={2}>
          <Typography>{value}</Typography>
        </Grid>
      </Grid>
    );
  };

  return (
    <Box>
      <Stack spacing={10}>
        <Stack direction={"column"} spacing={3}>
          <Box>
            <Typography sx={{ fontSize: 40 }}>
              Unlock <b>efficiency</b> with <b>intelligent</b>
            </Typography>
            <Typography sx={{ fontSize: 40 }}>
              <b>automation</b> for stability and
            </Typography>
            <Typography sx={{ fontSize: 40 }}>strength design</Typography>
          </Box>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Typography sx={{ fontSize: 18 }}>INSTANT ANALYSIS</Typography>
            <TextField variant="standard" width={50}></TextField>
          </Stack>
        </Stack>

        <Stack direction={"column"} spacing={6}>
          {/* button stack */}
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={3}
          >
            <CustomButton
              bgColor={"#171414"}
              textColor={"#FFF"}
              sx={{ paddingX: 6 }}
            >
              Stability
            </CustomButton>
            <CustomButton
              bgColor={"#D9D9D9"}
              textColor={"#000"}
              sx={{ paddingX: 6 }}
            >
              Strength
            </CustomButton>
          </Stack>
          {/* output space */}
          <Stack direction={"column"}>
            <Box mb={4}>
              <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
                Stem
              </Typography>
              <OutputComponent title={"Overturning"} value={1.2} />
              <OutputComponent title={"Compression"} value={1.4} />
              <OutputComponent title={"Bearing"} value={1.3} />
              <OutputComponent title={"Sliding"} value={12.4} />
              <OutputComponent title={"Flotation"} value={5.1} />
              <Stack direction={"column"}></Stack>
            </Box>
            <Box mb={4}>
              <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
                Seismic
              </Typography>
              <OutputComponent title={"Overturning"} value={1.2} />
              <OutputComponent title={"Compression"} value={1.4} />
              <OutputComponent title={"Bearing"} value={1.3} />
              <OutputComponent title={"Sliding"} value={2.4} />
              <OutputComponent title={"Flotation"} value={5.2} />
              <Stack direction={"column"}></Stack>
            </Box>
            <Box mb={4}>
              <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
                Peak Maximum Flow (PMF)
              </Typography>
              <OutputComponent title={"Overturning"} value={1.2} />
              <OutputComponent title={"Compression"} value={1.4} />
              <OutputComponent title={"Bearing"} value={1.3} />
              <OutputComponent title={"Sliding"} value={2.4} />
              <OutputComponent title={"Flotation"} value={5.2} />
              <Stack direction={"column"}></Stack>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default index;
