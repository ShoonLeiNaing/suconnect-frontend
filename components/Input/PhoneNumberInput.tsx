import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { Box } from "@mui/material";
import styles from "./input.module.css";

const PhoneNumberInput = () => {
  const [value, setValue] = useState<any>();
  return (
    <Box
      //   color={colors.black.black2}
      maxWidth="350px"
      height="55px"
      paddingX={2}
      borderRadius="15px"
      border="1px solid grey"
      className={styles.phone_number_input}
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

export default PhoneNumberInput;
