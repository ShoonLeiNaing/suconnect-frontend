import { NextPage } from "next";
import { Box } from "@mui/material";
import AnnouncementDetailComponent from "../../components/Announcements/AnnouncementDetail";
import Layout from "../../components/Layout";

const AnnouncementDetail: NextPage = () => {
  return (
    <Layout>
      {/* <Box display="flex">
        <Box> */}
      <Box color="black" py={2}>
        <AnnouncementDetailComponent />
        {/* </Box>
        </Box> */}
      </Box>
    </Layout>
  );
};

export default AnnouncementDetail;
