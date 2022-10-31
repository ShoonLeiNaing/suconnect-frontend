import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import { navigation } from "../../data/navigationData";
// import ResetPasswordForm from "../../components/ResetPasswordForm";

const Layout = dynamic(import("../../components/Layout"), { ssr: false });
const BreadcrumbsComponent = dynamic(import("../../components/Breadcrumbs"), {
  ssr: false,
});
const ResetPasswordForm = dynamic(
  import("../../components/ResetPasswordForm"),
  { ssr: false }
);
const NameTag = dynamic(import("../../components/Profile/NameTag"), {
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

const ResetPassword = () => {
  return (
    <Layout data={navigation} panel="panel5">
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
