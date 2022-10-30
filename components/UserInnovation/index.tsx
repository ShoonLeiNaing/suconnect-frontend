import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";
import SubTitle from "../SubTitle";
import Tagline from "../SubTitle/Tagline";
import Card from "./card";

const UserInnovation: FunctionComponent = () => {
  return (
    <Box
      paddingY="4rem"
      className="inner-container"
      display={{ xs: "flex", md: "block" }}
      alignItems="center"
      flexDirection="column"
    >
      <SubTitle
        title="Powering User Innovation"
        icon
        color={colors.primaryColors.pink.pink1}
      />
      <Tagline text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac ultrices nunc commodo nunc consequat." />
      <Box
        margin="auto"
        display="flex"
        gap={{ md: 8, sm: 6, xs: 4 }}
        mt={{ md: 8, sm: 4, xs: 2 }}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        <Card
          image="/images/userinnovation1.svg"
          title="Qualified Certification"
          titleColor={colors.secondaryColors.green.green1}
          text="The distribution of algal species has been fairly well studied since the founding of"
        />
        <Card
          image="/images/userinnovation2.svg"
          title="Advanced Technology"
          titleColor={colors.primaryColors.yellow.yellow1}
          text="The distribution of algal species has been fairly well studied since the founding of"
        />
        <Card
          image="/images/userinnovation3.svg"
          title="Free Online Education"
          titleColor={colors.primaryColors.pink.pink1}
          text="The distribution of algal species has been fairly well studied since the founding of"
        />
      </Box>
    </Box>
  );
};

export default UserInnovation;
