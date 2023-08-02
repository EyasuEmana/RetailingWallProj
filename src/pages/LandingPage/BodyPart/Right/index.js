import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import CustomButton from "../../../../components/CustomButton";
import Slogan from "../../../../components/Slogan";
import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";
import { dispatch } from "../../../../store";
import { getRightFormData } from "../../../../store/actions/uiActions";

function Index() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("lg"));
  const isMatchXS = useMediaQuery(theme.breakpoints.down("sm"));
  const { model, modelRight } = useSelector((state) => state.uiReducer);
  const { seismic, pmf } = modelRight;
  const statics = modelRight?.static;
  // useEffect(() => {
  //   if (!Object.keys(model).length == 0) dispatch(getRightFormData(model));
  // }, [model]);
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
                Static
              </Typography>
              <OutputComponent
                title={"Overturning"}
                value={statics?.overturning}
              />
              <OutputComponent
                title={"Compression"}
                value={statics?.compression}
              />
              <OutputComponent title={"Bearing"} value={statics?.bearing} />
              <OutputComponent title={"Sliding"} value={statics?.sliding} />
              <OutputComponent title={"Flotation"} value={statics?.flotation} />
              <Stack direction={"column"}></Stack>
            </Box>
            <Box mb={4}>
              <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
                Seismic
              </Typography>
              <OutputComponent
                title={"Overturning"}
                value={seismic?.overturning}
              />
              <OutputComponent
                title={"Compression"}
                value={seismic?.compression}
              />
              <OutputComponent title={"Bearing"} value={seismic?.bearing} />
              <OutputComponent title={"Sliding"} value={seismic?.sliding} />
              <OutputComponent title={"Flotation"} value={seismic?.flotation} />
              <Stack direction={"column"}></Stack>
            </Box>
            <Box mb={4}>
              <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
                Peak Maximum Flow (PMF)
              </Typography>
              <OutputComponent title={"Overturning"} value={pmf?.overturning} />
              <OutputComponent title={"Compression"} value={pmf?.compression} />
              <OutputComponent title={"Bearing"} value={pmf?.bearing} />
              <OutputComponent title={"Sliding"} value={pmf?.sliding} />
              <OutputComponent title={"Flotation"} value={pmf?.flotation} />
              <Stack direction={"column"}></Stack>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Index;
