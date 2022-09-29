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
      width="100%"
    >
      {" "}
      <Box maxWidth="500px">
      <Box className="w-full mb-8">
            <img
              alt="logo"
              className="-ml-4"
              style={{ height: "50px" }}
              src="/images/logo.svg"
            />
          </Box>
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
