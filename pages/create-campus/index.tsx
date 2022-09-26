import { useState } from "react";
import CampusForm from "../../components/Campus/CampusForm";
import VenueForm from "../../components/Campus/VenueForm";
import Layout from "../../components/Layout";
import StepperComponent from "../../components/Stepper/Stepper";
import { navigation } from "../../data/navigationData";

const CreateCampus = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < 2) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const createCampusHandler = () => {};

  const steps = [
    {
      title: "Create Campus",
      component: (
        <CampusForm
          {...{
            handleNext,
          }}
        />
      ),
    },
    {
      title: "Create Venue",
      component: (
        <VenueForm
          {...{
            handleBack,
            handleNext: createCampusHandler,
          }}
        />
      ),
    },
  ];

  return (
    <Layout showSideNav={false} hiddenFooter data={navigation}>
      <StepperComponent
        {...{
          steps,
          activeStep,
          setActiveStep,
          width: "250px",
          marginY: "20px",
        }}
      />
    </Layout>
  );
};

export default CreateCampus;
