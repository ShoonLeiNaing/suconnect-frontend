import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchInput = () => {
  return (
    <InputGroup maxW="350px">
      <InputLeftElement mt={1}>
        <BiSearchAlt2 size="20px" />
      </InputLeftElement>
      <Input
        fontSize="15px"
        borderWidth="0"
        placeholder="Search the web"
        bgColor="#F5F5F5"
        borderRadius="10px"
        h="45px"
      />
    </InputGroup>
  );
};

export default SearchInput;
