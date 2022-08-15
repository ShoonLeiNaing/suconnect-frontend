import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ImArrowLeft2 } from "react-icons/im";
import { colors } from "../../data/constant";

const PreviousPage = () => {
  const router = useRouter();
  return (
    <Box
      cursor="pointer"
      display="flex"
      alignItems="center"
      color={colors.primaryColors.lightblue.lightblue1}
      onClick={() => router.back()}
    >
      <ImArrowLeft2 />
      <Text mx={2} fontSize="14px">
        Back
      </Text>
    </Box>
  );
};

export default PreviousPage;
