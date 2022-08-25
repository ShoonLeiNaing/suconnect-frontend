import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";
import styles from "./profile.module.css";

interface IProps {
  name: string;
  currentPage: string;
  tag?: string;
}

const NameTag: FunctionComponent<IProps> = ({ name, currentPage, tag }) => {
  return (
    <Box display="flex" alignItems="center" mt={2}>
      <img
        className={styles.nametag_image}
        src="/images/profile.jpeg"
        alt="nametag"
      />
      <Box mx={2} className="cursor">
        <Typography fontWeight={600} fontSize="18px">
          {name}{" "}
          <span style={{ color: colors.grey.grey2, margin: "0 5px" }}> / </span>
          {currentPage}
        </Typography>
        <Typography color={colors.grey.grey2} fontSize="14px">
          {tag}
        </Typography>
      </Box>
    </Box>
  );
};

NameTag.defaultProps = {
  tag: "Set up your presence and needs",
};

export default NameTag;
