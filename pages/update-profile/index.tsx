import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import BreadcrumbsComponent from "../../components/Breadcrumbs";
import Layout from "../../components/Layout";
import NameTag from "../../components/Profile/NameTag";
import { navigation } from "../../data/navigationData";

const UpdateProfileForm = dynamic(
  import("../../components/Profile/UpdateProfileForm")
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

const EditProfile = () => {
  return (
    <Layout allowToggle={false} data={navigation} panel="panel3" hiddenFooter>
      <Box color="black" className="container md:px-14">
        <Box className="px-4 md:px-0">
          <BreadcrumbsComponent
            currentPage="Edit Profile"
            previousPages={breadCrumbsData}
          />
          <NameTag name="Thiha Swan Htet" currentPage="Update Profile" />
        </Box>
        <UpdateProfileForm />
      </Box>
    </Layout>
  );
};

export default EditProfile;
