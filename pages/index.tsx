import type { GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Box } from "@mui/material";
import { navigation } from "../data/navigationData";

const Layout = dynamic(import("../components/Layout"), { ssr: false });
const UserInnovation = dynamic(import("../components/UserInnovation"), {
  ssr: false,
});
const HeroParallax = dynamic(import("../components/HeroParallax"), {
  ssr: false,
});
const Feature = dynamic(import("../components/Feature"), { ssr: false });
const Entity = dynamic(import("../components/Entity"), { ssr: false });
const Benefit = dynamic(import("../components/Benefits"), { ssr: false });
const Announcements = dynamic(import("../components/Announcements"), {
  ssr: false,
});

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
