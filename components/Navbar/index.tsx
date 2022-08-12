import { Box, Image, Select, Text } from "@chakra-ui/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { colors } from "../../data/constant";
import Button from "./Button";

const Navbar = () => {
  return (
    <Box
      px={20}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      h="70px"
      w="100%"
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
        <Select
          icon={<IoMdArrowDropdown />}
          w="65px"
          h="35px"
          color="white"
          bgColor={colors.primaryColors.lightblue.lightblue1}
          borderRadius="12px"
          size="md"
          ml={6}
          fontSize="14px"
          //   _focus={{ outline: "none" }}
        >
          <option>EN</option>
          <option>MY</option>
        </Select>
      </Box>
    </Box>
  );
};

export default Navbar;
