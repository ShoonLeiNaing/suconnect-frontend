import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";
import styles from "./input.module.css";

interface IProps {
  value: string;
  setValue: any;
  isTextArea?: boolean;
}

const DynamicInput: FunctionComponent<IProps> = ({
  value,
  isTextArea,
  setValue,
}) => {
  if (isTextArea) {
    return (
      <Box
        color={colors.black.black2}
        maxWidth="350px"
        height="120px"
        borderRadius="15px"
        border="1px solid grey"
      >
        <textarea
          className={styles.textarea}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Box>
    );
  }
  return (
    <Box
      color={colors.black.black2}
      maxWidth="350px"
      height="55px"
      paddingX={2}
      borderRadius="15px"
      border="1px solid grey"
    >
      <input
        className={styles.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Box>
  );
};

DynamicInput.defaultProps = {
  isTextArea: false,
};

export default DynamicInput;
