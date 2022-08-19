import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";
import SubTitle from "../SubTitle";
import Tagline from "../SubTitle/Tagline";
import Card from "./card";

const Benefit: FunctionComponent = () => {
  return (
    <Box marginY="4rem">
      <SubTitle
        title="Benefits"
        icon
        color={colors.primaryColors.yellow.yellow1}
      />
      <Tagline text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac ultrices nunc commodo nunc consequat." />
      <Box margin="auto" display="flex" gap={2} mt={4}>
        <Card icon="/images/benefit1.svg" title="Organized" />
        <Card icon="/images/benefit2.svg" title="Self-manage" />
        <Card icon="/images/benefit3.svg" title="Customization" />
        <Card icon="/images/benefit4.svg" title="Disciplined" />
        <Card icon="/images/benefit5.svg" title="Flexibility" />
        <Card icon="/images/benefit6.svg" title="Track Easily" />
        <Card icon="/images/benefit7.svg" title="Reduce Time" />
      </Box>
    </Box>
  );
};

export default Benefit;
