import { Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { colors } from "../../data/constant";

interface IProps {
  text: string;
}
const Tagline: FunctionComponent<IProps> = ({ text }) => {
  return (
    <Typography
      fontSize="15px"
      my={1}
      maxWidth="500px"
      color={colors.grey.grey2}
      sx={{ zIndex: 2, position: "relative" }}
    >
      {text}
    </Typography>
  );
};

export default Tagline;
