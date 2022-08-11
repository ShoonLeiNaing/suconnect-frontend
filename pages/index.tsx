import { Box, Button, useDisclosure } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { TbMap } from "react-icons/tb";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";
import { colors } from "../data/constant";
import FilterButton from "../components/FilterButton";
import Popup from "../components/Popup";
import SubButtonIcon from "../components/SubButton/SubButtonIcon";
import HorizontalButton from "../components/Button/HorizontalButton";
import VerticleButton from "../components/Button/VerticleButton";
import CardCarousel from "../components/CardCarousel";

// import SubButtonFill from "../components/SubButton/SubButtonFill";

const data: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday"];

const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: addIsOpen,
    onOpen: addOnOpen,
    onClose: addOnClose,
  } = useDisclosure();

  const cancelRef = useRef();

  return (
    <Box>
      <div className={styles.container}>
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
      </div>
      <Box display="flex" m="4" justifyContent="space-between">
        <Button onClick={onOpen}>Remove</Button>
        <Button onClick={addOnOpen}>Add</Button>
        <Popup
          type="remove"
          isOpen={isOpen}
          onClose={onClose}
          cancelRef={cancelRef}
        />
        <Popup
          type="add"
          isOpen={addIsOpen}
          onClose={addOnClose}
          cancelRef={cancelRef}
          color={colors.primaryColors.lightblue.lightblue1}
        />
        <SubButtonIcon
          fill={false}
          color={colors.primaryColors.lightblue.lightblue1}
        />
        <SubButtonIcon fill color={colors.primaryColors.lightblue.lightblue1} />
        <FilterButton
          outline
          color={colors.primaryColors.lightblue.lightblue1}
          title="This Week"
          data={data}
        />
        <FilterButton
          color={colors.primaryColors.lightblue.lightblue1}
          title="This Week"
          data={data}
        />
      </Box>

      <Box display="flex" m="8" justifyContent="space-around">
        <HorizontalButton
          text="Distribution"
          color={colors.primaryColors.pink.pink1}
          hoverColor={colors.primaryColors.pink.pink2}
          icon={TbMap}
        />
        <HorizontalButton
          text="Testing"
          icon={BsArrowRight}
          color={colors.primaryColors.lightblue.lightblue1}
          hoverColor={colors.primaryColors.lightblue.lightblue2}
        />
        <VerticleButton
          text="Distribution"
          color={colors.primaryColors.pink.pink1}
          hoverColor={colors.primaryColors.pink.pink2}
          icon={TbMap}
        />
        <VerticleButton
          text="See All"
          icon={BsArrowRight}
          color={colors.primaryColors.lightblue.lightblue1}
          hoverColor={colors.primaryColors.lightblue.lightblue2}
        />
      </Box>
      <Box display="flex" gap={8} m="8" justifyContent="center">
        <CardCarousel />
        {/* <GridCard color={colors.primaryColors.lightblue.lightblue1} />
        <GridCard color={colors.primaryColors.lightblue.lightblue1} />
        <GridCard color={colors.primaryColors.lightblue.lightblue1} />
        <GridCard color={colors.primaryColors.lightblue.lightblue1} /> */}
      </Box>
    </Box>
  );
};

export default Home;
