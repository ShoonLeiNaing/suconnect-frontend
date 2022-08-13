import { Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import Announcements from "../components/Announcements";
import Entity from "../components/Entity";
import HeroParallax from "../components/HeroParallax";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroParallax />
      <Container maxW={{ lg: "1250px" }}>
        <Announcements />
        <Entity />
      </Container>
    </Layout>
  );
};

export default Home;
