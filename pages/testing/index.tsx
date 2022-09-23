import { useState } from "react";
import StepFive from "../../components/SignUp/StepFive";
import StepFour from "../../components/SignUp/StepFour";
import StepOne from "../../components/SignUp/StepOne";
import StepperComponent from "../../components/Stepper/Stepper";
import StepSix from "../../components/SignUp/StepSix";
import StepThree from "../../components/SignUp/StepThree";
import StepTwo from "../../components/SignUp/StepTwo";

const testing = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [popUp, setPopUp] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      activeStep < 5 ? prevActiveStep + 1 : prevActiveStep
    );
    if (activeStep === 5) setPopUp(true);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const steps = [
    {
      title: "Register",
      component: <StepOne {...{ handleNext, handleBack }} />,
    },
    {
      title: "Profile",
      component: <StepTwo />,
    },
    {
      title: "Contact",
      component: <StepThree />,
    },
    {
      title: "Address",
      component: <StepFour />,
    },
    {
      title: "Bank Detail",
      component: <StepFive />,
    },
    {
      title: "Review",
      component: <StepSix />,
    },
  ];

  return <StepperComponent {...{ steps }} />;
};

export default testing;
