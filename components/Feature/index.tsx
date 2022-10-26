import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import { colors } from "../../data/constant";
import SubTitle from "../SubTitle";
import Tagline from "../SubTitle/Tagline";
import Card from "./card";

const Feature: FunctionComponent = () => {
  return (
    <Box my={4} mt={8}>
      <Box
        display={{ xs: "flex", md: "block" }}
        flexDirection="column"
        alignItems="center"
        className="inner-container"
      >
        <SubTitle
          title="By Features"
          icon
          color={colors.secondaryColors.green.green1}
        />
        <Tagline text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac ultrices nunc commodo nunc consequat." />
        <Box
          display="flex"
          flexWrap="wrap"
          mt={{ md: 6, xs: 4 }}
          gap={{ lg: 4, sm: 2 }}
        >
          <Card />
        </Box>
      </Box>
    </Box>
  );
};

export default Feature;
