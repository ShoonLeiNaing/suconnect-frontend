import type { NextPage } from "next";
import IconButton from "../components/IconButton";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      Hello World
      <IconButton />
    </div>
  );
};

export default Home;
