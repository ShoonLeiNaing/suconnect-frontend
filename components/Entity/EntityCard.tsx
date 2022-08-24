import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FunctionComponent } from "react";
import SubButtonIcon from "../SubButton/SubButtonIcon";

interface IProps {
  title: string;
  text: string;
  color: string;
  icon: string;
}

const EntityCard: FunctionComponent<IProps> = ({
  title,
  text,
  color,
  icon,
}) => {
  return (
    <Box
      height="250px"
      width="250px"
      color="white"
      className="cursor"
      sx={{ backgroundColor: color, zIndex: 2 }}
      p={2}
      borderRadius="20px"
    >
      <Image src={icon} height={50} width={50} />
      <Typography fontWeight={500} fontSize="18px">
        {title}
      </Typography>
      <Typography my={1} mb={2} fontSize="15px">
        {text}
      </Typography>
      <Box sx={{ float: "right" }}>
        <SubButtonIcon color={color} fill={false} />
      </Box>
    </Box>
  );
};

export default EntityCard;
