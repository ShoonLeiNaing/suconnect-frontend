import { Box } from "@mui/material";
import BreadcrumbsComponent from "../../components/Breadcrumbs";
import Layout from "../../components/Layout";
import NameTag from "../../components/Profile/NameTag";
import ViewProfileForm from "../../components/Profile/ViewProfileForm";
import { colors } from "../../data/constant";

const breadCrumbsData = [
  {
    name: "Dashboard",
    link: "/dashboard",
  },
];

const Profile = () => {
  return (
    <Layout>
      <Box color="black" className="container" p={4}>
        <BreadcrumbsComponent
          currentPage="My Profile"
          previousPages={breadCrumbsData}
        />
        <NameTag name="Thiha Swan Htet" currentPage="Update Profile" />
        <ViewProfileForm />
      </Box>
    </Layout>
  );
};

export default Profile;
