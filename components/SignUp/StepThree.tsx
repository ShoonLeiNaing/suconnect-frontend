import { Box, Typography, Button } from "@mui/material";
import { FunctionComponent, useState } from "react";
import DynamicInput from "../Input/DynamicInput";
import InputLabel from "../Input/InputLabel";
import PhoneNumberInput from "../Input/PhoneNumberInput";
import SmallButton from "../Button/SmallButton";

interface IProps {
  handleNext?: any;
  handleBack?: any;
}

const StepThree: FunctionComponent<IProps> = ({ handleNext, handleBack }) => {
  const [mail, setMail] = useState("");

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      // maxWidth={{ xs: "360px" }}
      width={{ lg: "500px", md: "430px", sm: "370px", xs: "360px" }}
    >
      {" "}
      <Box maxWidth="500px" className="w-full">
        <Box className="w-full mb-8">
          <img
            alt="logo"
            className="hidden md:block -ml-4"
            style={{ height: "50px" }}
            src="/images/logo.svg"
          />
        </Box>
        <Typography className="text-[1.15rem] -mt-10 md:mt-0 sm:text-[1.3rem] md:text-xl text-[#737373] font-semibold w-full mb-8">
          How can we reach you...?
        </Typography>
        <Box className="w-full flex flex-col border px-6 py-6 sm:py-7 md:py-8  rounded-xl">
          <Box className="mb-6">
            <InputLabel label="Secondary Mail" />
            <DynamicInput
              value={mail}
              setValue={setMail}
              maxiWidth="500px"
              customWidth="100%"
              placeholder="example@gmail.com"
            />
          </Box>
          <Box mb={3}>
            <InputLabel label="Primary Contact" isRequired />
            <PhoneNumberInput width="500px" />
          </Box>
          <Box>
            <InputLabel label="Secondary Contact" isOptional />
            <PhoneNumberInput width="500px" />
          </Box>
        </Box>
        <Box className="flex justify-end items-center mt-6">
          <Button
            onClick={handleBack}
            // disabled={activeStep === 0}
            className="mx-4 text-[#737373] bg-white capitalize"
            sx={{
              fontSize: "15px",
              border: "1px solid #BBBBBB",
              height: "40px",
              borderRadius: "10px",
            }}
          >
            Back
          </Button>

          <SmallButton
            onClickHandler={handleNext}
            text="Next"
            customHeight="40px"
            customFontSize="15px"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default StepThree;
