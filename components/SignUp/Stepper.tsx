import { useState, ReactNode, FunctionComponent } from "react";
import { Box, Stepper, Step, StepLabel, Button } from "@mui/material";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
import SmallButton from "../Button/SmallButton";

const steps = [
  "Register",
  "Profile",
  "Contact",
  "Address",
  "Bank Detail",
  "Review",
];

const StepperComponent: FunctionComponent = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      activeStep < 5 ? prevActiveStep + 1 : prevActiveStep
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const stepperStatus = () => {
    return (
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: ReactNode;
          } = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>
                {activeStep === index && label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    );
  };

  const switchButtons = () => {
    return (
      <>
        <Button
          onClick={handleBack}
          disabled={activeStep === 0}
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
          text={activeStep === steps.length - 1 ? "Finish" : "Next"}
          customHeight="40px"
          customFontSize="15px"
        />
      </>
    );
  };

  return (
    <Box className="w-full relative h-screen flex items-center">
      {activeStep === 0 || activeStep === 2 || activeStep === 3 ? (
        <Box className="w-[40%] absolute top-8 right-16">{stepperStatus()}</Box>
      ) : (
        <Box className="w-[40%] absolute top-8 left-16">{stepperStatus()}</Box>
      )}
      <Box className="w-full ">
        <>
          {activeStep === 0 && <StepOne />}
          {activeStep === 1 && <StepTwo />}
          {activeStep === 2 && <StepThree />}
          {activeStep === 3 && <StepFour />}
          {activeStep === 4 && <StepFive />}
          {activeStep === 5 && <StepSix />}
        </>

        {activeStep === 0 || activeStep === 2 || activeStep === 3 ? (
          <Box className="absolute bottom-28 right-24 flex justify-end items-center mt-8">
            {switchButtons()}
          </Box>
        ) : (
          <Box className="absolute bottom-20 left-[28.5rem] flex justify-end items-center mt-8">
            {switchButtons()}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default StepperComponent;
