import { NextPage } from "next";
import { Box } from "@mui/material";
import AnnouncementDetailComponent from "../../components/Announcements/AnnouncementDetail";
import Layout from "../../components/Layout";
import PreviousPage from "../../components/PreviousPage";
import HorizontalButton from "../../components/Button/HorizontalButton";

const AnnouncementDetail: NextPage = () => {
  return (
    // <Box bgcolor="white">
    //   <Layout>
    //     <LocalizationProvider dateAdapter={AdapterDateFns}>
    //       <DatePicker
    //         label="Basic example"
    //         value={value}
    //         onChange={(newValue) => {
    //           setValue(newValue);
    //         }}
    //         renderInput={(params) => <TextField {...params} />}
    //       />
    //     </LocalizationProvider>
    //   </Layout>
    // </Box>
    <Layout>
      <Box className="inner-container">
        <HorizontalButton />
        <Box color="black" className="container" py={2}>
          <PreviousPage />
          <AnnouncementDetailComponent />
        </Box>
      </Box>
    </Layout>
  );
};

export default AnnouncementDetail;
