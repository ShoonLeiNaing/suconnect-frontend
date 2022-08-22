import { NextPage } from "next";
import { Box } from "@mui/material";
import AnnouncementDetailComponent from "../../components/Announcements/AnnouncementDetail";
import Layout from "../../components/Layout";
import PreviousPage from "../../components/PreviousPage";
import HorizontalButton from "../../components/Button/HorizontalButton";

const AnnouncementDetail: NextPage = () => {
  return (
    <Layout>
      <Box className="container">
        <Box color="black" py={2}>
          <AnnouncementDetailComponent />
        </Box>
      </Box>
    </Layout>
  );
};

export default AnnouncementDetail;
