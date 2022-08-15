import { Container } from "@chakra-ui/react";
import { NextPage } from "next";
import AnnouncementDetailComponent from "../../components/Announcements/AnnouncementDetail";
import Layout from "../../components/Layout";
import PreviousPage from "../../components/PreviousPage";

const AnnouncementDetail: NextPage = () => {
  return (
    <Layout>
      <Container py={{ lg: 8 }} maxW={{ lg: "1250px" }}>
        <PreviousPage />
        <AnnouncementDetailComponent />
      </Container>
    </Layout>
  );
};

export default AnnouncementDetail;
