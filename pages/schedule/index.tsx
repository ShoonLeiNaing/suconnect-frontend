import { Box, Typography } from "@mui/material";
import BreadcrumbsComponent from "../../components/Breadcrumbs";
import StepperOne from "../../components/CreateCourseForm/StepperOne";
import Layout from "../../components/Layout";
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

const Schedule = () => {
  return (
    <Layout showSideNav={false} data={navigation}>
      <Box color="black" className="container" px={7}>
        <Box className="flex justify-between mb-8 mt-4">
          <BreadcrumbsComponent
            currentPage="Schedule"
            previousPages={breadCrumbsData}
          />
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

export default Schedule;
