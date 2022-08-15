import { Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import Announcements from "../components/Announcements";
import Benefit from "../components/Benefits";
import Entity from "../components/Entity";
import Feature from "../components/Feature";
import HeroParallax from "../components/HeroParallax";
import Layout from "../components/Layout";
import UserInnovation from "../components/UserInnovation";

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroParallax />
      <Container maxW={{ lg: "1250px" }}>
        <Announcements />
        <Entity />
        <Feature />
        <Benefit />
        <UserInnovation />
      </Container>
    </Layout>
  );
};

export default Home;
