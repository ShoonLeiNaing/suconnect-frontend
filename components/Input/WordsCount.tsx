import { Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface IProps {
  maxCount?: string | number;
  currentCount?: string | number;
}

const WordsCount: FunctionComponent<IProps> = ({ maxCount, currentCount }) => {
  return (
    <Typography textAlign="right" color="#9C9C9C" fontSize="13px">
      {currentCount} / {maxCount}
    </Typography>
  );
};

export default WordsCount;
