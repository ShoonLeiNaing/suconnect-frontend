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

  const steps = [
    {
      title: "Step 1: Create course",
      component: "",
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
    }
  ]

  return (
    <Layout showSideNav={false} data={navigation}>
      <Box color="black" className="container" px={7}>
        <Box className="flex justify-between mb-8 mt-4">
          <BreadcrumbsComponent
            currentPage="Schedule"
            previousPages={breadCrumbsData}
          />
          <Box className="flex items-center">
          <StepperComponent
            {...{ steps, activeStep, setActiveStep, width: "100%" }}
          />
          </Box>
          <Box
            className="flex items-center my-3 py-2 px-4 text-white cursor-pointer rounded-lg"
            bgcolor={colors.primaryColors.lightblue.lightblue1}
          >
            <Typography style={{ fontSize: "16px" }}>Save as draft</Typography>
          </Box>
        </Box>
        <StepperOne />
      </Box>
    </Layout>
  );
};

export default CreateCourseForm;
