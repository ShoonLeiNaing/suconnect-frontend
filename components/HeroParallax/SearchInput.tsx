import { Box } from "@mui/material";
import _ from "lodash";
import { FunctionComponent } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { colors } from "../../data/constant";
import styles from "./heroParallax.module.css";

interface IProps {
  outline?: boolean;
  placeholderText?: string;
  searchValue?: string;
  setSearchValue?: any;
  searchHandler?: any;
}

const SearchInput: FunctionComponent<IProps> = ({
  outline,
  placeholderText,
  searchValue,
  setSearchValue,
  searchHandler,
}) => {
  const changeInputHandler = (e: any) => {
    setSearchValue(e.target.value);
  };
  const debounceSearch = _.debounce((pageNum: number) => {
    // setPage(pageNum);
  }, 200);
  return (
    <Box
      px={2}
      width="300px"
      display="flex"
      alignItems="center"
      bgcolor={outline ? "transparent" : "#f6f9fe"}
      sx={{
        borderRadius: "15px",
        border: outline ? `1px solid ${colors.grey.grey1}` : "none",
      }}
    >
      <BiSearchAlt2 fontSize="22px" color={colors.grey.grey2} />
      <input
        value={searchValue}
        placeholder={placeholderText}
        className={styles.search_input}
        onChange={(e) => changeInputHandler(e)}
      />
    </Box>
  );
};

SearchInput.defaultProps = {
  outline: false,
  placeholderText: "Search the web",
};

export default SearchInput;
