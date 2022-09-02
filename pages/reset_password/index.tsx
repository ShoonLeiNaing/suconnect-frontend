import { Box } from "@mui/material";
import BreadcrumbsComponent from "../../components/Breadcrumbs";
import Layout from "../../components/Layout";
import NameTag from "../../components/Profile/NameTag";
import ResetPasswordForm from "../../components/ResetPasswordForm";

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

const ResetPassword = () => {
  return (
    <Layout>
      <Box color="black" className="container" px={7}>
        <BreadcrumbsComponent
          currentPage="Reset Password"
          previousPages={breadCrumbsData}
        />
        <NameTag
          name="Thiha Swan Htet"
          currentPage="Reset Password"
          tag="Lorem Ipsum Dorum"
        />
        <ResetPasswordForm />
      </Box>
    </Layout>
  );
};

export default ResetPassword;
