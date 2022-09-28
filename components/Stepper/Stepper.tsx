import { useState, ReactNode, FunctionComponent } from "react";
import { Box, Stepper, Step, StepLabel, Button } from "@mui/material";
import SmallButton from "../Button/SmallButton";
import DialogComponent from "../SignUp/DialogComponent";
// const steps = [
//   "Register",
//   "Profile",
//   "Contact",
//   "Address",
//   "Bank Detail",
//   "Review",
// ];

interface StepperSteps {
  title: string;
  component: any;
}
interface IProps {
  steps: StepperSteps[];
  activeStep?: any;
  setActiveStep?: any;
  width?: string;
  marginY?: string;
  showStatus?: boolean;
  showContent?: boolean;
  divided?: boolean;
}

const StepperComponent: FunctionComponent<IProps> = ({
  steps,
  activeStep,
  setActiveStep,
  width,
  marginY,
  showStatus,
  divided,
  showContent,
}) => {
  // const [activeStep, setActiveStep] = useState(0);

  const stepperStatus = () => {
    return (
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: ReactNode;
          } = {};

          return (
            <Step key={step.title} {...stepProps}>
              <StepLabel {...labelProps}>
                {activeStep === index && step.title}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    );
  };

  return (
    <Box>
      {/* {activeStep === 0 || activeStep === 2 || activeStep === 3 ? (
        <Box className="w-[40%] absolute top-8 right-16">{stepperStatus()}</Box>
      ) : (
        <Box className="w-[40%] absolute top-8 left-16">{stepperStatus()}</Box>
      )} */}

      {divided ? (
        <>
          {showStatus && (
            <Box width={width} margin="auto" my={marginY}>
              {stepperStatus()}
            </Box>
          )}
          {showContent && (
            <Box width="100%" height="100%">
              {steps[activeStep]?.component}
            </Box>
          )}
        </>
      ) : (
        <>
          <Box width={width} margin="auto" my={marginY}>
            {stepperStatus()}
          </Box>
          <Box width="100%" height="100%">
            {steps[activeStep]?.component}
          </Box>
        </>
      )}
    </Box>
  );
};

export default StepperComponent;
