import { Box } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";
import SubTitle from "../SubTitle";
import Tagline from "../SubTitle/Tagline";
import Card from "./card";

const UserInnovation: FunctionComponent = () => {
  return (
    <Box marginBottom="4rem">
      <SubTitle
        title="Powering User Innovation"
        icon
        color={colors.primaryColors.pink.pink1}
      />
      <Tagline text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac ultrices nunc commodo nunc consequat." />
      <Box
        margin="auto"
        display="flex"
        gap={12}
        mt={8}
        justifyContent="center"
        alignItems="center"
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
