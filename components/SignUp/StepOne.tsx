import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FunctionComponent, useState } from "react";
import SmallButton from "../Button/SmallButton";
import DynamicInput from "../Input/DynamicInput";
import InputLabel from "../Input/InputLabel";
import PasswordInput from "../ResetPasswordForm/PasswordInput";

const StepOne: FunctionComponent = () => {
  const [mail, setMail] = useState("");

  return (
    <Box className="h-screen flex items-center">
      <Box className="flex justify-center items-center bg-[#F6F9FE] h-screen w-1/2">
        <Image src="/images/LoginScreen.svg" height={500} width={500} />
      </Box>
      <Box className="flex flex-col justify-center items-center bg-white w-1/2 px-24">
        <Typography className="text-2xl text-[#737373] font-semibold w-full mb-8">
          Let&lsquo;s get started registeration...
        </Typography>
        <Box className="w-full flex flex-col border py-8 px-10 rounded-xl">
          <Box className="mb-6">
            <InputLabel label="Mail" isRequired />
            <DynamicInput
              value={mail}
              setValue={setMail}
              maxiWidth="500px"
              placeholder="example@gmail.com"
            />
          </Box>
          <Box>
            <InputLabel label="Password" isRequired />
            <PasswordInput />
          </Box>
          <Box>
            <InputLabel label="Confirm Password" isRequired />
            <PasswordInput />
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

export default StepOne;
