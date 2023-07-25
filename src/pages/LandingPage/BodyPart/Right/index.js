import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import CustomButton from "../../../../components/CustomButton";
import Slogan from "../../../../components/Slogan";
import { useTheme } from "@emotion/react";

function Index() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("lg"));
  const isMatchXS = useMediaQuery(theme.breakpoints.down("sm"));
  const CustomOutputProgress = () => {
    return (
      <Box
        sx={{
          height: 6,
          width: "100%",
          backgroundColor: "#CCC",
          borderRadius: 2,
        }}
      >
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
        spacing={isMatchXS ? 0 : 2}
        mb={0.5}
      >
        <Grid item sm={4} xs={12}>
          <Typography>{title}</Typography>
        </Grid>
        <Grid item sm={6} xs={9}>
          <Box>
            <CustomOutputProgress />
          </Box>
        </Grid>
        <Grid item sm={2} xs={3}>
          <Typography>{value}</Typography>
        </Grid>
      </Grid>
    );
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

export default Index;
