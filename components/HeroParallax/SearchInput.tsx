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
  customWidth?: string;
  customHeight?: string;
}

const SearchInput: FunctionComponent<IProps> = ({
  outline,
  placeholderText,
  searchValue,
  setSearchValue,
  searchHandler,
  customWidth,
  customHeight,
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
      width={customWidth || "300px"}
      // display="flex"
      height={customHeight && customHeight}
      alignItems="center"
      bgcolor={outline ? "transparent" : "#f6f9fe"}
      sx={{
        borderRadius: "15px",
        border: outline ? `1px solid ${colors.grey.grey1}` : "none",
        display: {xs: 'none', sm: 'flex'}
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
