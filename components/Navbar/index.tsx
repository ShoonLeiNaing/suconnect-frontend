import { Box, Image, Text } from "@chakra-ui/react";
import { colors } from "../../data/constant";
import Button from "./Button";

const Navbar = () => {
  return (
    <Box
      position="sticky"
      top="0"
      px={20}
      bgColor="white"
      display="flex"
      alignItems="center"
      boxShadow="md"
      justifyContent="space-between"
      h="70px"
      w="100%"
      zIndex={100}
    >
      <Image h="70%" src="/images/logo.png" />
      <Box
        flex="1"
        cursor="pointer"
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Text
          fontWeight={600}
          color={colors.primaryColors.lightblue.lightblue1}
          mr={6}
        >
          Sign in
        </Text>
        <Button />
        <select className="select">
          <option>Eng</option>
          <option>မြန်မာ</option>
        </select>
      </Box>
    </Box>
  );
};

export default Navbar;
