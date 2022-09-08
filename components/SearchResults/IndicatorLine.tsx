import { Box } from "@mui/material";
import { FunctionComponent } from "react";

interface IProps {
  color?: string;
  show: boolean;
}

const IndicatorLine: FunctionComponent<IProps> = ({ color, show }) => {
  return (
    <Box className={` ${show ? "block" : "hidden"} flex items-center`}>
      <Box
        className="inline-block p-[0.35rem] rounded-full"
        sx={{ backgroundColor: color }}
      />
      <Box
        className="inline-block w-full h-[0.2rem] rounded-r-xl"
        sx={{ backgroundColor: color }}
      />
    </Box>
  );
};

export default IndicatorLine;

IndicatorLine.defaultProps = {
  color: "#FF5151",
};
