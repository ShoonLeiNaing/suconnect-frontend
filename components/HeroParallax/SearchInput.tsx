import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { colors } from "../../data/constant";
import styles from "./heroParallax.module.css";

interface IProps {
  outline?: boolean;
  placeholderText?: string;
}

const SearchInput: FunctionComponent<IProps> = ({
  outline,
  placeholderText,
}) => {
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
      <input placeholder={placeholderText} className={styles.search_input} />
    </Box>
  );
};

SearchInput.defaultProps = {
  outline: false,
  placeholderText: "Search the web",
};

export default SearchInput;
