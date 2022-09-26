import { Box, Typography } from "@mui/material";
import { useState } from "react";
import BreadcrumbsComponent from "../../components/Breadcrumbs";
import StepperOne from "../../components/CreateCourseForm/StepperOne";
import Layout from "../../components/Layout";
import StepperComponent from "../../components/Stepper/Stepper";
import { colors } from "../../data/constant";
import { navigation } from "../../data/navigationData";

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

const CreateCourseForm = () => {
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
      title: "Create course",
      component: (
        <StepperOne
          {...{
            handleNext,
          }}
        />
      ),
    },
    {
      title: "Step 2: Assign lecture",
      component: "",
    },
    {
      title: "Step 3:",
      component: "",
    },
    {
      title: "Step 4:",
      component: "",
    },
    {
      title: "Step 5:",
      component: "",
    },
    {
      title: "Step 6:",
      component: "",
    },
    {
      title: "Step 7:",
      component: "",
    },
    {
      title: "Step 8:",
      component: "",
    },
    {
      title: "Step 9:",
      component: "",
    },
    {
      title: "Step 10:",
      component: "",
    },
  ];

  return (
    <Layout showSideNav={false} hiddenFooter data={navigation}>
      <Box className="mx-12">
        <Box className="flex justify-between my-2">
          <BreadcrumbsComponent
            currentPage="Schedule"
            previousPages={breadCrumbsData}
          />
          <Box className="flex items-center justify-center " sx={{ flex: 1 }}>
            <StepperComponent
              {...{
                steps,
                activeStep,
                setActiveStep,
                width: "100%",
                divided: true,
                showStatus: true,
              }}
            />
          </Box>
          <Box
            className="flex  items-center my-4 px-4 text-white cursor-pointer rounded-lg"
            bgcolor={colors.primaryColors.lightblue.lightblue1}
          >
            <Typography style={{ fontSize: "16px" }}>Save as draft</Typography>
          </Box>
        </Box>

        <StepperComponent
          {...{ steps, activeStep, setActiveStep, divided: true, showContent: true}}
        />
      </Box>
    </Layout>
  );
};

export default CreateCourseForm;
