import { useState } from "react";
import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { navigation } from "../../data/navigationData";
import { colors } from "../../data/constant";

const Layout = dynamic(import("../../components/Layout"), { ssr: false });
const CampusForm = dynamic(import("../../components/Campus/CampusForm"), {
  ssr: false,
});
const VenuePage = dynamic(import("../../components/Venue"), {
  ssr: false,
});

const BreadcrumbsComponent = dynamic(import("../../components/Breadcrumbs"), {
  ssr: false,
});
const StepperComponent = dynamic(import("../../components/Stepper/Stepper"), {
  ssr: false,
});

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
      title: "Create Venue",
      component: (
        <VenuePage
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
          {/* <Box className="flex items-center">
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
          </Box> */}
          
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

export default CreateCampus;
