import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";
import styles from "./input.module.css";

interface IProps {
  isLocked?: boolean;
  value: string;
  isTextArea?: boolean;
}

const InputComponent: FunctionComponent<IProps> = ({
  isLocked,
  value,
  isTextArea,
}) => {
  if (isTextArea) {
    return (
      <Box
        sx={{ backgroundColor: colors.white.white2 }}
        color={colors.black.black2}
        maxWidth="350px"
        height="120px"
        borderRadius="15px"
      >
        <textarea className={styles.textarea} value={value} />
      </Box>
    );
  }
  return (
    <Box
      sx={{ backgroundColor: colors.white.white2 }}
      color={colors.black.black2}
      //   sx={{ backgroundColor: "#EAF2FF" }}
      maxWidth="350px"
      height="55px"
      paddingX={2}
      borderRadius="15px"
    >
      <input className={styles.input} value={value} />
    </Box>
  );
};

InputComponent.defaultProps = {
  isTextArea: false,
};

export default InputComponent;
