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
      height={{
        xl: "250px",
        lg: "250px",
        md: "250px",
        sm: "230px",
        xs: "fit-content",
      }}
      width={{
        xl: "230px",
        lg: "230px",
        md: "230px",
        sm: "200px",
        xs: "85%",
      }}
      color="white"
      className="cursor"
      sx={{ backgroundColor: color, zIndex: 2 }}
      p={2}
      borderRadius="20px"
    >
      <Box width={{ xl: "50px", md: "45px", sm: "35px", xs: "50px" }}>
        <Image src={icon} height={50} width={50} />
      </Box>
      <Typography
        fontWeight={500}
        fontSize={{ xl: "18px", md: "18px", xs: "16px" }}
      >
        {title}
      </Typography>
      <Typography
        my={1}
        mb={2}
        fontSize={{ xl: "15px", md: "15px", xs: "14px" }}
      >
        {text}
      </Typography>
      <Box sx={{ float: "right" }}>
        <SubButtonIcon color={color} fill={false} />
      </Box>
    </Box>
  );
};

export default EntityCard;
