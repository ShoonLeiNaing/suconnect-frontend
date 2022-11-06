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
const ViewProfileForm = dynamic(
  import("../../components/Profile/ViewProfileForm"),
  {
    ssr: false,
  }
);

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
