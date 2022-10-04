import { useState } from "react";
import { Box, Typography } from "@mui/material";
import CampusForm from "../../components/Campus/CampusForm";
import VenueForm from "../../components/Campus/VenueForm";
import Layout from "../../components/Layout";
import StepperComponent from "../../components/Stepper/Stepper";
import { navigation } from "../../data/navigationData";
import { colors } from "../../data/constant";
import BreadcrumbsComponent from "../../components/Breadcrumbs";

const breadCrumbsData = [
  {
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    name: "My Profile",
    link: "/profile",
  },
];

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
      <Box className="mx-12">
        <Box className="flex justify-between my-2">
          <BreadcrumbsComponent
            currentPage="Url 3"
            previousPages={breadCrumbsData}
          />
          <Box className="flex items-center">
            <StepperComponent
              {...{
                steps,
                activeStep,
                setActiveStep,
                width: "250px",
                divided: true,
                showStatus: true,
                marginY: "20px",
              }}
            />
          </Box>
          <Box
            className="flex  items-center my-4 px-4 text-white cursor-pointer rounded-lg"
            bgcolor={colors.primaryColors.lightblue.lightblue1}
          >
            <Typography style={{ fontSize: "16px" }}>Save as campus</Typography>
          </Box>
        </Box>

        <StepperComponent
          {...{ steps, activeStep, setActiveStep, divided: true, showContent: true}}
        />
      </Box>
    </Layout>
  );
};

export default CreateCampus;
