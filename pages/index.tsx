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
// import FaqAccordions from "../components/FaqAccordions";
import { navigation } from "../data/navigationData";
// import { axiosInstance } from "../api/axios";

const Layout = dynamic(import("../components/Layout"), { ssr: false });

const Home: NextPage = () => {
  return (
    <Layout changeLanguage showSideNav={false} data={navigation}>
      <HeroParallax />
      <Box color="black" className="container" px={{ lg: 4, sm: 4, xs: 2 }}>
        <Announcements />
        <Entity />
        <Feature />
        <Benefit />
        <UserInnovation />
      </Box>
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
