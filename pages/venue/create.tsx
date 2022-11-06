import { FunctionComponent, useState } from "react";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import { navigation } from "../../data/navigationData";
import { getAllVenueClassifications } from "../../api/venue/getAllVenueClassifications";
import { getAllCampuses } from "../../api/campus/list";

const Layout = dynamic(import("../../components/Layout"), { ssr: false });

const VenuePage = dynamic(import("../../components/Venue"), {
  ssr: false,
});

const BreadcrumbsComponent = dynamic(import("../../components/Breadcrumbs"), {
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

interface IProps {
  classifications?: any[];
  campuses?: any[];
}

const CreateVenue: FunctionComponent<IProps> = ({
  classifications,
  campuses,
}) => {
  const [activeStep, setActiveStep] = useState(0);

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
            classifications,
            campuses,
          }}
        />
      ),
    },
  ];

  return (
    <Layout showSideNav={false} hiddenFooter data={navigation}>
      <Box className="mx-8">
        <Box className="flex justify-between ">
          <BreadcrumbsComponent
            currentPage="Url 3"
            previousPages={breadCrumbsData}
          />
        </Box>
        <VenuePage showCreateButton {...{ classifications, campuses }} />
      </Box>
    </Layout>
  );
};

export async function getServerSideProps() {
  const classifications = await getAllVenueClassifications();
  const campuses = await getAllCampuses();
  return {
    props: {
      classifications: classifications?.data,
      campuses: campuses?.data,
    },
  };
}

export default CreateVenue;
