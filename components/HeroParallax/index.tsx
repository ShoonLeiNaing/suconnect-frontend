import { Box, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import { RiMoonClearLine } from "react-icons/ri";
import { FiSun } from "react-icons/fi";
import { colors } from "../../data/constant";
import ArrowButton from "../Button/ArrowButton";
import SearchInput from "./SearchInput";
import LinkSection from "./LinkSection";

const HeroParallax = () => {
  const [lightMode, setLightMode] = useState(true);
  return (
    <>
      <Box
        w="100%"
        h="65vh"
        backgroundRepeat="no-repeat"
        background="url('/images/parallaxBg.png'),linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2))"
        backgroundAttachment={{ lg: "fixed" }}
        backgroundPosition="50% 0"
        backgroundSize="cover"
        backgroundBlendMode="multiply"
      >
        <Box
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          color="white"
          h="100%"
          pos="relative"
        >
          <Box
            pos="absolute"
            top="4"
            right="0"
            mr={20}
            color={
              lightMode
                ? colors.primaryColors.lightblue.lightblue2
                : colors.primaryColors.lightblue.lightblue1
            }
            backgroundColor={lightMode ? "black" : "white"}
            h="40px"
            w="40px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="8px"
            cursor="pointer"
          >
            <Icon
              fontSize="24px"
              onClick={() => setLightMode(!lightMode)}
              as={lightMode ? RiMoonClearLine : FiSun}
            />
          </Box>
          <Text fontSize={{ xl: "40px" }} fontWeight={700}>
            Announcement
          </Text>
          <Text my={4} textAlign="center" maxW="500px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque aliquam volutpat malesuada vel quis vitae ultrices
            porta.
          </Text>

          <Box mt={4} cursor="pointer">
            <ArrowButton color={colors.primaryColors.lightblue.lightblue1} />
          </Box>
        </Box>
      </Box>
      <Box h="25vh">
        <Box
          my={8}
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          // margin="auto"
        >
          <SearchInput />
        </Box>
        <Box my={10} mb={16}>
          <LinkSection />
        </Box>
      </Box>
    </>
  );
};

export default HeroParallax;
