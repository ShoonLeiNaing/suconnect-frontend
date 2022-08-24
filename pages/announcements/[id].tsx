import { NextPage } from "next";
import { Box } from "@mui/material";
import AnnouncementDetailComponent from "../../components/Announcements/AnnouncementDetail";
import Layout from "../../components/Layout";
import PreviousPage from "../../components/PreviousPage";
import HorizontalButton from "../../components/Button/HorizontalButton";
import SideBarNav from "../../components/Navbar/SideBarNav";

const AnnouncementDetail: NextPage = () => {
  return (
    <Layout>
      <Box display="flex">
        <SideBarNav />
        <Box className="container">
          <Box color="black" py={2}>
            <AnnouncementDetailComponent />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default AnnouncementDetail;
