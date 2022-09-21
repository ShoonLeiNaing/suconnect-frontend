import { FunctionComponent } from "react";
import { Box, InputBase, MenuItem, Select, styled } from "@mui/material";
import styles from "./input.module.css";
import { colors } from "../../data/constant";

interface SelectInputProps {
  value: string;
  setValue: any;
  maxWidth?: string;
  options?: any;
  onChange?: any;
}

const BootstrapInput = styled(InputBase)(() => ({
  "& .MuiInputBase-input": {
    paddingLeft: "16px",
  },
}));

const SelectInput: FunctionComponent<SelectInputProps> = ({
  value,
  setValue,
  maxWidth,
  options,
  onChange,
}) => {
  return (
    <Box
      color={colors.grey.grey2}
      maxWidth={maxWidth}
      height="55px"
      borderRadius="15px"
      border="none"
      //   className={styles.select_box}
    >
      <Select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        input={<BootstrapInput />}
        className={styles.select_box}
      >
        {options?.map((opt: any) => (
          <MenuItem value={opt}>{opt}</MenuItem>
        ))}
      </Select>

      {/* <select name="countries" id="countries">
        <option>Myanmar</option>
        <option>Singapore</option>
        <option>Indonesia</option>
      </select> */}
    </Box>
  );
};

SelectInput.defaultProps = {
  maxWidth: "350px",
};

export default SelectInput;
