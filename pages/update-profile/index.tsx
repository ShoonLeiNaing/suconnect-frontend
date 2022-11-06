import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import { navigation } from "../../data/navigationData";

const Layout = dynamic(import("../../components/Layout"), { ssr: false });
const BreadcrumbsComponent = dynamic(import("../../components/Breadcrumbs"), {
  ssr: false,
});
const NameTag = dynamic(import("../../components/Profile/NameTag"), {
  ssr: false,
});
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
      <Box
        color="black"
        className="container"
        px={{ lg: 6, md: 4, sm: 4, xs: 2 }}
      >
        <Box>
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
