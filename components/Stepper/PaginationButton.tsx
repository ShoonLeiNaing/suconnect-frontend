import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { colors } from "../../data/constant";
import SmallButton from "../Button/SmallButton";

interface IProps {
  handleNext?: any;
  handleBack?: any;
  showPrevious?: boolean;
  nextBtnTitle?: string;
}

const PaginationButton: FunctionComponent<IProps> = ({
  handleNext,
  handleBack,
  showPrevious,
  nextBtnTitle,
}) => {
  return (
    <Box
      color={colors.primaryColors.lightblue.lightblue1}
      className="flex gap-10 cursor-pointer"
    >
      {showPrevious && (
        <Typography
          fontSize="15px"
          className="flex gap-2 items-center"
          onClick={() => handleBack()}
        >
          <IoIosArrowBack fontSize="20px" /> Previous Step
        </Typography>
      )}
      <Typography
        fontSize="15px"
        className="flex gap-2 items-center"
        onClick={handleNext}
      >
        {nextBtnTitle} <IoIosArrowForward fontSize="20px" />
      </Typography>
    </Box>
  );
};

PaginationButton.defaultProps = {
  showPrevious: true,
  nextBtnTitle: "Next Step",
};

export default PaginationButton;
