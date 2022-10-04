import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";
import styles from "./input.module.css";

interface IProps {
  value: string;
  setValue: any;
  isTextArea?: boolean;
  customWidth?: string;
  customHeight?: string;
  maxiWidth?: string;
  maxiHeight?: string;
  customType?: string;
  placeholder?: string;
  customBorderRadius?: string;
  bgColor?: string;
}

const DynamicInput: FunctionComponent<IProps> = ({
  value,
  isTextArea,
  setValue,
  maxiWidth,
  maxiHeight,
  customType,
  customWidth,
  customHeight,
  placeholder,
  customBorderRadius,
  bgColor,
}) => {
  if (isTextArea) {
    return (
      <Box
        color={colors.black.black2}
        maxWidth={maxiWidth}
        height={maxiHeight}
        // borderRadius={customBorderRadius}
        // border="1px solid grey"
      >
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          style={{
            height: maxiHeight,
            width: customWidth,
            maxWidth: maxiWidth,
            border: "1px solid grey",
            borderRadius: customBorderRadius,
            backgroundColor: bgColor
          }}
          className="bg-transparent py-[10px] px-[15px] text-[15px]"
        />
      </Box>
    );
  }
  return (
    <Box
      color={colors.black.black2}
      maxWidth={maxiWidth}
      height={customHeight}
      paddingX={2}
      borderRadius={customBorderRadius}
      border="1px solid grey"
    >
      <input
        type={customType}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          height: customHeight,
          width: customWidth || maxiWidth || "350px",
        }}
      />
    </Box>
  );
};

DynamicInput.defaultProps = {
  isTextArea: false,
  customWidth: "350px",
  customType: "text",
  maxiHeight: "120px",
  customBorderRadius: "15px",
  customHeight: "55px",
};

export default DynamicInput;
