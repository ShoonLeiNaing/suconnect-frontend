import { Box } from "@mui/material";
import { colors } from "../../data/constant";
import SubTitle from "../SubTitle";
import Tagline from "../SubTitle/Tagline";
import EntityCard from "./EntityCard";

const Entity = () => {
  return (
    <Box>
      <SubTitle
        title="By Entity"
        icon
        color={colors.secondaryColors.orange.orange1}
      />
      <Tagline text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac ultrices nunc commodo nunc consequat." />
      <Box margin="auto" display="flex" gap={3} mt={4}>
        <EntityCard
          title="Classes"
          text="The distribution of algal species has been fairly well studied since the founding"
          color={colors.primaryColors.pink.pink1}
          icon="/images/entity1.svg"
        />
        <EntityCard
          title="Coordinators"
          text="The distribution of algal species has been fairly well studied since the founding"
          color={colors.primaryColors.yellow.yellow1}
          icon="/images/entity2.svg"
        />
        <EntityCard
          title="Classes"
          text="The distribution of algal species has been fairly well studied since the founding"
          color={colors.primaryColors.lightblue.lightblue1}
          icon="/images/entity3.svg"
        />
        <EntityCard
          title="Roles"
          text="The distribution of algal species has been fairly well studied since the founding"
          color={colors.secondaryColors.red.red1}
          icon="/images/entity4.svg"
        />
        <EntityCard
          title="Classes"
          text="The distribution of algal species has been fairly well studied since the founding"
          color={colors.secondaryColors.orange.orange1}
          icon="/images/entity1.svg"
        />{" "}
      </Box>
    </Box>
  );
};

export default Entity;
