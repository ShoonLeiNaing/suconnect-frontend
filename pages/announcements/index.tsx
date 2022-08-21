import { NextPage } from "next";
import { Box } from "@mui/material";
import Layout from "../../components/Layout";
import PreviousPage from "../../components/PreviousPage";
import HorizontalButton from "../../components/Button/HorizontalButton";
import UserViewCards from "../../components/UserViewCards";

const AnnouncementUserView: NextPage = () => {
  return (
    <Layout>
      <HorizontalButton />
      <Box className="container" py={2}>
        <PreviousPage />
        <UserViewCards />
      </Box>
    </Layout>
  );
};

export default AnnouncementUserView;
