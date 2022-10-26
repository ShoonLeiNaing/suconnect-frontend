import { Box } from "@mui/material";
import BreadcrumbsComponent from "../../components/Breadcrumbs";
import Layout from "../../components/Layout";
import NameTag from "../../components/Profile/NameTag";
import ViewProfileForm from "../../components/Profile/ViewProfileForm";
import { navigation } from "../../data/navigationData";

const breadCrumbsData = [
  {
    name: "Dashboard",
    link: "/dashboard",
  },
];

const Profile = () => {
  return (
    <Layout allowToggle={false} data={navigation} hiddenFooter panel="panel1">
      <Box
        color="black"
        className="container"
        px={{ lg: 6, md: 4, sm: 4, xs: 2 }}
      >
        <Box>
          <BreadcrumbsComponent
            currentPage="My Profile"
            previousPages={breadCrumbsData}
          />
          <NameTag name="Thiha Swan Htet" currentPage="Update Profile" />
        </Box>
        <ViewProfileForm />
      </Box>
    </Layout>
  );
};

export default Profile;
