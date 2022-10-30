import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";
import styles from "./input.module.css";

interface IProps {
  id?: string;
  name?: string;
  value: string;
  onChangeHandler?: any;
  isTextArea?: boolean;
  customWidth?: any;
  customHeight?: string;
  maxiWidth?: string;
  maxiHeight?: string;
  customType?: string;
  placeholder?: string;
  setValue?: any;
}

const DynamicInput: FunctionComponent<IProps> = ({
  id,
  name,
  value,
  isTextArea,
  maxiWidth,
  maxiHeight,
  customType,
  customWidth,
  customHeight,
  placeholder,
  onChangeHandler,
  setValue,
}) => {
  if (isTextArea) {
    return (
      <Box
        border="1px solid grey"
        borderRadius="15px"
        color={colors.black.black2}
        maxWidth={maxiWidth}
        height={maxiHeight}
      >
        <textarea
          value={value}
          onChange={onChangeHandler}
          placeholder={placeholder}
          style={{
            height: maxiHeight,
            width: customWidth || "100%",
            maxWidth: maxiWidth,
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
      border="1px solid grey"
      borderRadius="15px"
    >
      <input
        type={customType}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        style={{
          height: customHeight,
          width: customWidth || maxiWidth,
        }}
        id={id}
        name={name}
      />
    </Box>
  );
};

DynamicInput.defaultProps = {
  isTextArea: false,
  customWidth: { lg: "350px", sm: "350px" },
  customType: "text",
  maxiHeight: "120px",
  customHeight: "55px",
};

export default DynamicInput;
