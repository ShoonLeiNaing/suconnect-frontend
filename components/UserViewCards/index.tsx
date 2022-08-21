import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";
import AnnounceCard from "./AnnounceCard";
import SlideCard from "./SlideCard";

const UserViewCards: FunctionComponent = () => {
  return (
    <Box marginY="4rem">
      <Box
        margin="auto"
        display="flex"
        gap={12}
        mt={8}
        justifyContent="center"
        alignItems="center"
      >
        <AnnounceCard
          image="/images/viewcard.svg"
          title="Distribution"
          date="01/02/2022"
          bgColor={colors.primaryColors.yellow.yellow1}
          description="The distribution of algal species has been fairly well studied since the founding of"
        />
        <AnnounceCard
          image="/images/viewcard.svg"
          title="Distribution"
          date="01/02/2022"
          bgColor={colors.primaryColors.pink.pink1}
          description="The distribution of algal species has been fairly well studied since the founding of"
        />
        <AnnounceCard
          image="/images/viewcard.svg"
          title="Distribution"
          date="01/02/2022"
          bgColor={colors.secondaryColors.green.green1}
          description="The distribution of algal species has been fairly well studied since the founding of"
        />
      </Box>
      <Box
        margin="auto"
        display="flex"
        gap={12}
        mt={8}
        justifyContent="center"
        alignItems="center"
      >
        <SlideCard
          customWidth="30rem"
          textColor="white"
          image="/images/viewcard.svg"
          title="Distribution"
          date="01/02/2022"
          bgColor={colors.secondaryColors.green.green1}
          description="The distribution of algal species has been fairly well studied since the founding of phytogeography in the mid-19th phytogeography in the mid-19th "
        />
        <SlideCard
          customWidth="30rem"
          textColor="white"
          image="/images/viewcard.svg"
          title="Distribution"
          date="01/02/2022"
          bgColor={colors.secondaryColors.red.red1}
          description="The distribution of algal species has been fairly well studied since the founding of phytogeography in the mid-19th phytogeography in the mid-19th"
        />
      </Box>
    </Box>
  );
};

export default UserViewCards;
