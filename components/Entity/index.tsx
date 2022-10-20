import { Box } from "@mui/material";
import { colors } from "../../data/constant";
import SubTitle from "../SubTitle";
import Tagline from "../SubTitle/Tagline";
import EntityCard from "./EntityCard";
import styles from "./entity.module.css"

const Entity = () => {
  return (
    <Box className="relative" maxWidth="1600px">
      <img
        className={styles.bg_element}
        style={{
          position: "absolute",
          top: "-3.5rem",
          left: "-5rem",
          width: "19rem",
        }}
        src="../../images/bgelement3.svg"
        alt=""
      />
      <Box className="inner-container"
        display={{xs: "flex", md: "block"}}
        alignItems="center"
        flexDirection="column"
      >
        <SubTitle
          title="By Entity"
          icon
          color={colors.secondaryColors.orange.orange1}
        />
        <Tagline text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac ultrices nunc commodo nunc consequat." />
        <Box 
          margin="auto" 
          display="flex" 
          gap={3} mt={4} 
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
        >
            <EntityCard
              title="Classes"
              text="The distribution of algal species has been fairly well studied since the founding"
              color={colors.primaryColors.pink.pink1}
              icon="/images/entity1.svg"
            />
            <EntityCard
              title="Coordinators"
              text="The distribution of algal species has been fairly well studied since the founding"
              color={colors.secondaryColors.green.green3}
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
            />
        </Box>
      </Box>
    </Box>
  );
};

export default Entity;
