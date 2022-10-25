import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";
import styles from "./input.module.css";

interface IProps {
  id?: string;
  name?: string;
  value: string;
  setValue?: any;
  onChangeHandler?: any;
  isTextArea?: boolean;
  customWidth?: any;
  customHeight?: string;
  maxiWidth?: string;
  maxiHeight?: string;
  customType?: string;
  placeholder?: string;
}

const DynamicInput: FunctionComponent<IProps> = ({
  id,
  name,
  value,
  isTextArea,
  setValue,
  maxiWidth,
  maxiHeight,
  customType,
  customWidth,
  customHeight,
  placeholder,
  onChangeHandler,
}) => {
  if (isTextArea) {
    return (
      <Box color={colors.black.black2} maxWidth={maxiWidth} height={maxiHeight}>
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          style={{
            height: maxiHeight,
            width: customWidth,
            maxWidth: maxiWidth,
            border: "1px solid grey",
            borderRadius: "15px",
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
        // onChange={(e) => setValue(e.target.value)}
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
