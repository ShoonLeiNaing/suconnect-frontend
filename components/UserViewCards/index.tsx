import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";
import AnnounceCard from "./AnnounceCard";
import SlideCard from "./SlideCard";

const UserViewCards: FunctionComponent = () => {
  return (
    <Box marginY={1} display="flex" flexDirection="column" gap={3}>
      <Box
        margin="auto"
        display="flex"
        gap={3}
        justifyContent="center"
        alignItems="center"
      >
        <Box flex="0.5">
          <AnnounceCard
            customWidth="100%"
            cardHeight="420px"
            customHeight="260px"
            image="/images/viewcard.svg"
            title="Distribution"
            date="01/02/2022"
            bgColor={colors.primaryColors.yellow.yellow4}
            // bgColor={colors.primaryColors.yellow.yellow1}
            description="The distribution of algal species has been fairly well studied since the founding of has been fairly well studied since the founding of"
          />
        </Box>
        <Box flex="0.25">
          <AnnounceCard
            image="/images/viewcard.svg"
            title="Distribution"
            cardHeight="420px"
            date="01/02/2022"
            customWidth="100%"
            bgColor={colors.primaryColors.pink.pink4}
            description="The distribution of algal species has been fairly well studied since the founding of"
          />
        </Box>
        <Box flex="0.25">
          <AnnounceCard
            image="/images/viewcard.svg"
            title="Distribution"
            date="01/02/2022"
            cardHeight="420px"
            customWidth="100%"
            bgColor={colors.secondaryColors.green.green3}
            description="The distribution of algal species has been fairly well studied since the founding of"
          />
        </Box>
      </Box>
      <Box
        margin="auto"
        display="flex"
        gap={3}
        justifyContent="center"
        alignItems="center"
      >
        <Box flex="0.5">
          <AnnounceCard
            customWidth="100%"
            cardHeight="420px"
            customHeight="260px"
            image="/images/viewcard.svg"
            title="Distribution"
            date="01/02/2022"
            bgColor={colors.secondaryColors.orange.orange3}
            description="The distribution of algal species has been fairly well studied since the founding of has been fairly well studied since the founding of"
          />
        </Box>
        <Box flex="0.5">
          <AnnounceCard
            customWidth="100%"
            cardHeight="420px"
            customHeight="260px"
            image="/images/viewcard.svg"
            title="Distribution"
            date="01/02/2022"
            bgColor={colors.primaryColors.lightblue.lightblue4}
            description="The distribution of algal species has been fairly well studied since the founding of has been fairly well studied since the founding of"
          />
        </Box>
      </Box>
      <Box
        margin="auto"
        display="flex"
        gap={3}
        justifyContent="center"
        alignItems="center"
      >
        <Box flex="0.25">
          <AnnounceCard
            image="/images/viewcard.svg"
            title="Distribution"
            date="01/02/2022"
            cardHeight="440px"
            customWidth="100%"
            customHeight="260px"
            bgColor={colors.primaryColors.yellow.yellow4}
            description="The distribution of algal species has been fairly well studied since the founding of"
          />
        </Box>
        <Box flex="0.25">
          <AnnounceCard
            image="/images/viewcard.svg"
            title="Distribution"
            date="01/02/2022"
            cardHeight="440px"
            customWidth="100%"
            customHeight="260px"
            bgColor={colors.primaryColors.pink.pink4}
            description="The distribution of algal species has been fairly well studied since the founding of"
          />
        </Box>
        <Box flex="0.5" display="flex" flexDirection="column" gap={3}>
          <SlideCard
            customWidth="100%"
            cardHeight="205px"
            textColor="white"
            image="/images/viewcard.svg"
            title="Distribution"
            date="01/02/2022"
            bgColor={colors.secondaryColors.red.red1}
            description="The distribution of algal species has been fairly well studied since the founding of phytogeography in the mid-19th "
          />
          <SlideCard
            customWidth="100%"
            cardHeight="205px"
            textColor="white"
            image="/images/viewcard.svg"
            title="Distribution"
            date="01/02/2022"
            bgColor={colors.secondaryColors.green.green3}
            description="The distribution of algal species has been fairly well studied since the founding of phytogeography in the mid-19th"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default UserViewCards;
