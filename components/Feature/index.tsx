import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import { colors } from "../../data/constant";
import SubTitle from "../SubTitle";
import Tagline from "../SubTitle/Tagline";
import Card from "./card";

const Feature: FunctionComponent = () => {
  return (
    <Box my={4}>
      <Box display={{xs: "flex", md: "block"}}
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
        <Box className="grid md:grid-cols-2 xs:grid-cols-1 gap-10 my-8 px-4">
          <Card />
        </Box>
      </Box>
    </Box>
  );
};

export default Feature;
