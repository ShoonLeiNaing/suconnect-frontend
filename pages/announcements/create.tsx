import { useState } from "react";
import dynamic from "next/dynamic";
import Layout from "../../components/Layout";
import StepperComponent from "../../components/Stepper/Stepper";
import { navigation } from "../../data/navigationData";
import TextEditor from "../../components/TextEditor";

const AnnouncementDetailForm = dynamic(
  import("../../components/AnnouncementCreateForm/AnnouncementDetailForm"),
  { ssr: false }
);

const AnnouncementCreate = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < 2) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const steps = [
    {
      title: "Announcement Details",
      component: (
        <AnnouncementDetailForm
          {...{
            handleNext,
          }}
        />
      ),
    },
    {
      title: "Select Accounts",
      component: (
        <AnnouncementDetailForm
          {...{
            handleNext,
          }}
        />
      ),
    },
    {
      title: "Choose Platforms",
      component: (
        <AnnouncementDetailForm
          {...{
            handleNext,
          }}
        />
      ),
    },
  ];

  const createAnnouncementHandler = () => {};
  return (
    <Layout showSideNav={false} hiddenFooter data={navigation}>
      <StepperComponent
        {...{
          steps,
          activeStep,
          setActiveStep,
          width: "400px",
          marginY: "20px",
        }}
      />
    </Layout>
  );
};

export default AnnouncementCreate;
