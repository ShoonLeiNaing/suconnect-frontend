import type { NextPage } from "next";
import IconButton from "../components/IconButton";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";
import {colors} from "../data/constant";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      Hello World
      <IconButton />
      <div className="flex justify-around my-8">
        <Card 
          iconTitleColor={colors.primaryColors.yellow.yellow1}
          title="Distribution"
          text="The distribution of algal species has been fairly well studied since the founding of phytogeography in the mid-19th century."
        />
        <Card 
          type="focus"
          title="Distribution"
          text="The distribution of algal species has been fairly well studied since the founding of phytogeography in the mid-19th century."
          textColor={colors.white.white1}
          backgroundColor={colors.primaryColors.pink.pink1}
        />
        <Card 
          type="focus"
          title="Distribution"
          text="The distribution of algal species has been fairly well studied since the founding of phytogeography in the mid-19th century."
          textColor={colors.white.white1}
          backgroundColor={colors.primaryColors.lightblue.lightblue1}
        />
      </div>
      <p className="text-2xl">Hello</p>
    </div>
  );
};

export default Home;
