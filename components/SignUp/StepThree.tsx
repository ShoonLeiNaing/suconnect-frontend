import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FunctionComponent, useState } from "react";
import SmallButton from "../Button/SmallButton";
import DynamicInput from "../Input/DynamicInput";
import InputLabel from "../Input/InputLabel";
import PhoneNumberInput from "../Input/PhoneNumberInput";
import PasswordInput from "../ResetPasswordForm/PasswordInput";

const StepThree: FunctionComponent = () => {
  const [mail, setMail] = useState("");

  return (
    <Box className="h-screen flex items-center">
      <Box className="flex justify-center items-center bg-[#F6F9FE] h-screen w-1/2">
        <Image src="/images/LoginScreen.svg" height={500} width={500} />
      </Box>
      <Box className="flex flex-col justify-center items-center bg-white w-1/2 px-24">
        <Typography className="text-2xl text-[#737373] font-semibold w-full mb-8">
          How can we reach you...?
        </Typography>
        <Box className="w-full flex flex-col border py-8 px-10 rounded-xl">
          <Box className="mb-6">
            <InputLabel label="Secondary Mail" />
            <DynamicInput
              value={mail}
              setValue={setMail}
              maxiWidth="500px"
              placeholder="example@gmail.com"
            />
          </Box>
          <Box mb={3}>
            <InputLabel label="Primary Contact" isRequired />
            <PhoneNumberInput width="100%" />
          </Box>
          <Box>
            <InputLabel label="Secondary Contact" isOptional />
            <PhoneNumberInput width="100%" />
          </Box>
        </Box>
        <Box className="w-full flex justify-end items-center mt-8">
          <SmallButton
            text="Back"
            customHeight="40px"
            bgColor="white"
            color="#737373"
            customMarginX="1rem"
            customFontSize="15px"
            customBorder="1px solid #BBBBBB"
          />
          <SmallButton text="Next" customHeight="40px" customFontSize="15px" />
        </Box>
      </Box>
    </Box>
  );
};

export default StepThree;
