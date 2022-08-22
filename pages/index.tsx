import type { GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Box } from "@mui/material";
import Announcements from "../components/Announcements";
import Benefit from "../components/Benefits";
import Entity from "../components/Entity";
import Feature from "../components/Feature";
import HeroParallax from "../components/HeroParallax";
import UserInnovation from "../components/UserInnovation";

const Layout = dynamic(import("../components/Layout"), { ssr: false });

const Home: NextPage = () => {
  return (
    <Layout changeLanguage>
      <HeroParallax />

      <Box color="black" className="container">
        {/* <Box className="inner-container"> */}
        <Announcements />
        <Entity />
        <Feature />
        <Benefit />
        <UserInnovation />
        {/* </Box> */}
      </Box>
      {/* <Container maxW={{ lg: "1250px" }}>
        <Announcements />
        
        <Feature />
        <Benefit />
        <UserInnovation />
      </Container> */}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["landing"])),
    },
  };
};

export default Home;
