import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";
import AnnounceCard from "./AnnounceCard";
import SlideCard from "./SlideCard";

interface IProps {
  showCategory?: boolean;
  data: any;
  type: string;
  loading: boolean;
}

const UserViewCards: FunctionComponent<IProps> = ({
  showCategory,
  data,
  type,
  loading,
}) => {
  return (
    <Box marginY={1} display="flex" flexDirection="column" gap={3}>
      {!loading && data
        ? data?.map((card: any, index: number) => (
            <Box className="grid">
              <Box
                margin="auto"
                display="grid"
                gap={3}
                justifyContent="center"
                alignItems="center"
                className="grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
              >
                {index === 0 && (
                  // <Box flex="0.5" item>
                  <Box >
                    <AnnounceCard
                      index={index}
                      customWidth="100%"
                      cardHeight="420px"
                      customHeight="260px"
                      image="/images/viewcard.svg"
                      title={card.title}
                      date={card.created_at}
                      bgColor={colors.primaryColors.yellow.yellow4}
                      // bgColor={colors.primaryColors.yellow.yellow1}
                      description={card.body}
                    />
                  </Box>
                )}
                {index === 1 && (
                  <Box flex="0.25">
                    <AnnounceCard
                      index={index}
                      image="/images/viewcard.svg"
                      title={card.title}
                      cardHeight="420px"
                      date={card.created_at}
                      customWidth="100%"
                      bgColor={colors.primaryColors.pink.pink4}
                      description={card.body}
                    />
                  </Box>
                )}
                {index === 2 && (
                  <Box flex="0.25">
                    <AnnounceCard
                      index={index}
                      image="/images/viewcard.svg"
                      title={card.title}
                      date={card.created_at}
                      cardHeight="420px"
                      customWidth="100%"
                      bgColor={colors.secondaryColors.green.green3}
                      description={card.body}
                    />
                  </Box>
                )}
              </Box>
              <Box
                margin="auto"
                display="flex"
                gap={3}
                justifyContent="center"
                alignItems="center"
              >
                {index === 3 && (
                  <Box flex="0.5">
                    <AnnounceCard
                      customWidth="100%"
                      cardHeight="420px"
                      customHeight="260px"
                      image="/images/viewcard.svg"
                      title={card.title}
                      date={card.created_at}
                      bgColor={colors.secondaryColors.orange.orange3}
                      description={card.body}
                    />
                  </Box>
                )}
                {index === 4 && (
                  <Box flex="0.5">
                    <AnnounceCard
                      customWidth="100%"
                      cardHeight="420px"
                      customHeight="260px"
                      image="/images/viewcard.svg"
                      title={card.title}
                      date={card.created_at}
                      bgColor={colors.primaryColors.lightblue.lightblue4}
                      description={card.body}
                    />
                  </Box>
                )}
              </Box>
              <Box
                margin="auto"
                display="flex"
                gap={3}
                justifyContent="center"
                alignItems="center"
              >
                {index === 5 && (
                  <Box flex="0.25">
                    <AnnounceCard
                      image="/images/viewcard.svg"
                      title={card.title}
                      date={card.created_at}
                      cardHeight="440px"
                      customWidth="100%"
                      customHeight="260px"
                      bgColor={colors.primaryColors.yellow.yellow4}
                      description={card.body}
                    />
                  </Box>
                )}
                {index === 6 && (
                  <Box flex="0.25">
                    <AnnounceCard
                      image="/images/viewcard.svg"
                      title={card.title}
                      date={card.created_at}
                      cardHeight="440px"
                      customWidth="100%"
                      customHeight="260px"
                      bgColor={colors.primaryColors.pink.pink4}
                      description={card.body}
                    />
                  </Box>
                )}
                <Box flex="0.5" display="flex" flexDirection="column" gap={3}>
                  {index === 7 && (
                    <SlideCard
                      customWidth="100%"
                      cardHeight="205px"
                      textColor="white"
                      image="/images/viewcard.svg"
                      title={card.title}
                      date={card.created_at}
                      bgColor={colors.secondaryColors.red.red1}
                      description={card.body}
                    />
                  )}
                  {index === 8 && (
                    <SlideCard
                      customWidth="100%"
                      cardHeight="205px"
                      textColor="white"
                      image="/images/viewcard.svg"
                      title={card.title}
                      date={card.created_at}
                      bgColor={colors.secondaryColors.green.green3}
                      description={card.body}
                    />
                  )}
                </Box>
              </Box>
            </Box>
          ))
        : console.log("hi")}
    </Box>
  );
};

export default UserViewCards;
