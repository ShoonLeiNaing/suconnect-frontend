import { Box, Button, useDisclosure } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRef } from "react";
import FilterButton from "../components/FilterButton";
import Popup from "../components/Popup";
import SubButtonIcon from "../components/SubButton/SubButtonIcon";
import { colors } from "../data/constant";
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
  );
};

export default Home;
