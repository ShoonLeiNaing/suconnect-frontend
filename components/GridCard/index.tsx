import { Box, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";
import ArrowButton from "../Button/ArrowButton";

interface IProps {
  color: string;
}
const GridCard: FunctionComponent<IProps> = ({ color }) => {
  const router = useRouter();
  return (
    <Box
      cursor="pointer"
      w="250px"
      h="350px"
      borderRadius="25px"
      boxShadow="0px 6px 20px rgba(0, 0, 0, 0.07)"
    >
      <Image
        h="150px"
        w="100%"
        borderRadius="25px 25px 0 0"
        src="/images/background.jpg"
      />
      <Box p={4} py={5}>
        <Text fontSize="18px" fontWeight={500} color={color}>
          Distribution
        </Text>
        <Text fontSize="15px" my={2} color={colors.grey.grey2}>
          The distribution of algal species has been fairly well studied since
          the founding.
        </Text>
        <Box pt={3} onClick={() => router.push("/announcements/123")}>
          <ArrowButton buttonColor={color} />
        </Box>
      </Box>
    </Box>
  );
};

export default GridCard;
