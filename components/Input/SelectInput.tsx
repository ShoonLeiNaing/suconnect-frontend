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
      sx={{ backgroundColor: colors.white.white2 }}
      //   className={styles.select_box}
    >
      {/* <Select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        input={<BootstrapInput />}
        className={styles.select_box}
        label="hehe"
      >
        {options?.map((opt: any) => (
          <MenuItem value={opt}>{opt}</MenuItem>
        ))}
      </Select> */}

      <Select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        input={<BootstrapInput />}
        sx={{
          width: "98%",
          height: "55px",
          fontSize: "16px",
          color: "#737373",
        }}
      >
        <MenuItem className="hidden" value={value}>
          {value}
        </MenuItem>
        {options?.map((opt: any) => (
          <MenuItem sx={{ fontSize: "15px" }} value={opt}>
            {opt}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

SelectInput.defaultProps = {
  maxWidth: "100%",
};

export default SelectInput;
