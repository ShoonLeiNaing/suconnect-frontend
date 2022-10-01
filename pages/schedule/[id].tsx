import { Box, Typography } from "@mui/material";
import { useState } from "react";
import BreadcrumbsComponent from "../../components/Breadcrumbs";
import SmallButton from "../../components/Button/SmallButton";
import AddLectureForm from "../../components/CreateCourseForm/AddLecture/AddLectureForm";
import AssignInstructorForm from "../../components/CreateCourseForm/AssignInstructorForm/AssignInstructorForm";
import StepperOne from "../../components/CreateCourseForm/CourseDetailForm/CreateCourseForm";
import Layout from "../../components/Layout";
import StepperComponent from "../../components/Stepper/Stepper";
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
      title: "Assign lecture",
      component: (
        <AddLectureForm
          {...{
            handleNext,
            handleBack,
          }}
        />
      ),
    },
    {
      title: "Assign lecturer",
      component: (
        <AssignInstructorForm
          {...{
            handleNext,
            handleBack,
          }}
        />
      ),
    },
    {
      title: "Step 4:",
      component: {},
    },
    {
      title: "Step 5:",
      component: (
        <StepperOne
          {...{
            handleNext,
            handleBack,
          }}
        />
      ),
    },
    {
      title: "Step 6:",
      component: (
        <AssignInstructorForm
          {...{
            handleNext,
            handleBack,
          }}
        />
      ),
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
      <Box className="mx-8">
        <Box className="flex justify-between py-4">
          <BreadcrumbsComponent
            currentPage="Schedule"
            previousPages={breadCrumbsData}
            customMarginY="0px"
          />
          <Box className="flex items-center">
            <StepperComponent
              {...{
                steps,
                activeStep,
                setActiveStep,
                width: "700px",
                divided: true,
                showStatus: true,
              }}
            />
          </Box>
          {/* <Box
            className="flex  items-center my-4 px-4 text-white cursor-pointer rounded-lg"
            bgcolor={colors.primaryColors.lightblue.lightblue1}
          >
            <Typography style={{ fontSize: "16px" }}></Typography>
          </Box> */}
          <SmallButton text="Save as draft" />
        </Box>

        <StepperComponent
          {...{
            steps,
            activeStep,
            setActiveStep,
            divided: true,
            showContent: true,
          }}
        />
      </Box>
    </Layout>
  );
};

export default CreateCourseForm;
