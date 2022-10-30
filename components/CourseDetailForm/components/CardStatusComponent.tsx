import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface IProps {
  title: string;
  total: string;
  bgColor: string;
  textColor?: string;
  onClickHandler?: any;
}

const CardStatusComponent: FunctionComponent<IProps> = ({
  title,
  total,
  bgColor,
  textColor,
  onClickHandler,
}) => {
  return (
    <Box
      className="py-6 rounded-xl w-48 text-center"
      sx={{ backgroundColor: bgColor }}
      onClick={onClickHandler}
    >
      <Typography
        className="text-2xl mb-1 font-semibold"
        sx={{ color: textColor }}
      >
        {total}
      </Typography>
      <Typography className="text-base" sx={{ color: textColor }}>
        {title}
      </Typography>
    </Box>
  );
};

CardStatusComponent.defaultProps = {
  textColor: "#333333",
};

export default CardStatusComponent;
