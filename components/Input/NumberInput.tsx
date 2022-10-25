import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./input.module.css";
import { colors } from "../../data/constant";

interface NumberInputProps {
  value: number;
  setValue: any;
  min?: number;
  max?: number;
}

const NumberInput: FunctionComponent<NumberInputProps> = ({
  value,
  setValue,
  min,
  max,
}) => {
  return (
    <Box
      color={colors.grey.grey2}
      maxWidth="55px"
      height="50px"
      borderRadius="15px"
      border="1px solid grey"
      className="flex justify-center"
    >
      <input
        className="bg-transparent w-[60px] p-2"
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Box>
  );
};

NumberInput.defaultProps = {
  min: 0,
  max: 12,
};

export default NumberInput;
