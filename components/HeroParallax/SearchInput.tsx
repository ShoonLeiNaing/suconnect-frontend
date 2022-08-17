import { Box } from "@mui/material";
import { BiSearchAlt2 } from "react-icons/bi";
import styles from "./heroParallax.module.css";

const SearchInput = () => {
  return (
    // <InputGroup maxW="350px">
    //   <InputLeftElement mt={1}>
    //     <BiSearchAlt2 size="20px" />
    //   </InputLeftElement>
    //   <Input
    //     fontSize="15px"
    //     borderWidth="0"
    //     placeholder="Search the web"
    //     bgColor="#F5F5F5"
    //     borderRadius="10px"
    //     h="45px"
    //   />
    // </InputGroup>

    <Box
      px={2}
      width="300px"
      display="flex"
      alignItems="center"
      bgcolor="#f6f9fe"
      sx={{ borderRadius: "15px" }}
    >
      <BiSearchAlt2 fontSize="22px" color="black" />
      <input placeholder="Search the web" className={styles.search_input} />
    </Box>
  );
};

export default SearchInput;
