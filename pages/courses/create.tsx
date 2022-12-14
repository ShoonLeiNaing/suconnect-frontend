import { Box, Typography } from "@mui/material";
import { useState } from "react";
import dynamic from "next/dynamic";
import { navigation } from "../../data/navigationData";

const Layout = dynamic(import("../../components/Layout"), { ssr: false });
const BreadcrumbsComponent = dynamic(import("../../components/Breadcrumbs"), {
  ssr: false,
});
const SmallButton = dynamic(import("../../components/Button/SmallButton"), {
  ssr: false,
});
const CreateCourseDetailForm = dynamic(
  import("../../components/CreateCourseForm/CourseDetailForm/CreateCourseForm"),
  {
    ssr: false,
  }
);

const AssignStudentForm = dynamic(
  import("../../components/CreateCourseForm/AssignStudent/AssignStudentForm"),
  {
    ssr: false,
  }
);

const StepperComponent = dynamic(import("../../components/Stepper/Stepper"), {
  ssr: false,
});
const AddLectureForm = dynamic(
  import("../../components/CreateCourseForm/AddLecture/AddLectureForm"),
  {
    ssr: false,
  }
);
const AssignInstructorForm = dynamic(
  import(
    "../../components/CreateCourseForm/AssignInstructorForm/AssignInstructorForm"
  ),
  {
    ssr: false,
  }
);
const AssignStaffForm = dynamic(
  import("../../components/CreateCourseForm/AssignStaff/AssignStaffForm"),
  {
    ssr: false,
  }
);

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
    if (activeStep < 10) {
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
        <CreateCourseDetailForm
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
            type: "lecture",
            classification: 10,
          }}
        />
      ),
    },
    {
      title: "Assign holidays",
      component: (
        <AddLectureForm
          {...{
            handleNext,
            handleBack,
            type: "holiday",
            classification: 9,
          }}
        />
      ),
    },
    {
      title: "Assign exams",
      component: (
        <AddLectureForm
          {...{
            handleNext,
            handleBack,
            type: "exam",
            classification: 8,
          }}
        />
      ),
    },

    {
      title: "Assign other events",
      component: (
        <AddLectureForm
          {...{
            handleNext,
            handleBack,
            type: "others",
            classification: 7,
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
      title: "Assign students",
      component: (
        <AssignStudentForm
          {...{
            handleNext,
            handleBack,
          }}
        />
      ),
    },
    {
      title: "Assign staff",
      component: (
        <AssignStaffForm
          {...{
            handleNext,
            handleBack,
          }}
        />
      ),
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
