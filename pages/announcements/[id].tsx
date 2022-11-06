import { NextPage } from "next";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import { navigation } from "../../data/navigationData";

const Layout = dynamic(import("../../components/Layout"), { ssr: false });
const AnnouncementDetailComponent = dynamic(
  import("../../components/Announcements/AnnouncementDetail"),
  {
    ssr: false,
  }
);

const AnnouncementDetail: NextPage = () => {
  return (
    <Layout data={navigation} hiddenFooter>
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
