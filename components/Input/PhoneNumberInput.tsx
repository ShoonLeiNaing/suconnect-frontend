import PhoneInput from "react-phone-number-input";
import { useState, FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./input.module.css";

interface IProps {
  width?: string;
}

const PhoneNumberInput: FunctionComponent<IProps> = ({ width }) => {
  const [value, setValue] = useState<any>();
  return (
    <Box
      //   color={colors.black.black2}
      maxWidth={width}
      height="55px"
      paddingX={2}
      borderRadius="15px"
      border="1px solid grey"
      className={styles.phone_number_input}
      sx={{ color: "#333333" }}
    >
      <PhoneInput
        international
        countryCallingCodeEditable={false}
        defaultCountry="MM"
        value={value}
        onChange={setValue}
      />
    </Box>
  );
};

PhoneNumberInput.defaultProps = {
  width: "350px",
};

export default PhoneNumberInput;
