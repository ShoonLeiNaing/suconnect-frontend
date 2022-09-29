import { Box } from "@mui/material";
import { useState, FunctionComponent, useCallback } from "react";
import { RiFilterFill } from "react-icons/ri";
import { colors } from "../../data/constant";
import DynamicEventSchedular from "../EventSchedular/DynamicEventSchedular";
import IconButton from "../IconButton";
import SearchInput from "../SearchInput";
import PaginationButton from "../Stepper/PaginationButton";

interface IProps {
  handleNext?: any;
  handleBack?: any;
}

const AddLectureForm: FunctionComponent<IProps> = ({
  handleBack,
  handleNext,
}) => {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <Box
        className="rounded-xl flex"
        height="77vh"
        color={colors.black.black2}
        // overflow="scroll"
      >
        <Box width="320px">
          <Box className="flex gap-4">
            <SearchInput
              searchText={searchText}
              setSearchText={setSearchText}
              customWidth="235px"
            />
            <IconButton onClickHandler={() => {}} icon={<RiFilterFill />} />
          </Box>
          <Box className="border rounded-xl mt-4" height="90%">
            hehe
          </Box>
        </Box>
        <Box paddingX={3}>
          <DynamicEventSchedular />
        </Box>
      </Box>
      <Box className=" my-3 flex justify-end">
        <PaginationButton {...{ handleNext, handleBack }} />
      </Box>
    </>
  );
};

export default AddLectureForm;
