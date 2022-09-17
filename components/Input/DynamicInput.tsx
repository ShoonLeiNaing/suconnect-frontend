import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";
import styles from "./input.module.css";

interface IProps {
  value: string;
  setValue: any;
  isTextArea?: boolean;
  maxWidth?: string;
  customType?:string;
  placeholder?:string;
}

const DynamicInput: FunctionComponent<IProps> = ({
  value,
  isTextArea,
  setValue,
  maxWidth,
  customType,
  placeholder,
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
      maxWidth={maxWidth}
      height="55px"
      paddingX={2}
      borderRadius="15px"
      border="1px solid grey"
    >
      <input
        type={customType}
        className={styles.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </Box>
  );
};

DynamicInput.defaultProps = {
  isTextArea: false,
  maxWidth: "350px",
  customType: "text",
};

export default DynamicInput;
