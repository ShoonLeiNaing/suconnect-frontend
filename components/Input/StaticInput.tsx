import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { RiLock2Fill } from "react-icons/ri";
import { colors } from "../../data/constant";
import styles from "./input.module.css";

interface IProps {
  isLocked?: boolean;
  value: string | number | null;
  isTextArea?: boolean;
  showLock?: boolean;
  maxWidth?: any;
}

const StaticInput: FunctionComponent<IProps> = ({
  isLocked,
  value,
  isTextArea,
  showLock,
  maxWidth,
}) => {
  if (isTextArea) {
    return (
      <Box
        sx={{ backgroundColor: colors.white.white2 }}
        color={colors.black.black2}
        maxWidth="350px"
        height="150px"
        borderRadius="15px"
        display="flex"
      >
        <textarea className={styles.textarea} value={value} readOnly />
        {showLock && (
          <RiLock2Fill
            style={{
              color: colors.grey.grey1,
              marginRight: "15px",
              marginTop: "10px",
            }}
            fontSize="24px"
          />
        )}
      </Box>
    );
  }
  return (
    <Box
      sx={{ backgroundColor: colors.white.white2 }}
      color={colors.black.black2}
      display="flex"
      //   sx={{ backgroundColor: "#EAF2FF" }}
      maxWidth={maxWidth}
      height="55px"
      paddingX={2}
      borderRadius="15px"
      alignItems="center"
    >
      <input className={styles.input} defaultValue={value} readOnly />
      {showLock && (
        <RiLock2Fill style={{ color: colors.grey.grey1 }} fontSize="24px" />
      )}
    </Box>
  );
};

StaticInput.defaultProps = {
  isTextArea: false,
  showLock: false,
  maxWidth: { lg: "350px", md: "350px", base: "100%" },
};

export default StaticInput;
