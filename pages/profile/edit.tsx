import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import BreadcrumbsComponent from "../../components/Breadcrumbs";
import Layout from "../../components/Layout";
import NameTag from "../../components/Profile/NameTag";

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
    <Layout allowToggle={false}>
      <Box color="black" className="container" px={7}>
        <BreadcrumbsComponent
          currentPage="Edit Profile"
          previousPages={breadCrumbsData}
        />
        <NameTag name="Thiha Swan Htet" currentPage="Update Profile" />
        <UpdateProfileForm />
      </Box>
    </Layout>
  );
};

export default EditProfile;
